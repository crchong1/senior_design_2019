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

public class UserController {
    public static Handler loginUser = ctx -> {
        String password = ctx.formParam("password");
        String username = ctx.formParam("username");

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
                ctx.result(UserMessage.USER_NOT_FOUND.getErrorName());
                argon2.wipeArray(passwordArr);
            }

            String hash = user.get("password", String.class);
            if (argon2.verify(hash, passwordArr)) {
                // Hash matches password
                ctx.result(UserMessage.AUTH_SUCCESS.getErrorName());
                ctx.sessionAttribute("privelegeLevel", user.get("privelegeLevel"));
            } else {
                // Hash doesn't match password
                ctx.result(UserMessage.AUTH_FAILURE.getErrorName());
            }
        } catch(Exception e) {
            ctx.result(UserMessage.HASH_FAILURE.getErrorName());
        } finally {
            // Wipe confidential data from cache
            argon2.wipeArray(passwordArr);
        }
    };
}
