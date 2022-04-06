package com.dh.proyectointegradorctd.controller;

import com.dh.proyectointegradorctd.model.Product;
import com.dh.proyectointegradorctd.model.dto.ProductDto;
import com.dh.proyectointegradorctd.service.CategoryService;
import com.dh.proyectointegradorctd.service.CityService;
import com.dh.proyectointegradorctd.service.ProductService;
import com.dh.proyectointegradorctd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    /* =============================== Atributos ================================= */

    private final ProductService productService;
    private final UserService userService;
    private final CategoryService categoryService;
    private final CityService cityService;

    /* ================== GET ====================*/

    @GetMapping("")
    public List<ProductDto> findAllUsers() {
        return productService.findAll().stream().map(productService::mapToDTO).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findProductById(@PathVariable Integer id) {

        Product pd = productService.findById(id);

        if (pd != null) {
            return new ResponseEntity(productService.mapToDTO(pd), HttpStatus.OK);
        } else {
            return new ResponseEntity("This product id doesn't exist, please correct it", HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/locations")
    public List<String> getLocations() {
        return productService.getLocations();
    }

    @GetMapping("/search")
    public ResponseEntity<?> getProductsByCategoryAndCity(@RequestParam(required=false) String category, @RequestParam(required=false) String city) {

        ResponseEntity response;

        if(category == null && city == null){
            response = new ResponseEntity("These search parameters do not exist or are not defined, please change it.", HttpStatus.NOT_FOUND);
        }else if(city == null){
            response = new ResponseEntity(productService.getProductsByCategory(category).stream().map(productService::mapToDTO).collect(Collectors.toList()), HttpStatus.OK);
        }else if(category == null) {
            response = new ResponseEntity(productService.getProductsByCity(city).stream().map(productService::mapToDTO).collect(Collectors.toList()), HttpStatus.OK);
        }else{
            response = new ResponseEntity(productService.getProductsByCategoryAndCity(category, city).stream().map(productService::mapToDTO).collect(Collectors.toList()), HttpStatus.OK);
        }

        return response;

    }

    /* ================== POST ====================*/

    @PostMapping("/save")
    public ResponseEntity<?> saveProduct(@RequestBody Product product) {

        ResponseEntity response;

        if (productService.findProductByName(product.getProductName()) != null) {
            response = new ResponseEntity("The product name already exists, please change it", HttpStatus.CONFLICT);
        } else if (userService.findByEmail(product.getUser().getEmail()) == null) {
            response = new ResponseEntity("The user doesn't exists, please change it", HttpStatus.CONFLICT);
        } else if (categoryService.findCategoryByCategory(product.getProductCategory().getName()) == null) {
            response = new ResponseEntity("The category doesn't exists, please change it", HttpStatus.CONFLICT);
        } else if (cityService.findCityByCountryAndName(product.getCity().getCountry(), product.getCity().getName()) == null) {
            response = new ResponseEntity("The city doesn't exists, please change it", HttpStatus.CONFLICT);
        } else if (product.getPhotoGallery().size() == 0) {
            response = new ResponseEntity("The photo gallery must contain at least one image, please change it", HttpStatus.CONFLICT);
        }else if (product.getCoordinates().size() != 2) {
            response = new ResponseEntity("The coordinates must have longitude and latitude., please change it", HttpStatus.CONFLICT);
        } else if (product.getServices().size() == 0) {
            response = new ResponseEntity("The array of services must contain at least one service, please change it", HttpStatus.CONFLICT);
        }else{
            response = new ResponseEntity(productService.mapToDTO(productService.save(product)), HttpStatus.CREATED);
        }

        return response;

    }


    /* ================== PUT ====================*/

    @PutMapping("/update")
    public ResponseEntity<?> updateProduct(@RequestBody Product product) {

        ResponseEntity response;

        if (productService.findById(product.getId()) == null) {
            response = new ResponseEntity("Product with id:" + product.getId() + " don't exist", HttpStatus.NO_CONTENT);
        } else if (userService.findByEmail(product.getUser().getEmail()) == null) {
            response = new ResponseEntity("The user doesn't exists, please change it", HttpStatus.CONFLICT);
        } else if (categoryService.findCategoryByCategory(product.getProductCategory().getName()) == null) {
            response = new ResponseEntity("The category doesn't exists, please change it", HttpStatus.CONFLICT);
        } else if (cityService.findCityByCountryAndName(product.getCity().getCountry(), product.getCity().getName()) == null) {
            response = new ResponseEntity("The city doesn't exists, please change it", HttpStatus.CONFLICT);
        }else if (product.getPhotoGallery().size() == 0) {
            response = new ResponseEntity("The photo gallery must contain at least one image, please change it", HttpStatus.CONFLICT);
        }else if (product.getCoordinates().size() != 2) {
            response = new ResponseEntity("The coordinates must have longitude and latitude., please change it", HttpStatus.CONFLICT);
        } else if (product.getServices().size() == 0) {
            response = new ResponseEntity("The array of services must contain at least one service, please change it", HttpStatus.CONFLICT);
        }else {
            response = new ResponseEntity(productService.mapToDTO(productService.update(product)), HttpStatus.OK);
        }

        return response;
    }

    /* ================== DELETE ====================*/

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Integer id) {
        return productService.delete(id);
    }

    /* ================== Constructor ======================== */

    @Autowired
    public ProductController(ProductService productService, UserService userService, CategoryService categoryService, CityService cityService) {
        this.productService = productService;
        this.userService = userService;
        this.categoryService = categoryService;
        this.cityService = cityService;
    }
}
