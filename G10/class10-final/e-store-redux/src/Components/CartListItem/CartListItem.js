import Button from "../Button/Button";
import "./CartListItem.css";
import { useDispatch } from "react-redux/es/exports";
import { removeFromCart } from "../../state/slices/productsSlice";

const CartListItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <li className="CartListItem">
      <strong>{product.title}</strong>
      <span>
        {product.price}${" "}
        <Button
          buttonText="✖"
          style={{ minWidth: "40px", height: "50px", marginLeft: "15px" }}
          onButtonClick={() => dispatch(removeFromCart(product))}
        />
      </span>
    </li>
  );
};

export default CartListItem;
