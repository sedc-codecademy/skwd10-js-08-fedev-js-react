import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../state/productSlice";

const Catalog = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { products, cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(cart);
  // console.log(searchParams.get("price"));

  const buyProduct = (product) => {
    if (cart.filter((order) => order.status === "ACTIVE").length > 0) {
      const updatedCart = cart.map((order) =>
        order.status === "DONE"
          ? { ...order }
          : {
              ...order,
              totalPrice: order.totalPrice + product.price,
              products: !order.products.some((prod) => prod.id === product.id)
                ? [...order.products, { ...product, quantity: 1 }]
                : order.products.map((prod) =>
                    prod.id !== product.id
                      ? { ...prod }
                      : { ...prod, quantity: prod.quantity + 1 }
                  ),
            }
      );
      dispatch(updateCart(updatedCart));
    } else {
      dispatch(
        updateCart([
          ...cart,
          {
            id: Math.random(1, 100000),
            products: [{ ...product, quantity: 1 }],
            status: "ACTIVE",
            totalPrice: product.price,
          },
        ])
      );
    }
  };
  console.log(cart);
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
            <div
              key={product.id}
              style={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                width: "250px",
                backgroundColor: "blue",
                color: "white",
                alignItems: "center",
              }}
            >
              <h3>{product.name}</h3>
              <div>{product.price}</div>
              <button onClick={() => buyProduct(product)}>ORDER</button>
            </div>
          ))}
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Catalog;
