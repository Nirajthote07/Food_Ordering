package com.sky.controller;

import com.sky.model.IngredientCategory;
import com.sky.model.IngredientsItem;
import com.sky.request.IngredientCategoryRequest;
import com.sky.request.IngredientItemRequest;
import com.sky.service.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

    @Autowired
    private IngredientsService ingredientsService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientCategory(@RequestBody IngredientCategoryRequest req) throws Exception{

        IngredientCategory category = ingredientsService.createIngredientCategory(req.getName(), req.getRestaurantId());


        return new ResponseEntity<>(category, HttpStatus.CREATED);

    }

    @PostMapping()
    public ResponseEntity<IngredientsItem> createIngredientItem(@RequestBody IngredientItemRequest req)throws Exception{
        IngredientsItem item = ingredientsService.createIngredientItem(req.getRestaurantId(), req.getName(), req.getCategoryId());

        return new ResponseEntity<>(item,HttpStatus.CREATED);
    }

    @PutMapping("/{id}/stock")
    public ResponseEntity<IngredientsItem> updateIngredientStock(@PathVariable Long id) throws Exception{

        IngredientsItem item = ingredientsService.updateStock(id);

        return new ResponseEntity<>(item,HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItem>> getRestaurantIngredients(@PathVariable Long id) throws Exception{
        List<IngredientsItem> ingredientsItems = ingredientsService.findRestaurantIngredients(id);

        return new ResponseEntity<>(ingredientsItems,HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientsCategory(@PathVariable Long id)throws Exception{

        List<IngredientCategory> categories = ingredientsService.findIngredientCategoryByRestaurantId(id);

        return new ResponseEntity<>(categories,HttpStatus.OK);
    }

}