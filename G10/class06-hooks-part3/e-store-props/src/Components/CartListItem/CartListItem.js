import Button from "../Button/Button";
import "./CartListItem.css";

const CartListItem = ({ product, removeFromCart }) => {
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
