import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductsPage.css";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";

const ProductsPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="page ProductsPage">
      <div className="page__heading">
        <h2>All Products</h2>
      </div>
      <div className="card__container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
