package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IReservationRepository extends JpaRepository<Reservation, Integer> {

    @Query("SELECT r FROM Reservation r WHERE r.user.email = ?1 AND r.product.productName = ?2")
    List<Reservation> findReservationByUserAndProduct(String useremail, String productname);

    @Query("SELECT r FROM Reservation r WHERE r.product.city.name = ?1")
    List<Reservation> findReservationByCity(String city);

    @Query("SELECT r FROM Reservation r WHERE r.user.id = ?1")
    List<Reservation> findReservationByUserId(Integer id);

    @Query("SELECT r FROM Reservation r WHERE r.product.id = ?1")
    List<Reservation> findReservationByProductId(Integer id);
}
