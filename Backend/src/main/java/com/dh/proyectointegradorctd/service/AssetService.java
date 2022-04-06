package com.dh.proyectointegradorctd.service;

import com.dh.proyectointegradorctd.model.Asset;
import com.dh.proyectointegradorctd.repository.IAssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetService implements IEntityService<Asset>{

    /* ================ Atributos =======================*/

    private final IAssetRepository assetRepository;
    private final StorageService storageService;

    /* ================ Métodos =======================*/

    @Override
    public Asset save(Asset asset) {
        return assetRepository.save(asset);
    }

    @Override
    public List<Asset> findAll() {
        return assetRepository.findAll();
    }

    @Override
    public Asset findById(Integer id) {
        return assetRepository.findById(id).orElse(null);
    }

    @Override
    public Asset update(Asset asset) {

        Asset tmp = assetRepository.findById(asset.getId()).orElse(null);

        if(tmp != null){
            tmp.setFileName(asset.getFileName());
            tmp.setURL(asset.getURL());
            tmp.setFileType(asset.getFileType());
            return assetRepository.save(tmp);
        }else {
            return null;
        }

    }

    @Override
    public String delete(Integer id) {
        if(assetRepository.findById(id).isPresent()){
            assetRepository.deleteById(id);
            return "Asset with id: " + id + " was deleted";
        }else{
            return "Asset with id:" + id + " don't exist";
        }
    }

    public Asset findByFileNameContaining(String name) {
        return assetRepository.findByFileNameContaining(name).orElse(null);
    }

    public Asset findByFileName(String name){
        return assetRepository.findByFileName(name).orElse(null);
    }

    public void initAssetDatabase(){

        List<Asset> assets = storageService.listFiles();
        if(assets.size() != 0 && assets != null){
            assetRepository.saveAll(assets);
        }else{
            System.out.println("No files in S3 bucket");
        }


    }

    /* ================ Constructor ====================*/

    @Autowired
    public AssetService(IAssetRepository assetRepository, StorageService storageService) {
        this.assetRepository = assetRepository;
        this.storageService = storageService;
    }
}
