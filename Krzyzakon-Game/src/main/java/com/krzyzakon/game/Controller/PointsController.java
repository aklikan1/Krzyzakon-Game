package com.krzyzakon.game.Controller;

import com.krzyzakon.game.Model.PointsFraction;
import com.krzyzakon.game.Model.PointsPlayer;
import com.krzyzakon.game.Model.ViewModel.AllPointsOnFraction;
import com.krzyzakon.game.Model.ViewModel.AllPointsOnPlayer;
import com.krzyzakon.game.Repository.PointsFractionRepository;
import com.krzyzakon.game.Repository.PointsPlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/points")
public class PointsController {

    private PointsFractionRepository pointsFractionRepository;
    private PointsPlayerRepository pointsPlayerRepository;

    @Autowired
    public PointsController(PointsFractionRepository pointsFractionRepository, PointsPlayerRepository pointsPlayerRepository) {
        this.pointsFractionRepository = pointsFractionRepository;
        this.pointsPlayerRepository = pointsPlayerRepository;
    }

    @GetMapping(path = "/player", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<PointsPlayer>> getAllPointsPlayer () {
        List<PointsPlayer> pointsPlayer = pointsPlayerRepository.findAll();
        return ResponseEntity.ok(pointsPlayer);
    }

    @GetMapping(path = "/player/top10", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AllPointsOnPlayer>> getTopTenPlayersWithPoints () {
        List<AllPointsOnPlayer> pointsPlayer = pointsPlayerRepository.getTenPlayersOrderByPoints();
        return ResponseEntity.ok(pointsPlayer);
    }


    @PostMapping(path = "/player", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> savePointsPlayer (@RequestBody PointsPlayer pointsPlayer) {
        PointsPlayer save = pointsPlayerRepository.save(pointsPlayer);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("{id}")
                .buildAndExpand(pointsPlayer.getId())
                .toUri();

        return ResponseEntity.created(location).body(save);
    }

    @GetMapping(path = "/fraction", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<PointsFraction>> getAllPointsFraction () {
        List<PointsFraction> pointsFractions = pointsFractionRepository.findAll();
        return ResponseEntity.ok(pointsFractions);
    }

    @PostMapping(path = "/fraction", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> savePointsFraction (@RequestBody PointsFraction pointsFraction) {
        PointsFraction save = pointsFractionRepository.save(pointsFraction);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("{id}")
                .buildAndExpand(pointsFraction.getId())
                .toUri();

        return ResponseEntity.created(location).body(save);
    }

    @GetMapping(path = "/fraction/battle", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AllPointsOnFraction>> getAllPointsFractionGroupByFraction () {
        List<AllPointsOnFraction> pointsFractions = pointsFractionRepository.getAllFractionPointsGroupByFraction();
        return ResponseEntity.ok(pointsFractions);
    }
}
