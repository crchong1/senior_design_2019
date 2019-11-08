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

    @BeforeEach
    void setUp() {
        Fongo fongo = new Fongo("Fongo Server");
    }

    @Test
    void signUpValidOrg() {
        Context ctx = mock(Context.class);
        Mockito.when(ctx.formParam("firstname")).thenReturn("Greg");
    }

    @AfterEach
    void tearDown() {
    }
}