import React from "react";
import './product.css'
import img1 from './asset/tide.png'

const products = [
  {
    id: 1,
    name: "Tide Provider",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti?",
    image: img1,
  },
  {
    id: 2,
    name: "Tide Provider",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti?",
    image: img1,
  }

];

const Product = () => {
  return (
    <div className="container">
      <h1>E Commerce</h1>
      {products.map(product => (
        <div className="product" key={product.id}>
          <div className="itemleft"><img src={product.image} alt={product.name} /></div>
          <div className="itemRight">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
        
          </div>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Product;
