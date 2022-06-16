import React from "react";
import Product from "./ProductItem";

const ShopMenu = () => {
  const products = [
    { id: 1, name: "Coca Cola", price: 100 },
    { id: 2, name: "Fanta1", price: 80 },
    { id: 3, name: "Sprite", price: 120 },
  ];
  return (
    <>
      <div className="LIST">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default ShopMenu;
