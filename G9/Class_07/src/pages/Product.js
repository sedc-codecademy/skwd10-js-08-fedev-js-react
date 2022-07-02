import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  //   useEffect(() => {
  //     fetch(`asdasdasdasd/${params.productId}`);
  //   });
  console.log(params);
  return (
    <div>
      <h1> PRODUCT {params.productId}</h1>
    </div>
  );
};

export default Product;
