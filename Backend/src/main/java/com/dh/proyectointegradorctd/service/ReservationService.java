package com.dh.proyectointegradorctd.service;

import com.dh.proyectointegradorctd.model.Product;
import com.dh.proyectointegradorctd.model.Reservation;
import com.dh.proyectointegradorctd.model.User;
import com.dh.proyectointegradorctd.model.dto.ReservationDto;
import com.dh.proyectointegradorctd.repository.IReservationRepository;
import com.dh.proyectointegradorctd.util.UtilDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ReservationService implements IEntityService<Reservation> {

    /* ====================== Atributos =====================*/

    private final IReservationRepository reservationRepository;
    private final ProductService productService;
    private final UserService userService;

    /* ====================== Métodos =====================*/

    @Override
    public Reservation save(Reservation reservation) {

        Product pd = productService.findById(reservation.getProduct().getId());
        User us = userService.findById(reservation.getUser().getId());

        if(pd != null){
            reservation.setProduct(pd);
        }

        if(us != null){
            reservation.setUser(us);
        }

        return reservationRepository.save(reservation);

    }

    @Override
    public List<Reservation> findAll() {
        return reservationRepository.findAll();
    }

    @Override
    public Reservation findById(Integer id) {
        return reservationRepository.findById(id).orElse(null);
    }

    @Override
    public Reservation update(Reservation reservation) {

        Reservation rs = reservationRepository.findById(reservation.getId()).orElse(null);
        Product pd = productService.findById(reservation.getProduct().getId());
        User us = userService.findById(reservation.getUser().getId());

        if(pd != null){
            reservation.setProduct(pd);
        }

        if(us != null){
            reservation.setUser(us);
        }

        if(rs != null){

            rs.setUser(reservation.getUser());
            rs.setProduct(reservation.getProduct());
            rs.setReservationStartDate(reservation.getReservationStartDate());
            rs.setReservationEndDate(reservation.getReservationEndDate());
            rs.setReservationStartTime(reservation.getReservationStartTime());
            rs.setVaccinedCOVID(reservation.isVaccinedCOVID());

            return reservationRepository.save(rs);

        }else{
            return null;
        }
    }

    @Override
    public String delete(Integer id) {
        if(reservationRepository.findById(id).isPresent()){
            reservationRepository.deleteById(id);
            return "Reservation with id: " + id + " was deleted";
        }else{
            return "Reservation with id:" + id + " don't exist";
        }
    }

    public List<Reservation> findReservationByUseremailAndProductname(String useremail, String productname){
        return reservationRepository.findReservationByUserAndProduct(useremail, productname);
    }

    public List<Product> findProductsByCityAndStartEndDate(String city, String startDate, String endDate) {

        // Reservations filteres by city
        List<Reservation> reservationsCity = reservationRepository.findReservationByCity(city);

        // Reservations filtered by city that have a reservation with a start and end date range
        List<Reservation> reservationsStartEndDate = reservationsCity.stream().filter(r -> {
            List<LocalDate> rangeDates = UtilDate.getInstance().dateSpace(LocalDate.parse(startDate), LocalDate.parse(endDate));
            return rangeDates.contains(r.getReservationStartDate()) || rangeDates.contains(r.getReservationEndDate());
            //return r.getReservationStartDate().equals(LocalDate.parse(startDate)) || r.getReservationEndDate().equals(LocalDate.parse(endDate));
        }).collect(Collectors.toList());

        // Products filtered by city
        List<Product> productsCity = productService.getProductsByCity(city);

        // Products filtered by city that do not have a reservation with a start and end date and that are not reserved in the range of dates
        List<Product> productWithoutReservationStartEndDate = productsCity.stream().filter(p -> !reservationsStartEndDate.stream().
                filter(r -> {
                    List<LocalDate> rangeDates = UtilDate.getInstance().dateSpace(r.getReservationStartDate(), r.getReservationEndDate());
                    System.out.println(rangeDates);
                    return rangeDates.contains(r.getReservationStartDate()) || rangeDates.contains(r.getReservationEndDate());
                }).collect(Collectors.toList()).stream().map(Reservation::getProduct).collect(Collectors.toList()).contains(p))
                .collect(Collectors.toList());


        return productWithoutReservationStartEndDate;
    }

    public List<Reservation> findReservationByUserId(Integer id){
        return reservationRepository.findReservationByUserId(id);
    }

    public List<LocalDate> getReservationDates(Integer id){

        // Get date ranges of reservations by product id
        List<LocalDate> reservationDates = reservationRepository.findReservationByProductId(id).stream().map(r -> {
            List<LocalDate> rangeDates = UtilDate.getInstance().dateSpace(r.getReservationStartDate(), r.getReservationEndDate());
            return rangeDates;
        }).flatMap(List::stream).collect(Collectors.toList());

        return reservationDates;

    }

    /* ================== Mappers ======================= */

    public ReservationDto mapToDTO(Reservation reservation){
        return new ReservationDto(reservation.getId(), userService.mapToDTOWS(reservation.getUser()), productService.mapToDTO(reservation.getProduct()), reservation.getReservationStartTime(), reservation.getReservationStartDate(), reservation.getReservationEndDate(), reservation.isVaccinedCOVID());
    }

    /* ====================== Constructor =====================*/

    @Autowired
    public ReservationService(IReservationRepository reservationRepository, ProductService productService, UserService userService) {
        this.reservationRepository = reservationRepository;
        this.productService = productService;
        this.userService = userService;
    }
}
