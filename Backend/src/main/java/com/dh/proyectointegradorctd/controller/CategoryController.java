package com.dh.proyectointegradorctd.controller;

import com.dh.proyectointegradorctd.model.Category;
import com.dh.proyectointegradorctd.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/category")
public class CategoryController {

    /* =============================== Atributos ================================= */

    private final CategoryService categoryService;

    /* ================== GET ====================*/

    @GetMapping("")
    public List<Category> findAllUsers(){
        return categoryService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findCategoryById(@PathVariable Integer id){

        Category cat = categoryService.findById(id);

        if(cat != null){
            return new ResponseEntity(cat, HttpStatus.OK);
        }else{
            return new ResponseEntity("This category id doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/count/{category}")
    public ResponseEntity<?> getCountByCategory(@PathVariable String category){

        Category cat = categoryService.findCategoryByCategory(category);
        Integer count = categoryService.countProductByCategory(category);

        if(cat != null){
            return new ResponseEntity(count, HttpStatus.OK);
        }else{
            return new ResponseEntity("This category doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }

    }

    /* ================== POST ====================*/

    @PostMapping("/save")
    public ResponseEntity<?> saveCategory(@RequestBody Category category){

        ResponseEntity response;

        if(categoryService.findCategoryByCategory(category.getName()) != null){
            response = new ResponseEntity("The category already exists, please change it", HttpStatus.CONFLICT);
        } else{
            response = new ResponseEntity(categoryService.save(category), HttpStatus.CREATED);
        }

        return response;

    }

    /* ================== PUT ====================*/

    @PutMapping("/update")
    public ResponseEntity<?> updateCategory(@RequestBody Category category){

        ResponseEntity response;

        if(categoryService.findById(category.getId()) != null){
            response = new ResponseEntity(categoryService.update(category), HttpStatus.OK);
        }else{
            response = new ResponseEntity("Category with id:" + category.getId() + " don't exist", HttpStatus.NO_CONTENT);
        }

        return response;
    }

    /* ================== DELETE ====================*/

    @DeleteMapping("/delete/{id}")
    public String deleteCategory(@PathVariable Integer id){
        return categoryService.delete(id);
    }

    /* ================== Constructor ======================== */

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
}
