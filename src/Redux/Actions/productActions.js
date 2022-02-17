import { ActionTypes } from "../Constants/action-types"


export const setProducts=(products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
    payLoad: products
    }

};

export const selectedProducts=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
    payLoad: product,
    }

};