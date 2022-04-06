package com.dh.proyectointegradorctd.util;

import org.springframework.stereotype.Component;

import javax.crypto.Cipher;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;

@Component
public class MD5Utils {

    private static final Charset UTF_8 = StandardCharsets.UTF_8;
    private static final String OUTPUT_FORMAT = "%-20s:%s";
    private static final HashMap<String, String> hashMapper = new HashMap<>();

    private byte[] digest(byte[] input) {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalArgumentException(e);
        }
        byte[] result = md.digest(input);
        return result;
    }

    private String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }

    public String hashGenerator(String input) {
        byte[] digest = digest(input.getBytes(UTF_8));
        String hash = bytesToHex(digest);
        hashMapper.put(hash, input);
        return hash;
    }

    public String[] getHashInput(String hash) {
        String[] input = new String[2];
        input[0] = hashMapper.get(hash).split(",")[0].replace("id=", "");
        input[1] = hashMapper.get(hash).split(",")[1].replace("email=", "");
        return input;
    }

}
