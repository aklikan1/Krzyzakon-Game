package com.krzyzakon.game.Repository;

import com.krzyzakon.game.Model.PointsFraction;
import com.krzyzakon.game.Model.ViewModel.AllPointsOnFraction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PointsFractionRepository extends JpaRepository<PointsFraction, Long> {
    @Query(value = "SELECT fraction_id AS id, SUM(points) AS points FROM points_fraction " +
            "GROUP BY fraction_id", nativeQuery = true)
    List<AllPointsOnFraction> getAllFractionPointsGroupByFraction();
}
