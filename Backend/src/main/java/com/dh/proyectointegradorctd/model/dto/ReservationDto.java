package com.dh.proyectointegradorctd.model.dto;
import java.time.LocalDate;
import java.time.LocalTime;

public class ReservationDto {

    /* =================== Atributos ==================== */

    private Integer id;
    private UserDtoWS user;
    private ProductDto product;
    private LocalTime reservationStartTime;
    private LocalDate reservationStartDate;
    private LocalDate reservationEndDate;
    private Boolean isVaccinedCOVID;

    /* =================== Getters y Setters ==================== */

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public UserDtoWS getUser() {
        return user;
    }

    public void setUser(UserDtoWS user) {
        this.user = user;
    }

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
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

    public Boolean getVaccinedCOVID() {
        return isVaccinedCOVID;
    }

    public void setVaccinedCOVID(Boolean vaccinedCOVID) {
        isVaccinedCOVID = vaccinedCOVID;
    }

    /* =================== Constructor ==================== */

    public ReservationDto(Integer id, UserDtoWS user, ProductDto product, LocalTime reservationStartTime, LocalDate reservationStartDate, LocalDate reservationEndDate, Boolean isVaccinedCOVID) {
        this.id = id;
        this.user = user;
        this.product = product;
        this.reservationStartTime = reservationStartTime;
        this.reservationStartDate = reservationStartDate;
        this.reservationEndDate = reservationEndDate;
        this.isVaccinedCOVID = isVaccinedCOVID;
    }
}
