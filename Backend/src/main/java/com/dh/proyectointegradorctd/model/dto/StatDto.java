package com.dh.proyectointegradorctd.model.dto;

public class StatDto {

    /* ================= Atributos ================== */

    private Integer id;
    private Integer userId;
    private Integer productId;
    private Double score;
    private Boolean isLike;

    /* ================= Getters y Setters =================== */

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
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

    /* ===================== Constructor ========================*/

    public StatDto(Integer id, Integer userId, Integer productId, Double score, Boolean isLike) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.score = score;
        this.isLike = isLike;
    }
}
