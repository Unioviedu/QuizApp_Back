package com.uniovi.quizapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

@Configuration
public class MongoConfigDatabase extends AbstractMongoConfiguration {
  
    @Override
    protected String getDatabaseName() {
        return "prueba";
    }
  
    @Override
    public MongoClient mongoClient() {
    	MongoClientURI uri = new MongoClientURI(
    		    "mongodb+srv://cristianoedu:Campeones7@quizappcluster-klygf.mongodb.net/test?retryWrites=true");
        return new MongoClient(uri);
    }
  
}
  