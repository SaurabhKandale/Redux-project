import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {

    const products = useSelector((state) => state.allproducts.products);

    const renderList = products.map((data) => {
        return (
            <div className="four wide column" key={data.id}>
                <Link to={`/product/${data.id}`} >
                    <div className="ui link cards">
                        <div className="card" >
                            <div className="image">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="content">
                                <div className="header">{data.title}</div>
                                <div className="meta price">${data.price}</div>
                                <div className="meta">{data.category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>{renderList}</>
    )
};

export default ProductComponent;