package com.dh.proyectointegradorctd.util;

import javax.persistence.*;

@Entity
@Table(name = "filedocument")
public class FileDocument {

    /* ========================= Atributos ================================*/

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String filename;

    @Lob
    private byte[] docFile;


    /* ======================== Getters y Setters ================================= */

    public Integer getId() {
        return id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public byte[] getDocFile() {
        return docFile;
    }

    public void setDocFile(byte[] docFile) {
        this.docFile = docFile;
    }

    /* ========================== Constructor ========================== */

    public FileDocument(String filename, byte[] docFile) {
        this.filename = filename;
        this.docFile = docFile;
    }

    public FileDocument() {
    }
}
