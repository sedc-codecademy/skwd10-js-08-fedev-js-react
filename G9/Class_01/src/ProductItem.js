import React from "react";

const Product = ({ product }) => {
  return (
    <div key={product.id}>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Product;
