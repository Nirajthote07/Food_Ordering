package com.sky.service;

import com.sky.model.Order;
import com.sky.model.User;
import com.sky.request.OrderRequest;

import java.util.List;

public interface OrderService {

    public Order createOrder(OrderRequest orderRequest, User user) throws Exception;

    public Order updateOrder(Long orderId,String orderStatus) throws Exception;

    public void cancelOrder(Long orderId) throws Exception;

    public List<Order> getUsersOrder(Long userId) throws Exception;

    public List<Order> getRestaurantsOrder(Long restaurantId,String orderStatus) throws Exception;

    public Order findOrderById(Long orderId) throws Exception;
}
