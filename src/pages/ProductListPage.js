import React from "react";
import ProductList from "../components/lists/ProductList";
import { useProducts } from "../contexts/ProductsContext";
import { Helmet } from "react-helmet";

export const ProductListPage = () => {
  const products = useProducts();

  return (
    <div>
      <Helmet>
        <title>Products - Clothing Bullet</title>
      </Helmet>
      <ProductList products={products || []} />
    </div>
  );
};
