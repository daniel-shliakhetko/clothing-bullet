import React, { createContext, useContext, useEffect } from "react";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
import { getProducts } from "../database/firebase";

const productsContext = createContext();

export const useProducts = () => useContext(productsContext);

export const ProductsContext = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products);

  useEffect(() => {
    getProducts()
      .then((res) => {
        dispatch(setProducts(res));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <productsContext.Provider value={products}>
      {props.children}
    </productsContext.Provider>
  );
};
