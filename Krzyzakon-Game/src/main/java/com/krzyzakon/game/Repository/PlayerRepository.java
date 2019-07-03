package com.krzyzakon.game.Repository;

import com.krzyzakon.game.Model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findAllByFractionId(Long id);
    Player getPlayerByName(String name);
}
