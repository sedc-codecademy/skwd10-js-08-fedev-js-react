import React, { useContext } from "react";
import { ProductContext } from "../state/ProductContext";
import { UserContext } from "../state/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);
  const { balance, setBalance } = useContext(UserContext);
  const navigate = useNavigate();
  const submitOrder = (orderId) => {
    const totalPrice = cart.find((order) => order.id === orderId).totalPrice;
    if (totalPrice <= balance) {
      const updatedCart = cart.map((order) =>
        order.id === orderId ? { ...order, status: "DONE" } : { ...order }
      );
      setCart(updatedCart);
      setBalance((prevValue) => prevValue - totalPrice);
    } else {
      alert("YOU DONT HAVE ENOUGH CREDITS");
      navigate("/balance");
    }
  };
  const declineOrder = (orderId) => {
    const updatedCart = cart.map((order) =>
      order.id === orderId ? { ...order, status: "CANCELED" } : { ...order }
    );
    setCart(updatedCart);
  };
  return (
    <div>
      <h1>Ordered products</h1>
      {cart.map((order) => (
        <div
          key={order.id}
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
          {order.status === "CANCELED" && (
            <h2 style={{ color: "red" }}>CANCELED</h2>
          )}
          {order.status === "DONE" && (
            <h2 style={{ color: "green" }}>SUBMITED</h2>
          )}
          <h3>TOTAL PRICE: {order.totalPrice}</h3>
          <div>
            {order.products.map((prod) => (
              <div>
                <h4>NAME: {prod.name}</h4>
                <p>QUANTITY: {prod.quantity}</p>
                <p>
                  Total for {prod.name} : {prod.quantity * prod.price}
                </p>
              </div>
            ))}
          </div>
          {order.status === "ACTIVE" && (
            <div>
              <button onClick={() => submitOrder(order.id)}>
                SUBMIT ORDER
              </button>
              <button onClick={() => declineOrder(order.id)}>
                DECLINE ORDER
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
