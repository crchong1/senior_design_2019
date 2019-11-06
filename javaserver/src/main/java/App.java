import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import enums.Message;
import io.github.cdimascio.dotenv.Dotenv;
import io.javalin.Javalin;
import io.javalin.apibuilder.ApiBuilder;
import io.javalin.apibuilder.EndpointGroup;
import static io.javalin.apibuilder.ApiBuilder.*;
import controllers.UserController;
import io.javalin.core.compression.Brotli;
import io.javalin.core.compression.Gzip;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class App {
    public static Long ASYNC_TIME_OUT = 10L;
    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure().directory("./").load();
        Javalin app = Javalin.create(config->{
            config.asyncRequestTimeout = ASYNC_TIME_OUT;        // timeout for async requests (default is 0, no timeout)
            config.autogenerateEtags = false;                    // auto generate etags (default is false)
            config.compressionStrategy(new Brotli(4), new Gzip(6));  // set the compression strategy and levels - since 3.2.0
            config.contextPath = "/";                       // context path for the http servlet (default is "/")
            config.defaultContentType = "text/plain";         // content type to use if no content type is set (default is "text/plain")
            config.dynamicGzip = true;                 // dynamically gzip http responses (default is true)
            config.enableCorsForAllOrigins();               // enable cors for all origins
            config.enableDevLogging();                       // enable extensive development logging for http and websocket
            config.enforceSsl = true;                  // redirect http traffic to https (default is false)
            config.logIfServerNotStarted = true;       // log a warning if user doesn't start javalin instance (default is true)
            config.prefer405over404 = false;            // send a 405 if handlers exist for different verb on the same path (default is false)
//            config.requestLogger();                    // set a request logger
//            config.sessionHandler();                   // set a SessionHandler
        }).start(Integer.parseInt(dotenv.get("PORT_NUMBER")));

        // how we handle the api
        app.routes(() -> {
//            path("users", () -> {
//                get(UserController::getAllUsers);
//                post(UserController::createUser);
//                path(":id", () -> {
//                    get(UserController::getUser);
//                    patch(UserController::updateUser);
//                    delete(UserController::deleteUser);
//                });
//                ws("events", userController::webSocketEvents);
//            });
        });

        app.post("/login", ctx -> {
            ctx.result(loginAuthenticate(ctx).getErrorName());
        });
        /*
         * Server API:
         *
         * TODO: /login
         *     - Takes {
         *          username:
         *          password:
         *      }.
         *     - Logs a user in, given a username and password.
         *     - Sets proper privilege level.
         *
         * TODO: /organization-signup
         *     - Takes Organization and admin json:
         *       {
         *          organization: {
         *                  ...
         *          },
         *          admin: {
         *              ...
         *          }
         *       }
         *     - Adds the organization to the database, as well as the first admin.
         *     - TODO: Returns a status:
         *          - Organization already exists.
         *          - Error in database.
         *          - Organization is not in database.
         *
         * TODO: /worker-enroll
         *     - Takes a User JSON.
         *     - Signs up an admin or worker of an organization.
         *     - Must be enrolled by another admin, so credentials must be checked.
         *     - TODO: Returns whether or not the worker was successfully added to DB.
         *
         * TODO: /document
         *     - Takes userID and document name
         *
         * TODO: /put-documents
         *     - Adds a document to the user's db entry
         */
    }

    private static Message loginAuthenticate(Context ctx) {
        Argon2 argon2 = Argon2Factory.create();
        // @validate make sure that username and password are not null
        String username = ctx.formParam("username");
        char[] password = ctx.formParam("password").toCharArray();
        try {
            // retrieve hash from database
            // do mongodb lookup here
            String hash = argon2.hash(10, 65536, 1, password);;
            if (argon2.verify(hash, password)) {
                // Hash matches password
                return Message.AUTH_SUCCESS;
            } else {
                // Hash doesn't match password
                return Message.AUTH_FAILURE;
            }
        } catch(Exception e) {
            return Message.HASH_FAILURE;
        } finally {
            // Wipe confidential data from cache
            argon2.wipeArray(password);
        }
    };
}
