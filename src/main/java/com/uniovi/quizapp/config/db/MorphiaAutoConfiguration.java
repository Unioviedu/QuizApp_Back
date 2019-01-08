package com.uniovi.quizapp.config.db;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

@Configuration
public class MorphiaAutoConfiguration {

    @Bean
    public Datastore datastore() {
        Morphia morphia = new Morphia();
        morphia.mapPackage("com.uniovi.quizapp.dataacess.model");
        morphia.mapPackage("com.uniovi.quizapp.dataacess.model.question");
        morphia.mapPackage("com.uniovi.quizapp.dataacess.model.challange");
        
        MongoClientURI uri = new MongoClientURI(
    		    "mongodb://cristianoedu:Campeones7@ds161653.mlab.com:61653/heroku_p2k8dbp6");
        MongoClient mongoClient = new MongoClient(uri);

        return morphia.createDatastore(mongoClient, "heroku_p2k8dbp6");
    }
}
