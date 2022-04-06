package com.dh.proyectointegradorctd.util;

public class AuthenticationResponse {

    /* ===================== Atributos ====================== */

    private final String jwt;

    /* ===================== Getters y Setters ===================== */

    public String getJwt() {
        return jwt;
    }

    /* ==================== Constructor ======================== */

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }


}
