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
        
    <div className="ui grid container">
    {product.length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={product.image} />
            </div>
            <div className="column rp">
              <h1 className="my-10 text-2xl">{product.title}</h1>
              <h2 className="my-10">
                <a className="ui teal tag label">${product.price}</a>
              </h2>
              <h3 className="ui brown block header my-8">{product.category}</h3>
              <p className="text-md py-10">{product.description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
    )
};

export default ProductDetail;