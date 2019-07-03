package com.krzyzakon.game.Controller;

import com.krzyzakon.game.Model.Player;
import com.krzyzakon.game.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/player")
public class PlayerController {

    private PlayerRepository playerRepository;

    @Autowired
    public PlayerController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @GetMapping(path = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Player>> getAllPlayers () {
        List<Player> players = playerRepository.findAll();
        return ResponseEntity.ok(players);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Player> getPlayerById (@PathVariable Long id) {
        Player player = playerRepository.findById(id).get();
        return ResponseEntity.ok(player);
    }

    @GetMapping(path = "/name/{name}")
    public ResponseEntity<Player> getPlayerByName (@PathVariable String name){
        Player player = playerRepository.getPlayerByName(name);
        return ResponseEntity.ok(player);
    }

    @GetMapping(path = "byFraction/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Player>> getAllPlayersByFractionId(@PathVariable Long id) {
        List<Player> players = playerRepository.findAllByFractionId(id);
        return ResponseEntity.ok(players);
    }

    @PostMapping(path = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> savePlayer (@RequestBody Player player) {
        Player save = playerRepository.save(player);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("{id}")
                .buildAndExpand(save.getId())
                .toUri();

        return ResponseEntity.created(location).body(save);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id) {
        playerRepository.deleteById(id);
    }
}
