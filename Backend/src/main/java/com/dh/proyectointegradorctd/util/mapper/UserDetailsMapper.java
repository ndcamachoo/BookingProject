package com.dh.proyectointegradorctd.util.mapper;

import com.dh.proyectointegradorctd.model.Role;
import com.dh.proyectointegradorctd.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class UserDetailsMapper {

    /* ===================== Métodos ========================= */

    public static UserDetails build(User user) {
        return new org.springframework.security.core.userdetails.User(user.getNombre(), user.getPassword(), getAuthorities(user));
    }

    private static Set<? extends GrantedAuthority> getAuthorities(User retrievedUser) {
        Set<Role> roles = Collections.singleton(retrievedUser.getUserRole());

        Set<SimpleGrantedAuthority> authorities = new HashSet<>();

        roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getName())));

        return authorities;
    }

}
