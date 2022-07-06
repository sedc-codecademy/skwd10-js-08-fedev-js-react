import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // useEffect(() => {
  // fetching the products
  //setProducts(products)
  // })
  const [products, setProducts] = useState([
    { id: 1, name: "Coca Cola", price: 50 },
    { id: 2, name: "Stobi Flips", price: 20 },
    { id: 3, name: "Sprite", price: 50 },
  ]);
  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider value={{ products, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
