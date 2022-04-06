package com.dh.proyectointegradorctd.service;

import com.dh.proyectointegradorctd.model.Stat;
import com.dh.proyectointegradorctd.model.dto.StatDto;
import com.dh.proyectointegradorctd.repository.IStatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatService implements IEntityService<Stat>{

    /* ================= Atributos =================== */

    private final IStatRepository statRepository;

    /* ================= Métodos =================== */

    @Override
    public Stat save(Stat stat) {
        return statRepository.save(stat);
    }

    @Override
    public List<Stat> findAll() {
        return statRepository.findAll();
    }

    @Override
    public Stat findById(Integer id) {
        return statRepository.findById(id).orElse(null);
    }

    @Override
    public Stat update(Stat stat) {

        Stat statDB = statRepository.findById(stat.getId()).orElse(null);

        if (statDB != null) {
            statDB.setProduct(stat.getProduct());
            statDB.setUser(stat.getUser());
            statDB.setLike(stat.getLike());
            statDB.setScore(stat.getScore());
            return statRepository.save(statDB);
        }else{
            return null;
        }

    }

    @Override
    public String delete(Integer id) {
        if(statRepository.findById(id).isPresent()){
            statRepository.deleteById(id);
            return "Stat with id: " + id + " was deleted";
        }else{
            return "Stat with id:" + id + " don't exist";
        }
    }

    public List<Stat> findByUserId(Integer id){
        return statRepository.findByUserId(id);
    }

    public List<Stat> findByProductId(Integer id){
        return statRepository.findByProductId(id);
    }

    /* ==================== Mapping =================== */

    public StatDto mapToDTO(Stat stat){
        return new StatDto(stat.getId(), stat.getUser().getId(), stat.getProduct().getId() , stat.getScore(), stat.getLike());
    }


    /* ================= Constructor ====================== */

    @Autowired
    public StatService(IStatRepository statRepository) {
        this.statRepository = statRepository;
    }
}
