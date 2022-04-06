package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.model.Stat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IStatRepository extends JpaRepository<Stat, Integer> {

    List<Stat> findByUserId(int userId);
    List<Stat> findByProductId(int userId);

}
