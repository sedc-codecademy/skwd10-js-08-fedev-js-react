import { createContext, useState } from "react";
import productsDummyData from "../data/products.json";

const ProductsContext = createContext({
  products: [],
  addToCart() {},
  removeFromCart() {},
  getProductsInCart() {},
});

export const ProductsProvider = props => {
  const [products, setProducts] = useState(productsDummyData);

  const addToCart = selectedProduct => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === selectedProduct.id) {
          product.inCart = true;
          return product;
        } else {
          return product;
        }
      })
    );
  };

  const removeFromCart = selectedProduct => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === selectedProduct.id) {
          product.inCart = false;
          return product;
        } else {
          return product;
        }
      })
    );
  };

  const getProductsInCart = () => {
    return products.filter(product => product.inCart);
  };

  return (
    <ProductsContext.Provider
      value={{ products, addToCart, removeFromCart, getProductsInCart }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
