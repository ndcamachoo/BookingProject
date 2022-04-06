package com.dh.proyectointegradorctd.controller;

import com.amazonaws.services.s3.AmazonS3;
import com.dh.proyectointegradorctd.model.Asset;
import com.dh.proyectointegradorctd.service.AssetService;
import com.dh.proyectointegradorctd.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/files")
public class UploadDownloadController {

    /* ==================== Atributos ======================== */

    private final StorageService storageService;
    private final AssetService assetService;

    /* ================== GET ====================*/

    @GetMapping("/download/{fileName}")
    public ResponseEntity<?> downloadFileAws(@PathVariable String fileName, HttpServletResponse response) throws IOException {

        Asset tmp = assetService.findByFileName(fileName);

        if(tmp != null) {
            String awsUrl = "https://assets-g4-booking.s3.amazonaws.com/" + fileName;
            response.sendRedirect(awsUrl);
            return new ResponseEntity<>(HttpStatus.PERMANENT_REDIRECT);
        }else{
            return new ResponseEntity<>("The file does not exist, please change it", HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/list")
    public ResponseEntity<?> listFiles() {
        return new ResponseEntity<>(storageService.listFiles(), HttpStatus.OK);
    }


    /* ================== POST ====================*/

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam(value = "file") MultipartFile file) throws IOException {

        String filename = file.getOriginalFilename();

        if(assetService.findByFileName(filename) == null) {

            List<String> file1 = storageService.uploadFile(file);
            Asset tmp = new Asset(file1.get(1), file.getContentType(), file1.get(0));

            return new ResponseEntity<>(assetService.save(tmp), HttpStatus.OK);

        }else{
            return new ResponseEntity<>("File already exists", HttpStatus.BAD_REQUEST);
        }
    }

    /* ==================== DELETE ======================== */

    @DeleteMapping("/delete/{fileName}")
    public ResponseEntity<String> deleteFile(@PathVariable String fileName) {
        return new ResponseEntity<>(storageService.deleteFile(fileName), HttpStatus.OK);
    }

    /* =================== Constructor ======================== */

    @Autowired
    public UploadDownloadController(StorageService storageService, AssetService assetService) {
        this.storageService = storageService;
        this.assetService = assetService;
    }
}
