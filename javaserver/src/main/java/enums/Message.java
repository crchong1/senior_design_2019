package enums;

public enum Message {
    AUTH_SUCCESS("AUTH_SUCCESS:Successfully Authenticated User"),
    AUTH_FAILURE("AUTH_FAULURE:Wrong Credentials"),
    HASH_FAILURE("HASH_FAILURE:Check Argon2 documentation");

    public String errorMessage;

    Message(String errorMessage){
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
