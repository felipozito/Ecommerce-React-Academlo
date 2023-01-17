import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Store/Slices/product.slice";
import CardProducts from "../Components/CardProducts";
// import "../Styles/home.css";
const Home = () => {
      const dispatch = useDispatch();
      const products = useSelector((state) => state.products);

      useEffect(() => {
            dispatch(getAllProducts());
      }, []);

      console.log(products);
      return (
            <div className="home">
                  <h2>HOME</h2>
                  <div className="home_container_Products">
                        {products?.map((item) => {
                              return <CardProducts key={item.id} product={item} />;
                        })}
                  </div>
            </div>
      );
};

export default Home;
