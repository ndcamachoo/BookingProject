package com.dh.proyectointegradorctd.service;

import java.util.List;

public interface IEntityService <T>{

    /* ============== Métodos =================*/

    T save(T t);
    List<T> findAll();
    T findById(Integer id);
    T update(T t);
    String delete(Integer id);

}
