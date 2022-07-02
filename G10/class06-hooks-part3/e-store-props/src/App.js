import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import CartPage from "./Pages/CartPage/CartPage";
import productsDummyData from "./data/products.json";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(productsDummyData);

  const addToCart = selectedProduct => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === selectedProduct.id) {
          product.isInCart = true;
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
          product.isInCart = false;
          return product;
        } else {
          return product;
        }
      })
    );
  };

  const getProductsInCart = () => {
    return products.filter(product => product.isInCart);
  };

  return (
    <div className="App">
      <Header title="E-STORE" cartCount={getProductsInCart().length} />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetailsPage products={products} addToCart={addToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartProducts={getProductsInCart()}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer>
        <p>This app uses React Router Dom v6</p>
      </Footer>
    </div>
  );
}

export default App;
