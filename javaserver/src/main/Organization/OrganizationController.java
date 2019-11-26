package Organization;

import User.UserMessage;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import Config.MongoConfig;
import io.javalin.http.Handler;
import org.bson.Document;
import static com.mongodb.client.model.Filters.*;

public class OrganizationController {
    public static Handler enrollOrganization = ctx -> {
        String orgName = ctx.formParam("orgName");
        String orgWebsite = ctx.formParam("orgWebsite").toLowerCase();
        String adminName = ctx.formParam("name").toLowerCase();
        String orgContactPhoneNumber = ctx.formParam("phone").toLowerCase();
        String email = ctx.formParam("email").toLowerCase();
        String username = ctx.formParam("username");
        String password = ctx.formParam("password");
        String address = ctx.formParam("address").toLowerCase();
        String city = ctx.formParam("city").toLowerCase();
        String state = ctx.formParam("state").toUpperCase();
        String zipcode = ctx.formParam("zipcode");
        String taxCode = ctx.formParam("taxCode");
        Integer numUsers = Integer.parseInt(ctx.formParam("numUsers"));

        MongoDatabase database = MongoConfig.getMongoClient()
                .getDatabase(MongoConfig.getDatabaseName());

        MongoCollection<Document> orgCollection = database.getCollection("organization");
        Document existingOrg = orgCollection.find(eq("orgName", orgName)).first();

        MongoCollection<Document> userCollection = database.getCollection("user");
        Document existingUser = userCollection.find(eq("username", username)).first();

        if (existingOrg != null) {
            ctx.json(OrgEnrollmentStatus.ORG_EXISTS);
            return;
        }
        else if (existingUser != null) {
            ctx.json(UserMessage.USERNAME_ALREADY_EXISTS.getErrorName());
        }
        else {
            Argon2 argon2 = Argon2Factory.create();
            char[] passwordArr = password.toCharArray();
            String passwordHash;
            try {
                passwordHash = argon2.hash(10, 65536, 1, passwordArr);
                argon2.wipeArray(passwordArr);
            }
            catch (Exception e) {
                argon2.wipeArray(passwordArr);
                ctx.json(OrgEnrollmentStatus.PASS_HASH_FAILURE);
                return;
            }

            Document newAdmin = new Document("username", username)
                    .append("password", passwordHash)
                    .append("organization", orgName)
                    .append("email", email)
                    .append("name", adminName)
                    .append("privilegeLevel", "admin");
            userCollection.insertOne(newAdmin);

            Document newOrg = new Document("orgName", orgName)
                    .append("website", orgWebsite)
                    .append("contact number", orgContactPhoneNumber)
                    .append("street address", address)
                    .append("city", city)
                    .append("state", state)
                    .append("zipcode", zipcode)
                    .append("taxCode", taxCode)
                    .append("expectedNumUsers", numUsers);
            orgCollection.insertOne(newOrg);

            /*
            Algorithm algo = Algorithm.HMAC256("secret");
            String token = JWT.create()
                    .withClaim("privilegeLevel", "admin")
                    .withClaim("orgName", orgName)
                    .sign(algo);
            ctx.cookieStore("token", token);
             */
            ctx.json(OrgEnrollmentStatus.SUCCESSFUL_ENROLLMENT);
        }
    };
}
