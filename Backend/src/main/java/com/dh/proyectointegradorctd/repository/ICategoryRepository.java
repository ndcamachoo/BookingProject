package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ICategoryRepository extends JpaRepository<Category,Integer> {

    Optional<Category> findCategoryByName(String category);

    @Query("SELECT COUNT(c) FROM Category c INNER JOIN Product p on p.productCategory.id = c.id WHERE c.name = ?1")
    Integer countProductByCategory(String category);

}
