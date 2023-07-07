import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../cards/ProductCard";

const ProductList = (props) => {
  const products = props.max
    ? [...props.products.slice(0, props.max)]
    : props.products;

  const skeletonArr = [];
  const max = props.max || 8;

  for (let i = 0; i < max; i++) {
    skeletonArr.push(null);
  }
  return (
    <ul
      className={
        "w-full grid grid-flow-rows sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8" +
        (props.dark ? " bg-indigo-400" : "")
      }
    >
      {products && products.length > 0
        ? products.map((product, i) => (
            <li
              className="w-full flex justify-center items-center py-4"
              key={i}
            >
              <ProductCard product={product} dark={props.dark} />
            </li>
          ))
        : skeletonArr.map((product, i) => (
            <li
              className="w-full flex justify-center items-center py-4"
              key={i}
            >
              <ProductCard product={product} dark={props.dark} />
            </li>
          ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  max: PropTypes.number,
  dark: PropTypes.bool,
};

export default ProductList;
