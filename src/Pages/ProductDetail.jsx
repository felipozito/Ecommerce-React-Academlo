import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductDescription from "../Components/ProductDetail/ProductDescription";
import { getAllProducts } from "../Store/Slices/product.slice";
import { getProduct } from "../Store/Slices/ProductInfo.slice";
import CardProducts from "../Components/CardProducts";
import Gallery from "../Components/ProductDetail/Gallery";
// import "../Styles/productsDetails.css";

const ProductDetail = () => {
      const { id } = useParams();
      const dispatch = useDispatch();
      const [productsFiltered, setProductsFiltered] = useState();
      const products = useSelector((state) => state.products);
      const productInfo = useSelector((state) => state.productInfo);

      useEffect(() => {
            window.scrollTo({
                  top: 0,
                  behavior: "smooth",
            });
            dispatch(getAllProducts());
            dispatch(getProduct(id));
      }, []);

      return (
            <div className="product_detail">
                  <div className="products_detail_content">
                        <Gallery images={productInfo?.productImgs} />
                        <ProductDescription product={productInfo} />
                  </div>
                  <div className="home_container_Products">
                        {productsFiltered?.map((item) => {
                              return <CardProducts key={item.id} product={item} />;
                        })}
                  </div>
            </div>
      );
};

export default ProductDetail;
