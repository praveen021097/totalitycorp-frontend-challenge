import { ActionTypes } from "./actionTypes";
import { IsCartProductState } from "./reducer";

export interface isAddProductSuccess{
    type:ActionTypes.ADD_TO_CART_SUCCESS;
    payload:IsCartProductState;
}

export interface isAddProductRequest{
    type:ActionTypes.ADD_TO_CART_REQUEST;
    payload:true;
}

export interface isAddProductFailure{
    type:ActionTypes.ADD_TO_CART_FAILURE;
    payload:true;
}

export interface isGetCartProductSuccess{
    type:ActionTypes.GET_DATA_TO_CART_SUCCESS;
    payload:IsCartProductState;
}

export interface isGetCartProductRequest{
    type:ActionTypes.GET_DATA_TO_CART_REQUEST;
    payload:true;
}

export interface isGetCartProductFailure{
    type:ActionTypes.GET_DATA_TO_CART_FAILURE;
    payload:true;
}

export interface isCartProductIncreaseSuccess{
    type:ActionTypes.PRODUCT_QUANTITY_INCREASE_SUCCESS;
    payload:IsCartProductState;
}

export interface isCartProductIncreaseRequest{
    type:ActionTypes.PRODUCT_QUANTITY_INCREASE_REQUEST;
    payload:true;
}

export interface isCartProductIncreaseFailure{
    type:ActionTypes.PRODUCT_QUANTITY_INCREASE_FAILURE;
    payload:true;
}

export interface isCartProductDecreaseSuccess{
    type:ActionTypes.PRODUCT_QUANTITY_DECREASE_SUCCESS;
    payload:IsCartProductState;
}

export interface isCartProductDecreaseRequest{
    type:ActionTypes.PRODUCT_QUANTITY_DECREASE_REQUEST;
    payload:true;
}

export interface isCartProductDecreaseFailure{
    type:ActionTypes.PRODUCT_QUANTITY_DECREASE_FAILURE;
    payload:true;
}

export interface isCartProductDeleteSuccess{
    type:ActionTypes.DELETE_PRODUCT_TO_CART_SUCCESS;
    payload:IsCartProductState;
}

export interface isCartProductDeleteRequest{
    type:ActionTypes.DELETE_PRODUCT_TO_CART_REQUEST;
    payload:true;
}

export interface isCartProductDeleteFailure{
    type:ActionTypes.DELETE_PRODUCT_TO_CART_FAILURE;
    payload:true;
}

export type Action =isAddProductFailure | isAddProductRequest | isAddProductSuccess |isGetCartProductRequest|isGetCartProductSuccess|isGetCartProductFailure | isCartProductDecreaseFailure | isCartProductDecreaseRequest |isCartProductDecreaseSuccess |isCartProductIncreaseFailure |isCartProductIncreaseRequest |isCartProductIncreaseSuccess | isCartProductDeleteFailure |isCartProductDeleteSuccess |isCartProductDeleteRequest;
