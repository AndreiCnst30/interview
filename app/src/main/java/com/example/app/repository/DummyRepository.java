package com.example.app.repository;

import com.example.app.model.Dummy;
import org.springframework.data.mongodb.repository.*;

public interface DummyRepository extends MongoRepository<Dummy, Integer> {
}