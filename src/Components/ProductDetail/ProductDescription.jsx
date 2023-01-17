import axios from "axios";
import React, { useState } from "react";

const ProductDescription = ({ product }) => {
      const [quantity, setQuantity] = useState(1);

      const handleAdd = () => {
            setQuantity(quantity + 1);
      };
      const handleLess = () => {
            if (quantity - 1 >= 1) {
                  setQuantity(quantity - 1);
            }
      };
      const addCart = () => {
            const item = {
                  id: product.id,
                  quantity: quantity,
            };
            const config = {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
            };
            const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
            axios.post(URL, item, config)
                  .then((res) => console.log(res.data))
                  .catch((e) => console.log(e));
      };
      return (
            <div className="product_description">
                  <h2>{product?.title}</h2>
                  <p>{product?.description}</p>
                  <div className="detail_footer">
                        <div className="detail_footer_body">
                              <div className="detail_item">
                                    <h3>Price</h3>
                                    <span>{product?.price}</span>
                              </div>
                              <div className="detail_item">
                                    <h3>Quantity</h3>
                                    <div className="row_btn">
                                          <button onClick={handleLess} className="btn_detail">
                                                -
                                          </button>
                                          <span>{quantity}</span>
                                          <button onClick={handleAdd} className="btn_detail">
                                                +
                                          </button>
                                    </div>
                              </div>
                        </div>
                        <button className="btn_add_cart" onClick={addCart}>
                              Add to Card
                        </button>
                  </div>
            </div>
      );
};

export default ProductDescription;
