import { ActionTypes } from "../Constants/action-types";
const initialState = {
    products: []
}

export const productReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: actions.payLoad
            };

        default: return state;
    }
}

export const selectedProductsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {
                ...state, products: actions.payLoad
            };

        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {...state,products:[]};    

        default: return state;
    }
}