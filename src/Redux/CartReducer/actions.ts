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

export type Action =isAddProductFailure | isAddProductRequest | isAddProductSuccess |isGetCartProductRequest|isGetCartProductSuccess|isGetCartProductFailure;
