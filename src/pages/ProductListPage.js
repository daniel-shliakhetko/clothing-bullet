import React from 'react';
import ProductList from "../components/lists/ProductList";
import { useProducts } from "../contexts/ProductsContext";

export const ProductListPage = () => {
  const products = useProducts();

  return (
    <div><ProductList products={products}/></div>
  )
}