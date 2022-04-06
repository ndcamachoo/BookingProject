package com.dh.proyectointegradorctd.model;

import javax.persistence.*;

@Entity
@Table(name = "stats")
public class Stat {

    /* =================== Atributos ========================= */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private Double score;
    private Boolean isLike;

    /* ================== Getters y Setters ========================== */

    public int getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Boolean getLike() {
        return isLike;
    }

    public void setLike(Boolean like) {
        isLike = like;
    }

    /* =================== Constructores ========================= */

    public Stat(User user, Product product, Double score, Boolean isLike) {
        this.user = user;
        this.product = product;
        this.score = score;
        this.isLike = isLike;
    }

    public Stat() {
    }
}

