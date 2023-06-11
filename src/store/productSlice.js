import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    getProducts: (state, action) => {
      state = action.payload;
    },
  },
});

export const {getProducts} = productSlice.actions;
export default productSlice.reducer;