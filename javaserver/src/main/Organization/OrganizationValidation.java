package Organization;
import java.io.IOException;
import java.util.regex.Pattern;

import Regex.ValRegex;
import Log.Log;
import io.javalin.http.Context;

public class OrganizationValidation {
	protected static boolean valOrg(Context ctx) throws SecurityException, IOException{
		Log l = new Log();
		String fn = ctx.formParam("firstname");
        String ln = ctx.formParam("lastname");
        String email = ctx.formParam("email");
        String password = ctx.formParam("password");
        String org = ctx.formParam("orgName");	
        
        //First Name
        if (fn == null || fn.strip().length() == 0) {
        	l.logger.warning("First Name Empty");
        	return false;
        }       
        if (fn.length() > 30 || fn.length() < 2) {
        	l.logger.warning("First Name Inappropriate Length " + fn.length());
        	return false;
        }
        if (!Pattern.matches(ValRegex.name, fn)) {
        	l.logger.warning("Invalid Characters used In First Name"); //Should I include
        	return false;
        }

        //Last Name
        if (ln == null || ln.strip().length() == 0) {
        	l.logger.warning("Last Name Empty");	
        	return false;
        }
        if (ln.length() > 30 || ln.length() < 2) {
        	l.logger.warning("Last Name Inappropriate Length " + fn.length());
        	return false;
        }
        if (!Pattern.matches(ValRegex.name, ln)) {
        	l.logger.warning("Invalid Characters Used In Last Name"); //Should I include
        	return false;
        }
        
        //Email
        if (email == null || email.strip().length() == 0) {
        	l.logger.warning("Email Empty");
        	return false;
        }
        if (email.length() > 40) {
        	l.logger.warning("Email Is Too Long " + email.length());
        	return false;
        }
        if (!Pattern.matches(ValRegex.email, email)) {
        	l.logger.warning("Email Uses Invalid Characters");  
        	return false;
        }
        
        //Password
        if (password == null || password.strip().length() == 0) {
        	l.logger.warning("Password Empty");
        	return false;
        }
        if (password.length() < 7) {
        	l.logger.warning("Password is less than 7 characters");
        	return false;
        }
        
        //Organization Name
        if (org == null || org.strip().length() == 0) {
        	l.logger.warning("Organization is Empty");
        	return false;
        }
        if (!Pattern.matches(ValRegex.org, org)) {
        	l.logger.warning("Organization Name Contains Invalid Characters");
        	return false;
        }
        return true;
    }
}
