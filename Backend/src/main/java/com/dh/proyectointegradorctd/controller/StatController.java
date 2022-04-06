package com.dh.proyectointegradorctd.controller;

import com.dh.proyectointegradorctd.model.Product;
import com.dh.proyectointegradorctd.model.Stat;
import com.dh.proyectointegradorctd.model.User;
import com.dh.proyectointegradorctd.model.dto.StatDto;
import com.dh.proyectointegradorctd.service.ProductService;
import com.dh.proyectointegradorctd.service.StatService;
import com.dh.proyectointegradorctd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/stats")
public class StatController {

    /* ================== Atributos ==================== */

    private final StatService statService;
    private final UserService userService;
    private final ProductService productService;

    /* ================== GET =========================== */

    @GetMapping("")
    public List<StatDto> findAllStats(){
        return statService.findAll().stream().map(statService::mapToDTO).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findStatById(@PathVariable Integer id){

        Stat stat = statService.findById(id);

        if(stat != null){
            return new ResponseEntity(statService.mapToDTO(stat), HttpStatus.OK);
        }else{
            return new ResponseEntity("This stat id doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/users/{id}")
    public List<StatDto> findStatsByUserId(@PathVariable Integer id){
        return statService.findByUserId(id).stream().map(statService::mapToDTO).collect(Collectors.toList());
    }

    @GetMapping("/products/{id}")
    public List<StatDto> findStatsByProductId(@PathVariable Integer id){
        return statService.findByProductId(id).stream().map(statService::mapToDTO).collect(Collectors.toList());
    }

    /* ================== POST ========================== */

    @PostMapping("/save")
    public ResponseEntity<?> saveStat(@RequestBody Stat stat){

        User us = userService.findById(stat.getUser().getId());
        Product pr = productService.findById(stat.getProduct().getId());

        if(us == null || pr == null){
            return new ResponseEntity("This user or product id doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity(statService.mapToDTO(statService.save(stat)), HttpStatus.CREATED);
        }

    }

    /* ================== PUT =========================== */

    @PutMapping("/update")
    public ResponseEntity<?> updateStat(@RequestBody Stat stat){

        ResponseEntity response;

        if(statService.findById(stat.getId()) != null){
            response = new ResponseEntity(statService.mapToDTO(statService.update(stat)), HttpStatus.OK);
        }else{
            response = new ResponseEntity("Stat with id:" + stat.getId() + " don't exist", HttpStatus.NO_CONTENT);
        }

        return response;
    }

    /* ================== DELETE ======================== */

    @DeleteMapping("/delete/{id}")
    public String deleteStat(@PathVariable Integer id){
        return statService.delete(id);
    }

    /* ================== Constructor ==================== */

    @Autowired
    public StatController(StatService statService, UserService userService, ProductService productService) {
        this.statService = statService;
        this.userService = userService;
        this.productService = productService;
    }
}
