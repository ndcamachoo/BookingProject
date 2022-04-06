package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.model.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface IAssetRepository extends JpaRepository<Asset, Integer> {
    Optional<Asset> findByFileName(String name);
    Optional<Asset> findByFileNameContaining(String name);
}
