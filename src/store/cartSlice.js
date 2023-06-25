import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      state = [...action.payload];
      return state;
    },
    addProductToCart: (state, action) => {
      if (state.some((obj) => obj.id === action.payload.id)) return state;
      return void(state.push(action.payload));
    },
    removeProductFromCart: (state, action) => {
      return state.filter((obj) => obj.id !== action.payload.id);
    },
  },
});

const CARTKEY = "CART";

export const saveCartToLocalStorage = async (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(CARTKEY, serialisedState);
    console.log("SAVED", serialisedState);
  } catch (err) {
    console.log(err);
  }
};

export const getCartFromLocalStorage = async () => {
  try {
    const serialisedState = localStorage.getItem(CARTKEY);
    if (serialisedState === null) return null;
    console.log("LOADED", serialisedState);
    return await JSON.parse(serialisedState);
  } catch (err) {
    console.log(err);
  }
};

export const { setCart, addProductToCart, removeProductFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
