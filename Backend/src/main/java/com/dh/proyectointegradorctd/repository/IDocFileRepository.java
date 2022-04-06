package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.util.FileDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface IDocFileRepository extends JpaRepository <FileDocument,Integer> {

    FileDocument findByFilename(String filename);

}
