package com.dh.proyectointegradorctd.service;

import com.dh.proyectointegradorctd.model.Category;
import com.dh.proyectointegradorctd.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class CategoryService implements IEntityService<Category> {

    /* =================== Atributos ====================== */

    private final ICategoryRepository categoryRepository;

    /* =================== Métodos ========================= */

    @Override
    public Category save(Category category) {

        String CATEGORY = category.getName();
        String encodeCATEGORY = URLEncoder.encode(CATEGORY, StandardCharsets.UTF_8).replace("+", "%20");
        String URI = "http://g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/category/count/" + encodeCATEGORY;
        category.setCountProducts(URI);
        return categoryRepository.save(category);

    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findById(Integer id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    public Category update(Category category) {

        Category tmp = categoryRepository.findById(category.getId()).orElse(null);

        if(tmp != null){

            tmp.setName(category.getName());
            tmp.setDescription(category.getDescription());
            tmp.setPhotoUrl(category.getPhotoUrl());

            return categoryRepository.save(tmp);

        }else {
            return null;
        }
    }

    @Override
    public String delete(Integer id) {

        if(categoryRepository.findById(id).isPresent()){
            categoryRepository.deleteById(id);
            return "Category with id: " + id + " was deleted";
        }else{
            return "Category with id:" + id + " don't exist";
        }
    }

    public Category findCategoryByCategory(String categoria){
        return categoryRepository.findCategoryByName(categoria).orElse(null);
    }

    public Integer countProductByCategory(String Category){
        return categoryRepository.countProductByCategory(Category);
    }

    /* =================== Constructor =================== */

    @Autowired
    public CategoryService(ICategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
}
