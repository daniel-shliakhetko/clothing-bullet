import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getImage } from "../../database/firebase";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  const { id, title, price, discount, stock, thumbnail } = product;

  const [imageUrl, setImageUrl] = useState(null);
  useEffect(
    () => async () => {
      if (!product) return;
      const image = await getImage(thumbnail);
      setImageUrl(image);
    },
    [product, thumbnail]
  );

  return (
    <Link to={"/products/" + id}>
      <div
        className={
          "w-72 h-96 flex flex-col justify-center items-center p-8 rounded-lg font-medium space-y-2" +
          (props.dark ? " bg-indigo-100" : " bg-indigo-400")
        }
      >
        {imageUrl ? (
          <img className="h-56 object-contain" src={imageUrl} alt={title} />
        ) : null}
        <span
          className={
            "Title text-center text-xl" +
            (!props.dark ? " text-indigo-100" : "")
          }
        >
          {title}
        </span>
        {discount === 0 ? (
          <span
            className={
              "Price text-center font-bold" +
              (!props.dark ? " text-indigo-50" : " text-slate-600")
            }
          >
            {price}$
          </span>
        ) : (
          <div className="flex justify-center space-x-2">
            <span
              className={
                "Price text-center font-bold line-through" +
                (!props.dark
                  ? " text-indigo-100 decoration-indigo-100"
                  : " text-slate-500 decoration-slate-500")
              }
            >
              {price}$
            </span>
            <span
              className={
                "Price text-center font-bold" +
                (!props.dark ? " text-red-200" : " text-red-600")
              }
            >
              {Math.round((price - price * discount) * 100) / 100}$
            </span>
          </div>
        )}
        {stock > 0 ? (
          <span
            className={
              "Stock text-center font-normal" +
              (!props.dark ? " text-indigo-100" : "")
            }
          >
            In stock
          </span>
        ) : (
          <span
            className={
              "Stock text-center font-normal" +
              (!props.dark ? " text-indigo-100" : "")
            }
          >
            Out of stock
          </span>
        )}
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  dark: PropTypes.bool,
};

export default ProductCard;
