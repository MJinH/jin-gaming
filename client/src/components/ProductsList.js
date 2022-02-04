import React from 'react';
import { Link } from "react-router-dom";


const ProductsList = ({name,img,price}) => {
    return (
        <Link to={`/product/${name}`} className="product-detail text-decoration-none text-dark mt-2">
            <div className="products-lists d-flex flex-column align-items-center justify-content-center">
                <div className="product-imgs">
                    <img className="product-img" src={img}/>
                </div>
                <div className="product-infos mt-4">
                    <span className="product-name">{name}</span>
                    <span className="product-price">{price}</span>
                </div>
            </div>
        </Link>
    );
}

export default ProductsList;
