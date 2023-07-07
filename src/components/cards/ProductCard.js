import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getImage } from "../../database/firebase";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;

  const [imageUrl, setImageUrl] = useState(null);
  useEffect(
    () => {
      if (!product || imageUrl) return;
      getImage(props.product.thumbnail).then((image)=>{
        console.log(image);
        setImageUrl(image);
      });
    }
  );

  return product ? (
    <Link to={"/products/" + props.product.id}>
      <div
        className={
          "w-72 h-96 flex flex-col justify-center items-center p-8 rounded-lg font-medium space-y-2 duration-300 hover:scale-105 ease-[cubic-bezier(0.000, 1.125, 0.530, -0.600)]" +
          (props.dark ? " bg-indigo-100" : " bg-indigo-400")
        }
      >
        <img
          className={
            "h-56 object-contain rounded-md " + (!imageUrl ? "hidden" : "")
          }
          src={imageUrl}
          alt={props.product.title}
        />
        {!imageUrl && (
          <div
            className={
              "h-56 w-44 rounded-md animate-pulse " +
              (!props.dark ? "bg-indigo-100" : "bg-indigo-300")
            }
          />
        )}
        <span
          className={
            "Title text-center text-xl" +
            (!props.dark ? " text-indigo-100" : "")
          }
        >
          {props.product.title}
        </span>
        {props.product.discount === 0 ? (
          <span
            className={
              "Price text-center font-bold" +
              (!props.dark ? " text-indigo-50" : " text-slate-600")
            }
          >
            {props.product.price}$
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
              {props.product.price}$
            </span>
            <span
              className={
                "Price text-center font-bold" +
                (!props.dark ? " text-red-200" : " text-red-600")
              }
            >
              {Math.round((props.product.price - props.product.price * props.product.discount) * 100) / 100}$
            </span>
          </div>
        )}
        {props.product.stock > 0 ? (
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
  ) : (
    <div
      className={
        "w-72 h-96 flex flex-col justify-center items-center p-8 rounded-lg font-medium space-y-2" +
        (props.dark ? " bg-indigo-100" : " bg-indigo-400")
      }
    >
      <div
        className={
          "h-56 w-44 rounded-md animate-pulse " +
          (!props.dark ? "bg-indigo-100" : "bg-indigo-300")
        }
      />
      <div
        className={
          "h-10 w-full rounded-md animate-pulse " +
          (!props.dark ? "bg-indigo-100" : "bg-indigo-300")
        }
      />
      <div
        className={
          "h-8 w-2/3 rounded-md animate-pulse " +
          (!props.dark ? "bg-indigo-100" : "bg-indigo-300")
        }
      />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  dark: PropTypes.bool,
};

export default ProductCard;
