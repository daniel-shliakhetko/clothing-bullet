import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      state = action.payload;
    },
    addProductToCart: (state, action) => {
      if(state.some((obj) => obj === action.payload)) return;
      state = state.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state = state.filter((obj) => obj !== action.payload);
    }
  },
});

export const {setCart, addProductToCart, removeProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;