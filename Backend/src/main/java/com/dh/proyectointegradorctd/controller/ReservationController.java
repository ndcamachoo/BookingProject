package com.dh.proyectointegradorctd.controller;

import com.dh.proyectointegradorctd.model.Product;
import com.dh.proyectointegradorctd.model.Reservation;
import com.dh.proyectointegradorctd.model.User;
import com.dh.proyectointegradorctd.model.dto.ReservationDto;
import com.dh.proyectointegradorctd.service.CityService;
import com.dh.proyectointegradorctd.service.ProductService;
import com.dh.proyectointegradorctd.service.ReservationService;
import com.dh.proyectointegradorctd.service.UserService;
import com.dh.proyectointegradorctd.util.UtilDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/reservations")
public class ReservationController {

    /* =============================== Atributos ================================= */

    private final ReservationService reservationService;
    private final UserService userService;
    private final ProductService productService;
    private final CityService cityService;

    /* ================== GET ====================*/

    @GetMapping("")
    public List<ReservationDto> findAllReservations() {
        return reservationService.findAll().stream().map(reservationService::mapToDTO).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findReservationById(@PathVariable Integer id) {

        Reservation rs = reservationService.findById(id);

        if (rs != null) {
            return new ResponseEntity(reservationService.mapToDTO(rs), HttpStatus.OK);
        } else {
            return new ResponseEntity("This reservation id doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/search/{city}")
    public ResponseEntity<?> getProductsAvailableForReservation(@PathVariable String city, @RequestParam(required = false) String startdate, @RequestParam(required = false) String enddate) {

        if(cityService.findCityByName(city) == null){
            return new ResponseEntity("The city doesn't exists, please change it", HttpStatus.CONFLICT);
        }else if(city != null && startdate == null && enddate == null){
            return new ResponseEntity(productService.getProductsByCity(city).stream().map(productService::mapToDTO).collect(Collectors.toList()), HttpStatus.CONFLICT);
        }else if(city != null && startdate == null || enddate == null){
            return new ResponseEntity("The endpoint requests both dates, please change it", HttpStatus.CONFLICT);
        }else{
            return new ResponseEntity<>(reservationService.findProductsByCityAndStartEndDate(city, startdate, enddate).stream().map(productService::mapToDTO).collect(Collectors.toList()), HttpStatus.OK);
        }

    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> findReservationByUserId(@PathVariable Integer id) {

        User user = userService.findById(id);

        if (user != null) {
            return new ResponseEntity(reservationService.findReservationByUserId(id).stream().map(reservationService::mapToDTO).collect(Collectors.toList()), HttpStatus.OK);
        } else {
            return new ResponseEntity("This user id doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }

    }
    /* ================== POST ====================*/

    @PostMapping("/save")
    public ResponseEntity<?> saveReservation(@RequestBody Reservation reservation) {

        ResponseEntity response;
        Product pd = productService.findById(reservation.getProduct().getId());
        User us = userService.findById(reservation.getUser().getId());

        List <Reservation> reservationList = reservationService.findReservationByUseremailAndProductname(reservation.getUser().getEmail(),reservation.getProduct().getProductName());

        List<Reservation> ReservationsDates = reservationList.stream().filter(reservation1 -> {
            List<LocalDate> dates = UtilDate.getInstance().dateSpace(reservation1.getReservationStartDate(), reservation1.getReservationEndDate());
            return (dates.contains(reservation.getReservationStartDate()) || dates.contains(reservation.getReservationEndDate()));
        }).collect(Collectors.toList());


        if(ReservationsDates.size() > 0) {
            return new ResponseEntity("This reservation already exists", HttpStatus.CONFLICT);
        }else if (userService.findByEmail(reservation.getUser().getEmail()) == null || us == null) {
            response = new ResponseEntity("The user doesn't exists, please change it", HttpStatus.CONFLICT);
        } else if (productService.findProductByName(reservation.getProduct().getProductName()) == null || pd == null) {
            response = new ResponseEntity("The product doesn't exists, please change it", HttpStatus.CONFLICT);
        }else {

            if(pd != null){
                reservation.setProduct(pd);
            }

            if(us != null){
                reservation.setUser(us);
            }

            response = new ResponseEntity(reservationService.mapToDTO(reservationService.save(reservation)), HttpStatus.CREATED);
        }

        return response;

    }

    @GetMapping("/product/dates/{id}")
    public ResponseEntity<?> getReservationDatesByProductId(@PathVariable Integer id) {

        Product pd = productService.findById(id);

        if(pd == null){
            return new ResponseEntity("This product doesn't exists, please correct it", HttpStatus.CONFLICT);
        }else{
            return new ResponseEntity<>(reservationService.getReservationDates(id), HttpStatus.OK);
        }

    }

    /* ================== PUT ====================*/

    @PutMapping("/update")
    public ResponseEntity<?> updateReservation(@RequestBody Reservation reservation) {

        ResponseEntity response;

        Product pd = productService.findById(reservation.getProduct().getId());
        User us = userService.findById(reservation.getUser().getId());

        if (reservationService.findById(reservation.getId()) == null) {
            response = new ResponseEntity("Product with id:" + reservation.getId() + " don't exist", HttpStatus.NO_CONTENT);
        } else if (userService.findByEmail(reservation.getUser().getEmail()) == null || us == null) {
            response = new ResponseEntity("The user doesn't exists, please change it", HttpStatus.CONFLICT);
        } else if (productService.findProductByName(reservation.getProduct().getProductName()) == null || pd == null) {
            response = new ResponseEntity("The product doesn't exists, please change it", HttpStatus.CONFLICT);
        }else {

            if(pd != null){
                reservation.setProduct(pd);
            }

            if(us != null){
                reservation.setUser(us);
            }

            response = new ResponseEntity(reservationService.mapToDTO(reservationService.update(reservation)), HttpStatus.OK);
        }

        return response;
    }

    /* ================== DELETE ====================*/

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Integer id) {
        return reservationService.delete(id);
    }

    /* ================== Constructor ======================== */

    @Autowired
    public ReservationController(ReservationService reservationService, UserService userService, ProductService productService, CityService cityService) {
        this.reservationService = reservationService;
        this.userService = userService;
        this.productService = productService;
        this.cityService = cityService;
    }
}
