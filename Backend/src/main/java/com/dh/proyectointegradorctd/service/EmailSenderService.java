package com.dh.proyectointegradorctd.service;

import com.dh.proyectointegradorctd.model.User;
import com.dh.proyectointegradorctd.util.MD5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;

@Service
public class EmailSenderService {

    /* =============== Atributos ================= */

    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;
    private final MD5Utils md5Utils;

    /* ============== Métodos ================== */

    public void sendSimpleMessage(String to, String subject, String body) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("notificationg4booking@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
        System.out.println("Mail send...");

    }

    // Send an email with template created in HTML
    public void sendEmail(User user, String type) {

        MimeMessage message = mailSender.createMimeMessage();
        String tokenVerification = md5Utils.hashGenerator(user.toString());

        MimeMessageHelper helper;

        try {
            helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
            helper.setFrom("notificationg4booking@gmail.com");
            helper.setTo(user.getEmail());
            Context context = new Context();

            if (type.equals("validation")) {
                context.setVariable("name", user.getNombre());
                context.setVariable("verifylink", "http://g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/users/verify?token=" + tokenVerification);
                String html = templateEngine.process("ValidationEmail", context);
                helper.setText(html, true);
                helper.setSubject("Account validation - G4Booking");
                mailSender.send(message);
            }


        } catch (MessagingException e) {
            e.printStackTrace();
        }

    }
    /* =============== Constructor ============== */

    @Autowired
    public EmailSenderService(JavaMailSender mailSender, SpringTemplateEngine templateEngine, MD5Utils md5Utils) {
        this.mailSender = mailSender;
        this.templateEngine = templateEngine;
        this.md5Utils = md5Utils;
    }
}
