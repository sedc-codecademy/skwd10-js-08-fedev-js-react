import Button from "../Button/Button";
import "./CartListItem.css";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";

const CartListItem = ({ product }) => {
  const { removeFromCart } = useContext(ProductsContext);

  return (
    <li className="CartListItem">
      <strong>{product.title}</strong>
      <span>
        {product.price}${" "}
        <Button
          buttonText="✖"
          style={{ minWidth: "40px", height: "50px", marginLeft: "15px" }}
          onButtonClick={() => removeFromCart(product)}
        />
      </span>
    </li>
  );
};

export default CartListItem;
