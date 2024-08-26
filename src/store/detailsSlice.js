import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = detailsSlice.actions;

export default detailsSlice.reducer;
