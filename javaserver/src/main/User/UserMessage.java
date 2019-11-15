package User;

public enum UserMessage {
    AUTH_SUCCESS("AUTH_SUCCESS:Successfully Authenticated User"),
    AUTH_FAILURE("AUTH_FAILURE:Wrong Credentials"),
    HASH_FAILURE("HASH_FAILURE:Check Argon2 documentation"),
    USER_NOT_FOUND("USER_NOT_FOUND:User does not exist in database."),
    NO_EMAIL_ATTACHED("NO_EMAIL_ATTACHED:Their is no email attached to given user.");


    public String errorMessage;

    UserMessage(String errorMessage){
        this.errorMessage = errorMessage;
    }
    public String toString() {
        return this.errorMessage;
    }

    public String getErrorName(){
        return this.errorMessage.split(":")[0];
    }

    public String getErrorDescription(){
        return this.errorMessage.split(":")[1];
    }
}
