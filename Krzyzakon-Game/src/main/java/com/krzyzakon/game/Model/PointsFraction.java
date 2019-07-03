package com.krzyzakon.game.Model;

import javax.persistence.*;

@Entity
public class PointsFraction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "points_fraction_id")
    private Long id;
    private Integer points;

    @ManyToOne
    @JoinColumn(name = "fraction_id")
    private Fraction fraction;

    public PointsFraction() {
    }

    public PointsFraction(Integer points) {
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

    public Fraction getFraction() {
        return fraction;
    }

    public void setFraction(Fraction fraction) {
        this.fraction = fraction;
    }
}
