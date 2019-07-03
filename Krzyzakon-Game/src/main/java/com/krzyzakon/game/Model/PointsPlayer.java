package com.krzyzakon.game.Model;

import javax.persistence.*;

@Entity
public class PointsPlayer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "points_player_id")
    private Long id;
    private Integer points;

    @ManyToOne
    @JoinColumn(name = "player_id")
    private Player player;

    public PointsPlayer() {}

    public PointsPlayer(Integer points) {
        this.points = points;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
