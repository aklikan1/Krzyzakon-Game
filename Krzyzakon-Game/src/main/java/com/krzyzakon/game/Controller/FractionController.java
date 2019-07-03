package com.krzyzakon.game.Controller;

import com.krzyzakon.game.Model.Fraction;
import com.krzyzakon.game.Repository.FractionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fraction")
public class FractionController {

    private FractionRepository fractionRepository;

    @Autowired
    public FractionController(FractionRepository fractionRepository) {
        this.fractionRepository = fractionRepository;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity <List<Fraction>> getAllFractions () {
        List<Fraction> fractions = fractionRepository.findAll();
        return ResponseEntity.ok(fractions);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Fraction> getFractionById (@PathVariable Long id) {
        Fraction fraction = fractionRepository.getFractionById(id);
        return ResponseEntity.ok(fraction);
    }
}
