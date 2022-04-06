package com.dh.proyectointegradorctd.model;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    /*============= Atributos =============== */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    /* ============ Getters y Setters ============= */

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    /* ============ Constuctor ================ */

    public Role(String name) {
        this.name = name;
    }

    public Role() {
    }
}
