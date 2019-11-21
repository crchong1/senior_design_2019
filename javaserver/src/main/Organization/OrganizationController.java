package Organization;

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

        MongoDatabase database = MongoConfig.getMongoClient()
                .getDatabase(MongoConfig.getDatabaseName());

        MongoCollection<Document> orgCollection = database.getCollection("organization");
        Document existingOrg = orgCollection.find(eq("orgName", orgName)).first();
        
        if (existingOrg != null) {
            ctx.json(OrgEnrollmentStatus.ORG_EXISTS);
        }
        else {
            String adminFirstname = ctx.formParam("firstname").toLowerCase();
            String adminLastname = ctx.formParam("lastname").toLowerCase();
            String birthdate = ctx.formParam("birthdate");
            String adminUsername = adminFirstname + "-" + adminLastname
                    + "-" + orgName + "-" + birthdate;
            String adminEmail = ctx.formParam("email").toLowerCase();

            Argon2 argon2 = Argon2Factory.create();
            char[] password = ctx.formParam("password").toCharArray();
            String passwordHash;
            try {
                passwordHash = argon2.hash(10, 65536, 1, password);
                argon2.wipeArray(password);
            }
            catch (Exception e) {
                argon2.wipeArray(password);
                ctx.json(OrgEnrollmentStatus.PASS_HASH_FAILURE);
                return;
            }

            MongoCollection<Document> userCollection = database.getCollection("user");
            Document newAdmin = new Document("username", adminUsername)
                    .append("password", passwordHash)
                    .append("organization", orgName)
                    .append("email", adminEmail)
                    .append("firstname", adminFirstname)
                    .append("lastname", adminLastname)
                    .append("birthdate", birthdate)
                    .append("usertype", "admin");
            userCollection.insertOne(newAdmin);

            Document newOrg = new Document("orgName", orgName);
            orgCollection.insertOne(newOrg);
            ctx.json(OrgEnrollmentStatus.SUCCESSFUL_ENROLLMENT);
        }
    };
}
