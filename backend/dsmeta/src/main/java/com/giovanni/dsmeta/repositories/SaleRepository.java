package com.giovanni.dsmeta.repositories;

import com.giovanni.dsmeta.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*@Repository*/
public interface SaleRepository extends JpaRepository<Sale, Long> {
}
