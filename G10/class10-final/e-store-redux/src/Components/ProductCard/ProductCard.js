import "./ProductCard.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/slices/productsSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card__details">
        <p>{product.price}$</p>
        <Button
          buttonText={product.isInCart ? "ADDED" : "🛒"}
          isDisabled={product.isInCart}
          onButtonClick={() => dispatch(addToCart(product))}
        />
      </div>
    </div>
  );
};

export default ProductCard;
