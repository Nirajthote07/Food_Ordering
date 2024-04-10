package com.sky.service;

import com.sky.dto.RestaurantDto;
import com.sky.model.Restaurant;
import com.sky.model.User;
import com.sky.request.CreateRestaurantRequest;

import java.util.List;

public interface RestaurantService {

    public Restaurant createRestaurant(CreateRestaurantRequest req, User user );

    public Restaurant updateRestaurant(Long restaurantId,CreateRestaurantRequest updatedRestaurant) throws Exception;

    public void deletedRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long restaurantId) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;

    public RestaurantDto addToFavorites(Long restaurantId, User user) throws  Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;




}
