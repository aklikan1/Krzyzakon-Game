package com.krzyzakon.game.Repository;

import com.krzyzakon.game.Model.PointsPlayer;
import com.krzyzakon.game.Model.ViewModel.AllPointsOnPlayer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointsPlayerRepository extends JpaRepository<PointsPlayer, Long> {
    @Query(value = "SELECT player_id as name, SUM(points) as points FROM points_player " +
            "GROUP BY player_id order by points desc LIMIT 10", nativeQuery = true)
    List<AllPointsOnPlayer> getTenPlayersOrderByPoints();
}
