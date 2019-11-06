package id.keep.Organization;

import com.google.gson.Gson;

public class Organization {
    private String name;

    public Organization(String name) {
        this.name = name;
    }

    /*
     * Getters.
     */
    public String getName() {
        return this.name;
    }

    public String toJSON() {
        Gson gson = new Gson();
        return gson.toJson(this);
    }
}