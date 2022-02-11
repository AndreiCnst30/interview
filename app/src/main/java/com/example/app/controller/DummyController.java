package com.example.app.controller;

import com.example.app.model.Dummy;
import com.example.app.repository.DummyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class DummyController {

    @Autowired
    private DummyRepository dummyRepository;
    @Autowired
    private MongoTemplate mt;

    @GetMapping("/ping")
    public String ping() {
        return mt.executeCommand("{ping:1}").toString();
    }

    @GetMapping("/aggregationTime")
    public long aggregationTime() {
        long start = System.currentTimeMillis();
        dummyRepository.findAll();
        long end = System.currentTimeMillis();

        return end - start;
    }

    @GetMapping("/dummy")
    public List<Dummy> list() {
        return dummyRepository.findAll();
    }

    @PostMapping("/postDummy")
    public Dummy postDummy(@RequestBody Dummy dummy) {
        dummyRepository.findById(dummy.getId()).ifPresent(d -> {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id already exists!");
        });
        return dummyRepository.save(dummy);
    }

}