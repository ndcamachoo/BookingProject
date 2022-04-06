package com.dh.proyectointegradorctd.model.dto;

public class UserDtoWS {

    /* ==================== Atributos ========================== */

    private Integer id;
    private String nombre;
    private String apellido;
    private String email;

    /* ==================== Getters y Setters ========================== */

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    /* ===================== Constructor ======================== */

    public UserDtoWS(Integer id, String nombre, String apellido, String email) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}
