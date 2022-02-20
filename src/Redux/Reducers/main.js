import {combineReducers} from 'redux';
import { productReducer, selectedProductsReducer } from './productReducer';

export const reducer=combineReducers({
    allproducts:productReducer,
    selectedProducts:selectedProductsReducer
});