package com.dh.proyectointegradorctd.util;

public class FileUploadResponse {

    /* ================== Atributos =====================*/

    private String fileName;
    private String contentType;
    private String url;

    /* ================== Getters y Setters ======================== */

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    /* ================ Constructor ====================== */

    public FileUploadResponse(String fileName, String contentType, String url) {
        this.fileName = fileName;
        this.contentType = contentType;
        this.url = url;
    }
}
