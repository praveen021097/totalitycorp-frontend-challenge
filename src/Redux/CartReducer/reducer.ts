import { ActionTypes } from "./actionTypes";

import { Action } from "./actions";

export interface IsCartProductState {
    cart: any;
    isLoading: Boolean;
    isError: Boolean;


}
const initialState = {
    cart: [],
    isLoading: false,
    isError: false
};

export const reducer = (state: IsCartProductState = initialState, action: Action): IsCartProductState => {
    const { payload } = action;

    switch (action.type) {
        case ActionTypes.ADD_TO_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case ActionTypes.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cart: payload,
                isLoading: false,
                isError: false
            }
        case ActionTypes.ADD_TO_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case ActionTypes.GET_DATA_TO_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case ActionTypes.GET_DATA_TO_CART_SUCCESS:
            return {
                ...state,
                cart: payload,
                isLoading: false,
                isError: false
            }
        case ActionTypes.GET_DATA_TO_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }

}