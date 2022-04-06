package com.dh.proyectointegradorctd.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity()
@Table(name = "reservations")
public class Reservation {

    /*============= Atributos =============== */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private LocalTime reservationStartTime;
    private LocalDate reservationStartDate;
    private LocalDate reservationEndDate;
    private boolean isVaccinedCOVID;

    /* =========== Getters y Setters ================== */

    public Integer getId() {
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

    public LocalTime getReservationStartTime() {
        return reservationStartTime;
    }

    public void setReservationStartTime(LocalTime reservationStartTime) {
        this.reservationStartTime = reservationStartTime;
    }

    public LocalDate getReservationStartDate() {
        return reservationStartDate;
    }

    public void setReservationStartDate(LocalDate reservationStartDate) {
        this.reservationStartDate = reservationStartDate;
    }

    public LocalDate getReservationEndDate() {
        return reservationEndDate;
    }

    public void setReservationEndDate(LocalDate reservationEndDate) {
        this.reservationEndDate = reservationEndDate;
    }

    public boolean isVaccinedCOVID() {
        return isVaccinedCOVID;
    }

    public void setVaccinedCOVID(boolean vaccinedCOVID) {
        isVaccinedCOVID = vaccinedCOVID;
    }

    /* =========== Constructores ================== */

    public Reservation(User user, Product product, LocalTime reservationStartTime, LocalDate reservationStartDate, LocalDate reservationEndDate, boolean isVaccinedCOVID) {
        this.user = user;
        this.product = product;
        this.reservationStartTime = reservationStartTime;
        this.reservationStartDate = reservationStartDate;
        this.reservationEndDate = reservationEndDate;
        this.isVaccinedCOVID = isVaccinedCOVID;
    }

    public Reservation() {
    }
}
