package com.example.backend.service;

import com.example.backend.entity.FoodItem;
import com.example.backend.repository.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class FoodItemService {

    @Autowired
    private FoodItemRepository foodItemRepository;

    public FoodItem addFoodItem(FoodItem foodItem) {
        // Automatically set the date to today
        foodItem.setDate(LocalDate.now());
        return foodItemRepository.save(foodItem);
    }

    public List<FoodItem> getFoodItemsForUserAndDate(Long userId, LocalDate date) {
        return foodItemRepository.findByUserIdAndDate(userId, date);
    }
}
