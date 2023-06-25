import React, { useEffect } from "react";
import { useCart } from "../contexts/ProductsContext";
import ProductList from "../components/lists/ProductList";

export const CartPage = () => {
  const cart = useCart();

  useEffect(() => {
    console.log("CartPage:", cart);
  }, [cart]);

  return (
    <div>
      <ProductList products={cart} />
    </div>
  );
};
