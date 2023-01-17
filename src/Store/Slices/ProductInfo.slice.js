import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
      name: "products",
      initialState: null,
      reducers: {
            setProduct: (state, action) => action.payload,
      },
});

export const { setProduct } = productsSlice.actions;

export default productsSlice.reducer;

export const getProduct = (id) => (dispatch) => {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
      return axios
            .get(URL)
            .then((res) => {
                  dispatch(setProduct(res.data.data.product));
            })
            .catch((e) => console.log(e));
};
