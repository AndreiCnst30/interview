package com.example.app.config;

import com.example.app.model.Dummy;
import com.example.app.repository.DummyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = DummyRepository.class)
@Configuration
public class MongoConfig {
    @Bean
    CommandLineRunner commandLineRunner(DummyRepository dummyRepository) {
        return strings -> {
            dummyRepository.save(new Dummy(1,"hello", 10));
            dummyRepository.save(new Dummy(2, "salut", 15));
            dummyRepository.save(new Dummy(3, "sunteu", 15));
        };
    }
}