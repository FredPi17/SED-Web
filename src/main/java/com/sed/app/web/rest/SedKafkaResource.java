package com.sed.app.web.rest;

import com.sed.app.service.SedKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/sed-kafka")
public class SedKafkaResource {

    private final Logger log = LoggerFactory.getLogger(SedKafkaResource.class);

    private SedKafkaProducer kafkaProducer;

    public SedKafkaResource(SedKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping(value = "/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.sendMessage(message);
    }
}
