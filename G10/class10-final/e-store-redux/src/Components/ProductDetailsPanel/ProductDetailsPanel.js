import "./ProductDetailsPanel.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "../../state/slices/productsSlice";

const ProductDetailsPanel = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="ProductDetailsPanel">
      <h3>{product.title}</h3>
      <div className="panel__content">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="panel__detail">
          <p>{product.description}</p>
          <div className="panel__controls">
            <p>{product.price}$</p>
            <Button
              buttonText={product.isInCart ? "ADDED" : "🛒"}
              isDisabled={product.isInCart}
              onButtonClick={() => dispatch(addToCart(product))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPanel;
