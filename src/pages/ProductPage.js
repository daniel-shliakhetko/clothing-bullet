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
        setImageUrl(image);
      }
    },
    [id]
  );
  return (
    <div className="w-full flex flex-col sm:flex-row p-8 md:p-16 lg:p-24 xl:p-32 space-x-8">
      {product === "Redirect" && <Navigate to="/products" />}
      <div className="w-full space-y-4 flex justify-center items-center flex-col">
        {product ? (
          <>
            <span className="md:hidden text-3xl text-center font-semibold">
              {product.title}
            </span>
            {imageUrl ? (
              <img
                className="h-80 object-content"
                src={imageUrl}
                alt="Product"
              />
            ) : null}
          </>
        ) : null}
      </div>
      <div className="w-full space-y-4">
        {product ? (
          <>
            <span className="hidden md:block text-3xl font-semibold">
              {product.title}
            </span>
            <p className="">{product.description}</p>
            <div className="flex space-x-2">
              {!product.discount || product.discount === 0 ? (
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
              )}
            </div>
            <div className="flex space-x-2">
              <button
                className="h-12 px-8 bg-indigo-500 text-xl font-semibold text-indigo-100 rounded-lg"
                onClick={() => {}}
              >
                Buy
              </button>
              {cart.some((product) => product.id === id) ? (
                <button
                  className="w-12 h-12 bg-red-600 rounded-lg text-indigo-100"
                  onClick={() => {
                    dispatch(removeProductFromCart(product));
                    saveCartToLocalStorage(
                      cart.filter((item) => item.id !== product.id)
                    );
                  }}
                >
                  <FontAwesomeIcon
                    className="mt-1 h-6"
                    icon={faCartArrowDown}
                  />
                </button>
              ) : (
                <button
                  className="w-12 h-12 bg-indigo-300 rounded-lg text-indigo-600"
                  onClick={() => {
                    dispatch(addProductToCart(product));
                    saveCartToLocalStorage([...cart, product]);
                  }}
                >
                  <FontAwesomeIcon className="mt-1 h-6" icon={faCartPlus} />
                </button>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
