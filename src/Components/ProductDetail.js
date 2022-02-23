import React,{ useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProduct } from "../Redux/Actions/productActions";

const ProductDetail = () => {
    const { productId }=useParams();
    const dispatch=useDispatch();
    let product = useSelector((state)=>{return state.selectedProducts.products})
   
    const fetchDetails=async (id)=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{console.log(err.message)});

        dispatch(selectedProducts(response.data));
    }


    useEffect(() => {
      if (productId && productId !== "") fetchDetails(productId);
      return () => {
        dispatch(removeSelectedProduct());
      };
      
    }, [productId]);

    return(
        
    <div className="container p-4 mx-auto">
    {product.length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="grid grid-cols-2 items-center border-2 border-black p-3 bg-gradient-to-l from-slate-300 shadow-2xl rounded-xl">
        <div className="p-8">
              <img className="object-contain h-96 mx-auto" src={product.image} />
            </div>
            <div className="border-l-2 border-violet-300 pl-5">
              <h1 className="my-10 text-3xl">{product.title}</h1>
              <h2 className="my-10">
                <a className="font-semibold text-2xl">${product.price}</a>
              </h2>
              <h3 className="my-3">{product.category}</h3>
              <p className="text-md py-5">{product.description}</p>
              <div className="block"><button className="py-2 px-4 bg-slate-400 transition-all hover:bg-slate-300 rounded-md border-2 border-slate-500 hover:border-2 hover:border-black">Add to Cart</button></div>
            </div>
      </div>
    )}
  </div>
    )
};

export default ProductDetail;