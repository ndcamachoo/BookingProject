package com.dh.proyectointegradorctd.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "cities")
public class City {

    /* =============== Atributos ================= */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String country;

    /* =============== Getters y Setters ==================== */

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    /* =============== Métodos =================== */

    /* =============== Constructor ================== */

    public City(String name, String country) {
        this.name = name;
        this.country = country;
    }

    public City() {
    }
}
