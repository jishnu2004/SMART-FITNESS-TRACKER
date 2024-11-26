package com.example.backend.repository;

import com.example.backend.entity.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {
    List<FoodItem> findByUserIdAndDate(Long userId, LocalDate date);
}
