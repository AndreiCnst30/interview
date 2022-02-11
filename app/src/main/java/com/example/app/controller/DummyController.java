package com.example.app.controller;

import com.example.app.model.Dummy;
import com.example.app.repository.DummyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class DummyController {

    @Autowired
    DummyRepository dummyRepository;

    @GetMapping("/dummy")
    public List<Dummy> list() {
        return dummyRepository.findAll();
    }

}