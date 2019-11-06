import io.github.cdimascio.dotenv.Dotenv;
import io.javalin.Javalin;

public class Main {
    public static void main(String[] args) {

        Dotenv dotenv = Dotenv.load();

        Javalin app = Javalin.create()
                .start(Integer.parseInt(dotenv.get("PORT_NUMBER")));

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
}
