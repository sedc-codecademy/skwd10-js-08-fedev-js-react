import "./ProductPage.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Counter from "../../Components/Counter/Counter";

const ProductPage = () => {
  console.log("Product Page Component Called");
  const productDummyData = [
    {
      title: "TV",
      description: "A very nice LED TV",
      price: 599.98,
    },
    {
      title: "Dishwasher",
      description: "Freedom from the kitchen sink guaranteed",
      price: 299.99,
    },
    {
      title: "Fridge",
      description: "You will not resist the urge to open me all the time",
      price: 999.99,
    },
  ];

  return (
    <section className="ProductPage">
      <h2>Available Products</h2>
      <div className="products__container Card">
        {productDummyData.map((productData, i) => (
          //You can add key props to componets as well as custom html
          <ProductCard key={productData.title + i} productData={productData} />
        ))}
      </div>
      <Counter testProp="This is a test prop" />
    </section>
  );
};

export default ProductPage;
