package com.dh.proyectointegradorctd.controller;

import com.dh.proyectointegradorctd.model.Role;
import com.dh.proyectointegradorctd.model.User;
import com.dh.proyectointegradorctd.model.dto.UserDto;
import com.dh.proyectointegradorctd.service.EmailSenderService;
import com.dh.proyectointegradorctd.service.RoleService;
import com.dh.proyectointegradorctd.service.UserService;
import com.dh.proyectointegradorctd.util.AuthenticationResponse;
import com.dh.proyectointegradorctd.util.JwtRequestFilter;
import com.dh.proyectointegradorctd.util.JwtUtil;
import com.dh.proyectointegradorctd.util.MD5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    /* =============================== Atributos ================================= */

    private final UserService userService;
    private final RoleService roleService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final EmailSenderService emailSenderService;
    private final MD5Utils md5Utils;

    /* ================== GET ====================*/

    @GetMapping("")
    public List<UserDto> findAllUsers(){
        return userService.findAll().stream().map(userService::mapToDTO).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findUserById(@PathVariable Integer id) {

        User us = userService.findById(id);

        if(us != null){
            return new ResponseEntity(userService.mapToDTO(us), HttpStatus.OK);
        }else{
            return new ResponseEntity("This user id doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/verify")
    public ResponseEntity<?> verifyUser(@RequestParam String token, HttpServletResponse response) throws IOException {

        String[] userData = md5Utils.getHashInput(token);

        ResponseEntity responseE;

        User usr = userService.findByEmail(userData[1]);
        User usr2 = userService.findById(Integer.parseInt(userData[0]));

        if(!Objects.equals(usr.getId(), usr2.getId()) && !Objects.equals(usr.getEmail(), usr2.getEmail())){
            responseE = new ResponseEntity("The id and email parameters do not correspond to the same user, please change it", HttpStatus.CONFLICT);
        } else if(usr == null || usr2 == null){
            responseE = new ResponseEntity("There was an error and the user was not registered in the database", HttpStatus.CONFLICT);
        }else if(!Objects.equals(usr.getStatus(), "UNVERIFIED") && !Objects.equals(usr2.getStatus(), "UNVERIFIED")){
            String verification = "https://frontend.dvx32y9gwvi8h.amplifyapp.com/verification";
            response.sendRedirect(verification);
            responseE = new ResponseEntity("The user is already verified", HttpStatus.OK);
        }else{
            usr.setStatus("ENABLED");
            userService.update(usr);
            String verification = "https://frontend.dvx32y9gwvi8h.amplifyapp.com/verification";
            response.sendRedirect(verification);
            responseE = new ResponseEntity("The user was verified successfully", HttpStatus.OK);
        }

        return responseE;

    }

    /* ================== POST ====================*/

    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody User user){

        ResponseEntity response;

        if(userService.findByEmail(user.getEmail()) != null){
            response = new ResponseEntity("The email already exists, please change it", HttpStatus.CONFLICT);
        } else if(roleService.findByName(user.getUserRole().getName()) == null){
            response = new ResponseEntity("The role don't exists, please change it", HttpStatus.CONFLICT);
        }else{

            Role role = roleService.findByName(user.getUserRole().getName());

            if(role != null){
                user.setUserRole(role);
            }

            User us = userService.save(user);
            //String token = jwtUtil.createToken(us.getUsername(), user);
            emailSenderService.sendEmail(user,"validation");
            response = new ResponseEntity("The user has been created, check your email to verify it.", HttpStatus.CREATED);
        }

        return response;

    }

    @CrossOrigin
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user) {

        User us = userService.findByEmail(user.getEmail());

        if(us == null){
            return new ResponseEntity("This email doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }else if(us.getStatus().equals("UNVERIFIED")){
            System.out.println(us.getStatus());
            return new ResponseEntity("The user has not been verified, check the email you registered with and verify it.", HttpStatus.UNAUTHORIZED);
        }else{
            try {
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
            }catch (BadCredentialsException e) {
                return new ResponseEntity("Bad credentials", HttpStatus.UNAUTHORIZED);
            }
            System.out.println(us.getStatus());
            final UserDetails userDetails = userService.loadUserByUsername(user.getUsername());
            final String jwt = jwtUtil.generateToken(userDetails, us);

            return ResponseEntity.ok(new AuthenticationResponse(jwt));
        }

    }

    /* ================== PUT ====================*/

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user){

        ResponseEntity response;

        if(roleService.findByName(user.getUserRole().getName()) == null){
            response = new ResponseEntity("The role don't exists, please change it", HttpStatus.CONFLICT);
        } else if(userService.findById(user.getId()) == null){
            response = new ResponseEntity("User with id:" + user.getId() + " don't exist", HttpStatus.CONFLICT);
        }else{

            Role role = roleService.findByName(user.getUserRole().getName());

            if(role != null){
                user.setUserRole(role);
            }

            response = new ResponseEntity(userService.mapToDTO(userService.update(user)), HttpStatus.OK);

        }

        return response;
    }

    // Logout invalidate the token JWT
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        String token = request.getHeader("Authorization");

        if (token != null) {
            JwtRequestFilter jwtRequestFilter = new JwtRequestFilter();
            boolean it = jwtRequestFilter.invalidateToken(request);

            if (it) {
                return new ResponseEntity("Logout successful", HttpStatus.OK);
            }else {
                return new ResponseEntity("Logout failed", HttpStatus.UNAUTHORIZED);
            }

        }else {
            return new ResponseEntity("The token was not entered or is invalid, please change it.", HttpStatus.BAD_REQUEST);
        }

    }

    /* ================== DELETE ====================*/

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Integer id){
        return userService.delete(id);
    }

    /* ================== Constructor ====================*/

    @Autowired
    public UserController(UserService userService, RoleService roleService, AuthenticationManager authenticationManager, JwtUtil jwtUtil, EmailSenderService emailSenderService, MD5Utils md5Utils) {
        this.userService = userService;
        this.roleService = roleService;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.emailSenderService = emailSenderService;
        this.md5Utils = md5Utils;
    }
}
