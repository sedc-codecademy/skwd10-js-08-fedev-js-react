import CartListItem from "../CartListItem/CartListItem";
import "./CartList.css";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";

const CartList = () => {
  const { getProductsInCart } = useContext(ProductsContext);

  const cartProducts = getProductsInCart();

  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map(product => (
            <CartListItem key={product.id} product={product} />
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
