package com.dh.proyectointegradorctd.service;

import com.dh.proyectointegradorctd.model.Role;
import com.dh.proyectointegradorctd.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService implements IEntityService<Role>{

    /* ==================== Atributos ==================== */

    private final IRoleRepository roleRepository;

    /* ==================== Métodos ====================== */

    @Override
    public Role save(Role role) {

        Role rol = roleRepository.findByName(role.getName()).orElse(null);

        if (rol == null) {
            return roleRepository.save(role);
        }else {
            return null;
        }

    }

    @Override
    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public Role findById(Integer id) {
        return roleRepository.findById(id).orElse(null);
    }

    @Override
    public Role update(Role role) {

        Role rol = roleRepository.findById(role.getId()).orElse(null);

        if (rol != null) {
            rol.setName(role.getName());
            return roleRepository.save(rol);
        }else{
            return null;
        }

    }

    @Override
    public String delete(Integer id) {
        if(roleRepository.findById(id).isPresent()){
            roleRepository.deleteById(id);
            return "Role with id: " + id + " was deleted";
        }else{
            return "Role with id:" + id + " don't exist";
        }
    }

    public Role findByName(String name){
        return roleRepository.findByName(name).orElse(null);
    }

    /* ==================== Constructor ================== */

    @Autowired
    public RoleService(IRoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
}
