import React from "react";
import { useNavigate } from "react-router-dom";

const CardProducts = ({ product }) => {
      const navigate = useNavigate();

      const handleClick = () => {
            navigate(`/product/${product.id}`);
      };
      return (
            <div className="card_product" onClick={handleClick}>
                  <div className="card_product_img">
                        <img src={product?.productImgs[0]} alt={product?.productImgs[0]} />
                  </div>
                  <hr />
                  <h3>{product?.title} </h3>
                  <div className="card_product_footer">
                        <div className="product_footer_text">
                              <h4>Price:</h4>
                              <span>{product.price}</span>
                        </div>
                        <i className="bx bxs-cart product_card"></i>
                  </div>
            </div>
      );
};

export default CardProducts;
