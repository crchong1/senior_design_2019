package User;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.*;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import Config.MongoConfig;
import io.javalin.http.Handler;
import org.bson.Document;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
import secerts.*;

import java.util.Properties;

public class UserController {
    public static Handler loginUser = ctx -> {
        ctx.result(loginAuthenticate(ctx.formParam("username"), ctx.formParam("password")).getErrorName());
    };

    public static Handler recoverPassword = ctx -> {
        ctx.result(recoverPassword(ctx.formParam("username")).getErrorName());
    };


    private static UserMessage recoverPassword(String username) {
        String host = "xxxxxxx@xxx.xxx";
        MongoClient client = MongoConfig.getMongoClient();
        MongoDatabase database = client.getDatabase(MongoConfig.getDatabaseName());
        MongoCollection<Document> userCollection = database.getCollection("user");
        Document user = userCollection.find(eq("username", username)).first();
        String to = null;
        if (user == null) {
            return UserMessage.USER_NOT_FOUND;
        }
        to = GetEmail(user);
        if (to == null){
            return UserMessage.NO_EMAIL_ATTACHED;
        }
        // look up database
        // generate unique hash of a random number
        return UserMessage.AUTH_FAILURE;
    };
    private static String GetEmail(Document user){
        return user.get("email", String.class);
    }
    private static boolean Send(String to, String from){
        Properties prop = System.getProperties();
        String host = "localhost";
        prop.setProperty("mail.smtp.host", host);
        Session session = Session.getDefaultInstance(properties);
        try{
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject("This is the Subject Line!");
            message.setText("This is actual message");
            Transport.send(message);
            return true;
        }
        catch{
            return false;
        }
    }
    private static String GenText(String userName){
        String token = secerts.token_urlsafe(16);
        return "";
    }

    private static UserMessage loginAuthenticate(String username, String password) {
        Argon2 argon2 = Argon2Factory.create();
        // @validate make sure that username and password are not null
        char[] passwordArr = password.toCharArray();
        try {
            // retrieve hash from database
            // do mongodb lookup here
            MongoClient client = MongoConfig.getMongoClient();
            MongoDatabase database = client.getDatabase(MongoConfig.getDatabaseName());
            MongoCollection<Document> userCollection = database.getCollection("user");
            Document user = userCollection.find(eq("username", username)).first();
            if (user == null) {
                return UserMessage.USER_NOT_FOUND;
            }

            String hash = user.get("password", String.class);
            if (argon2.verify(hash, passwordArr)) {
                // Hash matches password
                return UserMessage.AUTH_SUCCESS;
            } else {
                // Hash doesn't match password
                return UserMessage.AUTH_FAILURE;
            }
        } catch(Exception e) {
            return UserMessage.HASH_FAILURE;
        } finally {
            // Wipe confidential data from cache
            argon2.wipeArray(passwordArr);
        }
    }
}
