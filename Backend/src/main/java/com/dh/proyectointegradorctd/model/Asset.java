package com.dh.proyectointegradorctd.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "assets")
public class Asset {

    /* =========== Atributos ============== */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String fileName;
    private String fileType;
    private String URL;

    /* ============ Getters y Setters ============== */

    public Integer getId() {
        return id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    /* =========== Constructores ============== */

    public Asset(String fileName, String fileType, String URL) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.URL = URL;
    }

    public Asset() {
    }
}
