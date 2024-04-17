import { type } from '@testing-library/user-event/dist/type';
import {api} from '../../config/api';

import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./ActionType"

export const findCart = (token) =>{

    return async (dispatch)=>{
        dispatch({type:FIND_CART_REQUEST});

        try {
            
            const response = await api.get(`/api/cart/`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            })

            dispatch({type:FIND_CART_SUCCESS, payload:response.data});
            console.log("find Cart",response.data);

        } catch (error) {
            console.log("error ",error);
            dispatch({type:FIND_CART_FAILURE,payload:error});
            
        }
    }
}


export const getAllCartItems = (reqData) =>{

    return async (dispatch)=>{
        dispatch({type:GET_ALL_CART_ITEMS_REQUEST});

        try {
            
            const response = await api.get(`/api/carts/${reqData.cartId}/items`,{
                headers:{
                    Authorization: `Bearer ${reqData.token}`,
                },
            })

            dispatch({type:GET_ALL_CART_ITEMS_SUCCESS, payload:response.data});
            console.log("Get all cart items ",response.data);

        } catch (error) {
            console.log("error ",error);
            dispatch({type:GET_ALL_CART_ITEMS_FAILURE,payload:error});
            
        }
    }
}

export const addItemToCart = (reqData) =>{

    return async (dispatch)=>{
        dispatch({type:ADD_ITEM_TO_CART_REQUEST});

        try {
            
            const {data} = await api.put(`/api/cart/add`,reqData.cartItem,{
                headers:{
                    Authorization: `Bearer ${reqData.token}`,
                },
            })

            dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data});
            console.log("add Item to Cart",data);

        } catch (error) {
            console.log("error ",error);
            dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error});
            
        }
    }
}

export const updateCartItem = (reqData) =>{

    return async (dispatch)=>{
        dispatch({type:UPDATE_CARTITEM_REQUEST});

        try {
            
            const {data} = await api.put(`/api/cart-item/update`,reqData.data,{
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            })

            dispatch({type:UPDATE_CARTITEM_SUCCESS, payload:data});
            console.log("update Cart-item ",data);

        } catch (error) {
            console.log("error ",error);
            dispatch({type:UPDATE_CARTITEM_FAILURE,payload:error});
            
        }
    }
}


export const removeCartItem = (cartItemId,jwt) =>{

    return async (dispatch)=>{
        dispatch({type:REMOVE_CARTITEM_REQUEST});

        try {
            
            const {data} = await api.delete(`/api/cart-item/${cartItemId}/remove`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            })

            dispatch({type:REMOVE_CARTITEM_SUCCESS, payload:cartItemId});
            console.log("remove Cart",data);

        } catch (error) {
            console.log("error ",error);
            dispatch({type:REMOVE_CARTITEM_FAILURE,payload:error});
            
        }
    }
}

export const clearCartAction = () =>{

    return async (dispatch)=>{
        dispatch({type:CLEARE_CART_REQUEST});

        try {
            
            const {data} = await api.put(`/api/cart/clear`,{},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            })

            dispatch({type:CLEARE_CART_SUCCESS, payload:data});
            console.log("clear Cart",data);

        } catch (error) {
            console.log("error ",error);
            dispatch({type:CLEARE_CART_FAILURE,payload:error});
            
        }
    }
}

