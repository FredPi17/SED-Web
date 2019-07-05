package com.sed.app.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class SedKafkaConsumer {

    private final Logger log = LoggerFactory.getLogger(SedKafkaConsumer.class);
    private static final String TOPIC = "topic_sed";

    @KafkaListener(topics = "topic_sed", groupId = "group_id")
    public void consume(String message) throws IOException {
        log.info("Consumed message in {} : {}", TOPIC, message);
    }
}
