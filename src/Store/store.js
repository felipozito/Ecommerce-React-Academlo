import { configureStore } from "@reduxjs/toolkit";
import products from "./Slices/product.slice";
import productInfo from "./Slices/ProductInfo.slice";

export default configureStore({
      reducer: {
            products,
            productInfo,
      },
});
