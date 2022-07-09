import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNewBalance } from "../state/userSlice";
import { updateCart } from "../state/productSlice";

const Cart = () => {
  const balance = useSelector((state) => state.user.balance);
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitOrder = (orderId) => {
    const totalPrice = cart.find((order) => order.id === orderId).totalPrice;
    if (totalPrice <= balance) {
      const updatedCart = cart.map((order) =>
        order.id === orderId ? { ...order, status: "DONE" } : { ...order }
      );
      dispatch(updateCart(updatedCart));
      dispatch(setNewBalance(balance - totalPrice));
    } else {
      alert("YOU DONT HAVE ENOUGH CREDITS");
      navigate("/balance");
    }
  };
  const declineOrder = (orderId) => {
    const updatedCart = cart.map((order) =>
      order.id === orderId ? { ...order, status: "CANCELED" } : { ...order }
    );
    dispatch(updateCart(updatedCart));
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
