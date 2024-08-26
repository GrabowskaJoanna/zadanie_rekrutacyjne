import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = listSlice.actions;

export default listSlice.reducer;
