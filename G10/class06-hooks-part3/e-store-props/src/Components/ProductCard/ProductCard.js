import "./ProductCard.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card__details">
        <p>{product.price}$</p>
        <Button
          buttonText={product.inCart ? "ADDED" : "🛒"}
          isDisabled={product.inCart}
          onButtonClick={() => addToCart(product)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
