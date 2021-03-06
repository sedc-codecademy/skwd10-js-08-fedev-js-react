import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";

const ProductDetailsPage = ({ products, addToCart }) => {
  const { id: productId } = useParams();

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    if (productId) {
      setSelectedProduct(prevSelectedProduct => {
        return products.find(product => product.id === Number(productId));
      });
    }
  }, [products, productId]);

  return (
    <>
      {!selectedProduct && <Navigate to="/not-found" />}
      <section className="page">
        <div className="page__heading">
          <h2>Product Details</h2>
          <div className="page__content">
            {selectedProduct && (
              <ProductDetailsPanel
                product={selectedProduct}
                addToCart={addToCart}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
