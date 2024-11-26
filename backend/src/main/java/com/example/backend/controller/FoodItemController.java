package com.example.backend.controller;

import com.example.backend.entity.FoodItem;
import com.example.backend.service.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/foods")
@CrossOrigin(origins = "http://localhost:4200") // Adjust this URL based on your frontend's origin
public class FoodItemController {

    @Autowired
    private FoodItemService foodItemService;

    @PostMapping("/addfood")
    public ResponseEntity<FoodItem> addFoodItem(@RequestBody FoodItem foodItem) {
        FoodItem createdFoodItem = foodItemService.addFoodItem(foodItem);
        return ResponseEntity.ok(createdFoodItem);
    }

    @GetMapping("/{userId}/{date}")
    public ResponseEntity<List<FoodItem>> getFoodItemsForUserAndDate(
            @PathVariable Long userId,
            @PathVariable String date
    ) {
        LocalDate parsedDate = LocalDate.parse(date);
        List<FoodItem> foodItems = foodItemService.getFoodItemsForUserAndDate(userId, parsedDate);
        return ResponseEntity.ok(foodItems);
    }
}
