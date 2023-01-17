import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCart from "./ProductDetail/CardCart";

const Cart = () => {
      const [cartProducts, setCartProducts] = useState();
      const [deleteItem, setDeleteItem] = useState(false);
      useEffect(() => {
            const config = {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
            };
            const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
            axios.get(URL, config)
                  .then((res) => setCartProducts(res.data.data.cart.products))
                  .catch((e) => console.log(e));
      }, [deleteItem]);

      return (
            <div className="card_products">
                  <h2>Shopping Cart</h2>
                  {/* {cartProducts?.map((item) => {
                        return <CardCart product={item} key={item.id} setDeleteItem={setDeleteItem} />;
                  })} */}
            </div>
      );
};

export default Cart;
