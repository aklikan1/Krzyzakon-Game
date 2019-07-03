package com.krzyzakon.game.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "player_id")
    private Long id;
    @Column(nullable = false)
    private String name;
    private String phone;

    @ManyToOne
    @JoinColumn(name = "fraction_id")
    private Fraction fraction;

    @OneToMany (mappedBy = "player", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<PointsPlayer> pointsPlayers;

    public Player() {}

    public Player(String name, String phone) {
        this.name = name;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Fraction getFraction() {
        return fraction;
    }

    public void setFraction(Fraction fraction) {
        this.fraction = fraction;
    }

    public List<PointsPlayer> getPointsPlayers() {
        return pointsPlayers;
    }

    public void setPointsPlayers(List<PointsPlayer> pointsPlayers) {
        this.pointsPlayers = pointsPlayers;
    }

}
