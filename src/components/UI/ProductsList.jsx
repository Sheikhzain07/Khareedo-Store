import React from "react";
import ProductCard from "./ProductCard";

function ProductsList({ data }) {
  return (
    <>
      {data.map((ele) => {
        return <ProductCard ele={ele} />;
      })}
    </>
  );
}

export default ProductsList;
