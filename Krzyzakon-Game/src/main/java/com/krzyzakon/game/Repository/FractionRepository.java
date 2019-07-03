package com.krzyzakon.game.Repository;

import com.krzyzakon.game.Model.Fraction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FractionRepository extends JpaRepository<Fraction, Long> {

    Fraction getFractionById(Long id);
}
