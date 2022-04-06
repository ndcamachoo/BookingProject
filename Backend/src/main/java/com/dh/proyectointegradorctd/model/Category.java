package com.dh.proyectointegradorctd.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {

    /*============= Atributos =============== */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;
    private String name;
    private String photoUrl;
    private String description;
    private String countProducts;

    /* ============= Getters y Setters ============== */

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCountProducts() {
        return countProducts;
    }

    public void setCountProducts(String countProducts) {
        this.countProducts = countProducts;
    }

    /* ================= Constructor ==================== */

    public Category(String name, String photoUrl, String description) {
        this.name = name;
        this.photoUrl = photoUrl;
        this.description = description;
    }

    public Category() {
    }
}
