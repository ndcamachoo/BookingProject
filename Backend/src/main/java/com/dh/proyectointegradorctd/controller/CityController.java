package com.dh.proyectointegradorctd.controller;

import com.dh.proyectointegradorctd.model.Category;
import com.dh.proyectointegradorctd.model.City;
import com.dh.proyectointegradorctd.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/city")
public class CityController {

    /* =============================== Atributos ================================= */

    private final CityService cityService;

    /* ================== GET ====================*/

    @GetMapping("")
    public List<City> findAllUsers(){
        return cityService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findCityById(@PathVariable Integer id){

        City tmp = cityService.findById(id);

        if(tmp != null){
            return new ResponseEntity(tmp, HttpStatus.OK);
        }else{
            return new ResponseEntity("This city id doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }
    }

    /* ================== POST ====================*/

    @PostMapping("/save")
    public ResponseEntity<?> saveCity(@RequestBody City city){

        ResponseEntity response;

        if(cityService.findCityByCountryAndName(city.getCountry(), city.getName()) != null){
            response = new ResponseEntity("The city already exists, please change it", HttpStatus.CONFLICT);
        } else{
            response = new ResponseEntity(cityService.save(city), HttpStatus.CREATED);
        }

        return response;

    }

    /* ================== PUT ====================*/

    @PutMapping("/update")
    public ResponseEntity<?> updateCity(@RequestBody City city){

        ResponseEntity response;

        if(cityService.findById(city.getId()) != null){
            response = new ResponseEntity(cityService.update(city), HttpStatus.OK);
        }else{
            response = new ResponseEntity("City with id:" + city.getId() + " don't exist", HttpStatus.NO_CONTENT);
        }

        return response;
    }

    /* ================== DELETE ====================*/

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCity(@PathVariable Integer id){

        ResponseEntity response;

        if(cityService.findById(id) != null){
            cityService.delete(id);
            response = new ResponseEntity("City with id:" + id + " was deleted", HttpStatus.OK);
        }else{
            response = new ResponseEntity("City with id:" + id + " don't exist", HttpStatus.NO_CONTENT);
        }

        return response;
    }


    /* ================== Constructor ======================== */

    @Autowired
    public CityController(CityService cityService) {
        this.cityService = cityService;
    }
}
