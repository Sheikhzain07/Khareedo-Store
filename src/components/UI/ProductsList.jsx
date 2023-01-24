import React from "react";
import ProductCard from "./ProductCard";

function ProductsList({ data }) {
  return (
    <>
      {data.map((ele) => {
        return <ProductCard key={ele.id} ele={ele} />;
      })}
    </>
  );
}

export default ProductsList;
