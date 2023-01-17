import axios from "axios";
import React from "react";

const CardCart = ({ product, setDeleteItem }) => {
      const deleteProduct = () => {
            const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
            const config = {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
            };

            axios.delete(URL, config)
                  .then((res) => setDeleteItem(res.data))
                  .catch((e) => console.log(e));
      };
      return (
            <div className="cart_item">
                  <div className="cart_header">
                        <div className="cart_item_title">
                              <span>{product?.brand}</span>
                              <h3>{product?.title}</h3>
                        </div>
                        <button className="bx bx-trash" onClick={deleteProduct}></button>
                  </div>
                  <div className="cart_footer">{product?.price} $</div>
            </div>
      );
};

export default CardCart;
