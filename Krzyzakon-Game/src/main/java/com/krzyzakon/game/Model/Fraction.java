package com.krzyzakon.game.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Fraction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fraction_id")
    private Long id;
    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "fraction")
    @JsonIgnore
    private List<Player> players;

    @OneToMany(mappedBy = "fraction")
    @JsonIgnore
    private List<PointsFraction> pointsFractions;

    public Fraction() {}

    public Fraction(String name) {
        this.name = name;
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

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<PointsFraction> getPointsFractions() {
        return pointsFractions;
    }

    public void setPointsFractions(List<PointsFraction> pointsFractions) {
        this.pointsFractions = pointsFractions;
    }

}
