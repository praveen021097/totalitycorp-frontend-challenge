import { Action } from "./actions";
import { ActionTypes } from "./actionTypes";

const userData = JSON.parse(localStorage.getItem('userDetails') || '{}');

export interface IsAuthstate {
    isAuth: boolean;
    user: any;
    isLoading: boolean;
    isError: boolean;
   
}

const initialState = {
    isAuth: userData.name ? true : false,
    user: userData.user || {},
    isLoading: false,
    isError: false
    
};



export const reducer = (state: IsAuthstate = initialState, action: Action): IsAuthstate => {

    const { payload } = action;

    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                isAuth:true,
                user:payload,
               isLoading:false,
               isError:false
            }

        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state

    }

}