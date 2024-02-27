import React from "react";
import './product.css'
import img1 from './asset/tide.png'
const Product = () => {

  return (
   <div className="container">
        <h1>E Commerce</h1>
    <div className="product">
        <div className="itemleft"><img src={img1} alt=""/></div>
        <div className="itemRight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti?
        </div>
    </div>
    <br />
    <div className="product">
        <div className="itemleft"><img src={img1} alt=""/></div>
        <div className="itemRight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti?
        </div>
    </div>
    <br />
   </div>
   
  );
};

export default Product;
