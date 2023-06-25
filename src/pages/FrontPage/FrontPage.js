import React, { useEffect } from "react";
import { Introduction } from "./sections/Introduction";
import ProductList from "../../components/lists/ProductList";
import { useProducts } from "../../contexts/ProductsContext";
import HoverableHeading from "../../components/headings/HoverableHeading";

export const FrontPage = () => {
  const products = useProducts();

  useEffect(()=>{console.log(products)},[products])

  return (
    <>
      <Introduction />
      <section className="w-full bg-indigo-400">
        <HoverableHeading title="Products" fontSize="1.5em" colorClassName="text-indigo-100 text-center w-full" className="hover:text-indigo-200 pb-8"/>
      <ProductList products={products} dark={true}/>
      </section>
    </>
  );
};
