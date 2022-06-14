// import { Fragment } from "react"; // One way of importing fragment
// import React from "react";

const ProductList = () => {
  const areProductsShown = false;

  const itemList = (
    <ul>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  );

  const productList = (
    <ul>
      <li>Product One</li>
      <li>Product Two</li>
      <li>Product Three</li>
    </ul>
  );

  return (
    <>
      {areProductsShown ? (
        <h3>Products are shown</h3>
      ) : (
        <h3>Items are shown</h3>
      )}
      {/* {!areProductsShown && itemList}
      {areProductsShown && productList} */}
      {areProductsShown ? productList : itemList}
    </>
  );
};

export default ProductList;
