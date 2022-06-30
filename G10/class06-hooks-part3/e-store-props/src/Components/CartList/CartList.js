import CartListItem from "../CartListItem/CartListItem";
import "./CartList.css";

const CartList = ({ cartProducts, removeFromCart }) => {
  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map(product => (
            <CartListItem
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))}
        </ol>
      ) : (
        <h3 className="CartList__heading">
          No products added in cart...please buy something!
        </h3>
      )}
    </>
  );
};

export default CartList;
