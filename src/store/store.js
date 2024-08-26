import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import detailsReducer from "./detailsSlice";
import homeReducer from "./homeSlice";

const store = configureStore({
  reducer: {
    list: listReducer,
    details: detailsReducer,
    home: homeReducer,
  },
});

export default store;
