package com.test.controller;



import java.net.URI;
import java.util.List;
import java.util.Optional;

import com.test.dao.ProductDao;
import com.test.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

    @Autowired
    private ProductDao productDao;

    @PostMapping("/products")
    public ResponseEntity<Object> createStudent(@RequestBody Product product) {
        Product savedProduct = productDao.save(product);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedProduct.getId()).toUri();
        return ResponseEntity.created(location).build();

    }
    // the method to expose the details of all products.
    @GetMapping("/products")
    public List<Product> retrieveAllProducts() {
        return productDao.findAll();
    }

    // method to expose the details of a specific product by id.
    @GetMapping("/products/{id}")
    public Product retrieveProdectById(@PathVariable Long id) {
        Optional<Product> productOptional = productDao.findById(id);
        //Exception if not exist
        return productOptional.get();
    }
    // method to expose the details of a specific product by code .
    @GetMapping("/products/searchbycode/{code}")
    public List<Product> retrieveProdectByCode(@PathVariable String code) {
        List<Product> product = productDao.findByCode(code);
        //Exception if not exist
        return product;
    }
    // method to expose the details of a specific product by name or code
    @GetMapping("/products/searchbyname/{key}")
    public List<Product> retrieveProdectByName(@PathVariable String key) {
        List<Product> product = productDao.findByName(key);
        if(product.isEmpty()){
            product = productDao.findByCode(key);
        }
        //Exception if not exist
        return product;
    }
    @PutMapping("/products/{id}")
    public ResponseEntity<Object> updateProduct(@RequestBody Product product, @PathVariable long id) {
        Optional<Product> productOptional = productDao.findById(id);
        if (!productOptional.isPresent())
            return ResponseEntity.notFound().build();
        product.setId(id);
        productDao.save(product);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable long id) {
        productDao.deleteById(id);
    }



}
