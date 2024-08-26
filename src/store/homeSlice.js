import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastViewedProduct: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setLastViewedProduct(state, action) {
      state.lastViewedProduct = action.payload;
    },
  },
});

export const { setLastViewedProduct } = homeSlice.actions;

export default homeSlice.reducer;
