import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductsPage.css";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";

const ProductsPage = () => {
  const products = useSelector(state => state.products.value);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);
  console.log(error);

  let content;

  if (status === "loading") {
    content = <Spinner />;
  } else if (status === "succeeded") {
    content = (
      <div className="card__container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (status === "failed") {
    content = <h1>{error}</h1>;
  }

  return (
    <section className="page ProductsPage">
      <div className="page__heading">
        <h2>All Products</h2>
      </div>
      {content}
    </section>
  );
};

export default ProductsPage;
