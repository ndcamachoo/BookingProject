package com.dh.proyectointegradorctd.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.util.IOUtils;
import com.dh.proyectointegradorctd.model.Asset;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StorageService {

    /* ========== Atributos ============= */

    @Value("assets-g4-booking")
    private String bucketName;
    private final AmazonS3 s3Client;

    /* =========== Métodos ============== */

    public List<String> uploadFile(MultipartFile file) throws IOException {

        //File fileObj = convertMultiPartFileToFile(file);

        File fileObj= new File(System.getProperty("java.io.tmpdir")+"/"+file.getOriginalFilename());
        file.transferTo(fileObj);

        String ref = String.valueOf(System.currentTimeMillis());
        String fileName = ref.substring(ref.length()-4) + "_" + file.getOriginalFilename().replace(" ","_");
        s3Client.putObject(new PutObjectRequest(bucketName, fileName, fileObj));
        String awsUrl = s3Client.getUrl(bucketName, fileName).toString();
        String serverUrl = "http://g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/files/download/" + fileName;
        return Arrays.asList(awsUrl, fileName);

    }


    public byte[] downloadFile(String fileName) {
        S3Object s3Object = s3Client.getObject(bucketName, fileName);
        S3ObjectInputStream inputStream = s3Object.getObjectContent();
        try {
            s3Object.close();
            return IOUtils.toByteArray(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


    public String deleteFile(String fileName) {
        s3Client.deleteObject(bucketName, fileName);
        return fileName + " removed ...";
    }


    private File convertMultiPartFileToFile(MultipartFile file) {

        File convertedFile = new File(file.getOriginalFilename());

        try (FileOutputStream fos = new FileOutputStream(convertedFile)) {
            fos.write(file.getBytes());
            fos.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return convertedFile;
    }

    public List<Asset> listFiles(){

        ObjectListing s3Objects = s3Client.listObjects(bucketName);

        List<S3ObjectSummary> objectSummaries = s3Objects.getObjectSummaries();

        return objectSummaries.stream().map(s3ObjectSummary -> {
            Asset asset = new Asset();
            asset.setFileName(s3ObjectSummary.getKey());

            String awsUrl = s3Client.getUrl(bucketName, s3ObjectSummary.getKey()).toString();
            String serverUrl = "http://g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/files/download/" + s3ObjectSummary.getKey();

            asset.setURL(awsUrl);
            asset.setFileType(s3Client.getObject(new GetObjectRequest(bucketName, s3ObjectSummary.getKey())).getObjectMetadata().getContentType());

            return asset;
        }).collect(Collectors.toList());

    }


    /* =============== Constructor ================== */

    @Autowired
    public StorageService(AmazonS3 s3Client) {
        this.s3Client = s3Client;
    }
}
