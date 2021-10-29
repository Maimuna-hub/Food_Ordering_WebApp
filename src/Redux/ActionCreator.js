import axios from 'axios';
import { useImperativeHandle } from 'react';
import * as ActionTypes from './ActionTypes';

export const addIngredient = igtype => {
    return {
        type: ActionTypes.ADD_INGREDIENT,
        payload: igtype, //redux action type
    }
}

export const removeIngredient = igtype => {
    return {
        type: ActionTypes.REMOVE_INGREDIENT,
        payload: igtype,
    }
}

export const updatePurchasable = () => {
    return {
        type: ActionTypes.UPDATE_PURCHASABLE,
    }
}

export const resetIngredients = () => {
    return {
        type: ActionTypes.RESET_INGREDIENTS,
    }
}

export const loadOrders = orders => {
    return {
        type: ActionTypes.LOAD_ORDERS,
        payload: orders,
    }
}

export const orderLoadFailed = () => {
    return {
        type: ActionTypes.ORDER_LOAD_FAILED,
    }
}

export const fetchOrders = (token, userId) => dispatch => {
    const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://burger-f8ee6-default-rtdb.firebaseio.com/orders.json?auth=' + token + queryParams)
        .then(response => {
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            dispatch(orderLoadFailed());
        })
}

