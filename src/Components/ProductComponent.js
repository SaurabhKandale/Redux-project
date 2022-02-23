import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {

    const products = useSelector((state) => state.allproducts.products);

    const renderList = products.map((data) => {
        return (
            <div className="px-1 py-2 my-7 text-center" key={data.id}>
                <Link to={`/product/${data.id}`} >
                    <div className="border-2 border-black shadow-xl hover:shadow-2xl transition-shadow rounded-xl px-4 pt-8">
                        <div className="rounded-3xl" >
                            <div className="">
                                <img src={data.image} alt="" className="object-contain h-56 mx-auto" />
                            </div>
                            <div className="py-3 flex justify-center items-center">
                                <div>
                                    <div className="my-2">{data.title}</div>
                                <div className="mt-2 mb-1 font-bold">${data.price}</div>
                                <div className="my-1 text-slate-500">{data.category}</div>
                                </div>
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