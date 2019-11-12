package Organization;

import com.github.fakemongo.Fongo;
import io.javalin.http.Context;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class OrganizationControllerTest {

    private Context ctx;

    @BeforeEach
    void setUp() {
        Fongo fongo = new Fongo("Fongo Server");
        ctx = mock(Context.class);
    }

    @Test
    void signUpValidOrg() {
        System.out.println("CONTEXT: ");
        System.out.println(ctx);

        Mockito.when(ctx.formParam("firstname")).thenReturn("fname");
        Mockito.when(ctx.formParam("lastname")).thenReturn("lname");
        Mockito.when(ctx.formParam("birthdate")).thenReturn("1/1/2000");
        Mockito.when(ctx.formParam("email")).thenReturn("xxx@xxx.com");
        Mockito.when(ctx.formParam("password")).thenReturn("badpassword");
        Mockito.when(ctx.formParam("orgName")).thenReturn("nameoforg");

        try {
            OrganizationController.enrollOrganization.handle(ctx);
            Mockito.verify(ctx).json(OrgEnrollmentStatus.SUCCESSFUL_ENROLLMENT);
        }
        catch (Exception e) {
            fail("Exception thrown.");
        }
    }

    @AfterEach
    void tearDown() {
    }
}