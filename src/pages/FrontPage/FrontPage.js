import React, { useEffect } from "react";
import { Introduction } from "./sections/Introduction";
import ProductList from "../../components/lists/ProductList";
import { useProducts } from "../../contexts/ProductsContext";
import HoverableHeading from "../../components/headings/HoverableHeading";
import ProductCarousel from "../../components/carousels/ProductCarousel";

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
      <section className="w-full py-8">
        <HoverableHeading title="On Sale" fontSize="1.5em" colorClassName="text-indigo-500 text-center w-full" className="hover:text-indigo-500 pb-8"/>
        <ProductCarousel products={products.filter((product)=>product.discount!==0)}/>
      </section>
    </>
  );
};
