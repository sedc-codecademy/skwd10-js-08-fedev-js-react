import "./ProductDetailsPanel.css";
import Button from "../Button/Button";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";

const ProductDetailsPanel = ({ product }) => {
  const { addToCart } = useContext(ProductsContext);

  console.log("Product Details Panel Rerendered");

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
              buttonText={product.inCart ? "ADDED" : "🛒"}
              isDisabled={product.inCart}
              onButtonClick={() => addToCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPanel;
