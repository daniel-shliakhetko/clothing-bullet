import React, { useEffect } from "react";
import { useCart } from "../contexts/ProductsContext";
import ProductList from "../components/lists/ProductList";
import HoverableHeading from "../components/headings/HoverableHeading";
import { Helmet } from "react-helmet";

export const CartPage = () => {
  const cart = useCart();

  useEffect(() => {
    console.log("CartPage:", cart);
  }, [cart]);

  return (
    <div
      style={{ height: "calc(100vh - 20rem)" }}
      className="flex items-center"
    >
      <Helmet>
        <title>Cart - Clothing Bullet</title>
      </Helmet>
      {cart && cart.length !== 0 ? (
        <ProductList products={cart || []} />
      ) : (
        <HoverableHeading
          title={"Your cart is Empty!"}
          fontSize={"1.25em"}
          colorClassName={"text-slate-600"}
          className={"hover:text-indigo-400"}
        />
      )}
    </div>
  );
};
