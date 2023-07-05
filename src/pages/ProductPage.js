import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getImage, getProduct } from "../database/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  saveCartToLocalStorage,
} from "../store/cartSlice";
import { useCart } from "../contexts/ProductsContext";
import { Helmet } from "react-helmet";

export const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cart = useCart();

  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(
    () => async () => {
      const currentProduct = await getProduct(id);
      if (!currentProduct) setProduct("Redirect");
      else {
        currentProduct.id = id;
        setProduct(currentProduct);
        const image = await getImage(currentProduct.thumbnail);
        console.log(image);
        setImageUrl(image);
      }
    },
    [id]
  );
  return (
    <div className="w-full flex flex-col sm:flex-row p-8 md:p-16 lg:p-24 xl:p-32 space-x-8">
      {product === "Redirect" && <Navigate to="/products" />}
      <div className="w-full space-y-4 flex justify-center flex-col px-10">
        {product ? (
          <>
            <Helmet>
              <title>{product.title} - Clothing Bullet</title>
              <meta name="description" content={product.description} />
              <meta
                name="keywords"
                content={"Clothing, Bullet, Store, Style, " + product.title}
              />
            </Helmet>
            <span className="md:hidden text-3xl text-center font-semibold">
              {product.title}
            </span>
            {imageUrl ? (
              <img
                className="w-full object-content rounded-lg"
                src={imageUrl}
                alt="Product"
              />
            ) : (
              <div className="rounded-lg h-[30rem] w-full bg-indigo-300 animate-pulse" />
            )}
          </>
        ) : (
          <div className="rounded-lg h-[30rem] w-full bg-indigo-300 animate-pulse" />
        )}
      </div>
      <div className="w-full space-y-4">
        {product ? (
          <span className="hidden md:block text-3xl font-semibold">
            {product.title}
          </span>
        ) : (
          <div className="rounded-lg h-12 w-32 bg-indigo-300 animate-pulse" />
        )}
        {product ? (
          <p className="">{product.description}</p>
        ) : (
          <>
            <div className="rounded-lg h-4 w-full bg-indigo-300 animate-pulse" />
            <div className="rounded-lg h-4 w-full bg-indigo-300 animate-pulse" />
            <div className="rounded-lg h-4 w-5/6 bg-indigo-300 animate-pulse" />
          </>
        )}
        <div className="flex space-x-2">
          {product ? (
            !product.discount || product.discount === 0 ? (
              <span className="Price text-center font-bold text-xl text-slate-600">
                {product.price}$
              </span>
            ) : (
              <>
                <span className="Price text-center font-bold text-xl line-through text-slate-500 decoration-slate-500">
                  {product.price}$
                </span>
                <span className="Price text-center font-bold text-xl text-red-600">
                  {Math.round(
                    (product.price - product.price * product.discount) * 100
                  ) / 100}
                  $
                </span>
              </>
            )
          ) : (
            <div className="rounded-lg h-12 w-24 bg-indigo-300 animate-pulse" />
          )}
        </div>
        {product ? (
          <div className="flex space-x-2">
            <button
              className="Button ButtonDark h-12 px-8 bg-indigo-500 text-xl font-semibold text-indigo-100 rounded-lg hover:text-indigo-200"
              onClick={() => {}}
            >
              <span>Buy</span>
            </button>
            {cart.some((product) => product.id === id) ? (
              <button
                className="w-12 h-12 bg-red-600 rounded-lg text-indigo-100 duration-300 hover:scale-105 hover:text-red-200"
                onClick={() => {
                  dispatch(removeProductFromCart(product));
                  saveCartToLocalStorage(
                    cart.filter((item) => item.id !== product.id)
                  );
                }}
              >
                <FontAwesomeIcon className="mt-1 h-6" icon={faCartArrowDown} />
              </button>
            ) : (
              <button
                className="w-12 h-12 bg-indigo-300 rounded-lg text-indigo-600 duration-300 hover:scale-105 hover:text-indigo-400"
                onClick={() => {
                  dispatch(addProductToCart(product));
                  saveCartToLocalStorage([...cart, product]);
                }}
              >
                <FontAwesomeIcon className="mt-1 h-6" icon={faCartPlus} />
              </button>
            )}
          </div>
        ) : (
          <div className="rounded-lg h-16 w-32 bg-indigo-300 animate-pulse" />
        )}
      </div>
    </div>
  );
};
