package User;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.*;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import Config.MongoConfig;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.bson.Document;

public class UserController {
    public static Handler loginUser = ctx -> {
        ctx.result(loginAuthenticate(ctx).getErrorName());
    };

    private static UserMessage loginAuthenticate(Context ctx) {
        Argon2 argon2 = Argon2Factory.create();
        // @validate make sure that username and password are not null
        String username = ctx.formParam("username");
        char[] password = ctx.formParam("password").toCharArray();
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
            if (argon2.verify(hash, password)) {
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
            argon2.wipeArray(password);
        }
    }
}
