package com.dh.proyectointegradorctd.service;

import com.dh.proyectointegradorctd.model.City;
import com.dh.proyectointegradorctd.repository.ICityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService implements IEntityService<City>{

    /* ================ Atributos ================== */

    private final ICityRepository cityRepository;

    /* ================ Métodos ====================== */

    @Override
    public City save(City city) {
        return cityRepository.save(city);
    }

    @Override
    public List<City> findAll() {
        return cityRepository.findAll();
    }

    @Override
    public City findById(Integer id) {
        return cityRepository.findById(id).orElse(null);
    }

    @Override
    public City update(City city) {

        City tmp = cityRepository.findById(city.getId()).orElse(null);

        if(tmp != null){

            tmp.setName(city.getName());
            tmp.setCountry(city.getCountry());

            return cityRepository.save(tmp);

        }else {
            return null;
        }

    }

    @Override
    public String delete(Integer id) {

        if(cityRepository.findById(id).isPresent()){
            cityRepository.deleteById(id);
            return "City with id: " + id + " was deleted";
        }else{
            return "City with id:" + id + " don't exist";
        }
    }

    public City findCityByCountryAndName(String country, String name){
        return cityRepository.findCityByCountryAndName(country, name).orElse(null);
    }

    public City findCityByName(String name){
        return cityRepository.findCityByName(name).orElse(null);
    }

    /* ================ Constructor ================== */

    @Autowired
    public CityService(ICityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }
}
