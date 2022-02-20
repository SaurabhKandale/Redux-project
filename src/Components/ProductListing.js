import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts} from "../Redux/Actions/productActions";

const ProductListing = ()=>{

    const products=useSelector((state)=>{return state.allproducts.products});
    const dispatch=useDispatch();

    const fetchProducts=async ()=>{
        const response=await axios.get("https://fakestoreapi.com/products").
        catch((err)=>{console.log(err.message)});

        dispatch(setProducts(response.data));
    }

    useEffect(()=>{fetchProducts()},[products]);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
};

export default ProductListing;