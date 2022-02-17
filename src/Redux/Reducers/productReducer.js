import { ActionTypes } from "../Constants/action-types";
import { setProducts,selectedProducts } from "../Actions/productActions";

const initialState={
    products:[
        {
            id:1,
            title:"Name",
            category:"Coder"
        }
    ]
}

export const productReducer=(state=initialState,actions)=>{
    switch (actions.type){
        case ActionTypes.SET_PRODUCTS:
            return state;

        default : return state;    
    }
}