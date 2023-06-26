import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
import { getProducts } from "../database/firebase";
import { getCartFromLocalStorage, setCart } from "../store/cartSlice";

const productsContext = createContext();

export const useProducts = () => useContext(productsContext).products;

export const useCart = () => useContext(productsContext).cart;

export const ProductsContext = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    getProducts()
      .then((res) => {
        dispatch(setProducts(res));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  useEffect(
    () => async () => {
      getCartFromLocalStorage()
        .then((res) => {
          dispatch(setCart(res));
        })
        .catch((err) => console.log(err));
    },
    [dispatch]
  );

  return (
    <productsContext.Provider value={state}>
      {props.children}
    </productsContext.Provider>
  );
};
