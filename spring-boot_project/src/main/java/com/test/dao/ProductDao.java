package com.test.dao;

import com.test.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@Repository
public interface ProductDao extends JpaRepository<Product, Long> {
    List<Product> findByName(String name);
    List<Product> findByCode(String code);

}
