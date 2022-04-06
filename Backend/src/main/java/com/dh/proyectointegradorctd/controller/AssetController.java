package com.dh.proyectointegradorctd.controller;

import com.dh.proyectointegradorctd.model.Asset;
import com.dh.proyectointegradorctd.service.AssetService;
import com.dh.proyectointegradorctd.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/assets")
public class AssetController {

    /* =================== Atributos ======================== */

    private final AssetService assetService;
    private final StorageService storageService;

    /* =================== GET ======================== */

    @GetMapping("")
    public List<Asset> findAllAssets() {
        return assetService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findAssetById(@PathVariable Integer id) {

        Asset tmp = assetService.findById(id);

        if (tmp != null) {
            return new ResponseEntity<>(tmp, HttpStatus.OK);
        }else{
            return new ResponseEntity<>("File not found in the database", HttpStatus.NOT_FOUND);
        }


    }

    @GetMapping("/search/{name}")
    public ResponseEntity<?> findAssetByName(@PathVariable String name) {

        Asset tmp = assetService.findByFileNameContaining(name);

        if (tmp != null) {
            return new ResponseEntity<>(tmp, HttpStatus.OK);
        }else{
            return new ResponseEntity<>("File not found in the database", HttpStatus.NOT_FOUND);
        }

    }

    /* =================== DELETE ======================== */

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAssetById(@PathVariable Integer id) {

        Asset tmp = assetService.findById(id);

        if (tmp != null) {

            storageService.deleteFile(tmp.getFileName());
            assetService.delete(id);
            return new ResponseEntity<>("File removed from database ", HttpStatus.NO_CONTENT);

        }else{
            return new ResponseEntity<>("File not found in the database", HttpStatus.NOT_FOUND);
        }

    }

    /* =================== Constructor ======================== */

    @Autowired
    public AssetController(AssetService assetService, StorageService storageService) {
        this.assetService = assetService;
        this.storageService = storageService;
    }
}
