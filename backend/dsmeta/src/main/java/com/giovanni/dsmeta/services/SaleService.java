package com.giovanni.dsmeta.services;

import com.giovanni.dsmeta.entities.Sale;
import com.giovanni.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable){

        LocalDate min = LocalDate.parse(minDate);
        LocalDate max = LocalDate.parse(maxDate);

        return repository.findSales(min, max, pageable);
    }
}
