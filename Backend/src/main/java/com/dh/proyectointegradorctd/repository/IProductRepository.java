package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {

    Optional<Product> findProductByProductName(String name);

    @Query("SELECT CONCAT(p.city.name,', ',p.city.country) FROM Product p GROUP BY p.city.name")
    List<String> getLocations();

    @Query("SELECT p FROM Product p WHERE p.productCategory.name = ?1")
    List<Product> getProductsByCategory(String category);

    @Query("SELECT p FROM Product p WHERE p.city.name = ?1")
    List<Product> getProductsByCity(String city);

    @Query("SELECT p FROM Product p WHERE p.productCategory.name = ?1 AND p.city.name = ?2")
    List<Product> getProductsByCategoryAndCity(String category, String city);
}
