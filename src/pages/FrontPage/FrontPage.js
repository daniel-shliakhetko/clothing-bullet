import React from "react";
import { Introduction } from "./sections/Introduction";
import ProductList from "../../components/lists/ProductList";
import { useProducts } from "../../contexts/ProductsContext";

export const FrontPage = () => {
  const products = useProducts();

  return (
    <>
      <Introduction />
      <ProductList products={products} dark={true}/>
    </>
  );
};
