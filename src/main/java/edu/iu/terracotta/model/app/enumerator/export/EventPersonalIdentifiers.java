package edu.iu.terracotta.model.app.enumerator.export;

import java.util.Arrays;

public enum EventPersonalIdentifiers {

    // NOTE: order is important!
    CANVAS_LOGIN_ID("canvas_login_id"),
    CANVAS_USER_NAME("canvas_user_name"),
    CANVAS_GLOBAL_ID("canvas_global_id"),
    CANVAS_USER_ID("canvas_user_id"),
    CANVAS_USER_GLOBAL_ID("canvas_user_global_id");

    public static final String FILENAME = "experiment.csv";

    private String field;


    private EventPersonalIdentifiers(String header) {
        this.field = header;
    }

    @Override
    public String toString() {
        return field;
    }

    public static String[] getFields() {
        return Arrays.stream(EventPersonalIdentifiers.values()).map(EventPersonalIdentifiers::toString).toArray(String[]::new);
    }

}
