import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Catalog = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Coca Cola", price: 50 },
    { id: 2, name: "Stobi Flips", price: 20 },
    { id: 3, name: "Sprite", price: 50 },
  ]);
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("price"));
  return (
    <div>
      <h1>Catalog</h1>
      <input
        type="number"
        onChange={(e) => {
          if (e.target.value) {
            setSearchParams({
              price: e.target.value,
            });
          } else {
            setSearchParams({});
          }
        }}
      />
      {searchParams.get("price")
        ? products
            .filter(
              (product) => product.price === parseInt(searchParams.get("price"))
            )
            .map((product) => (
              <div>
                {product.name}: {product.price}
              </div>
            ))
        : products.map((product) => (
            <div>
              {product.name}: {product.price}
            </div>
          ))}
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Catalog;
