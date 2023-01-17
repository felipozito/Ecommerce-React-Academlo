import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Components/Cart";

const Navbar = () => {
      const [navActive, setNavActive] = useState(false);
      const [isCartOpen, setIsCartOpen] = useState(false);

      const openCart = () => {
            if (localStorage.getItem("token")) {
                  setIsCartOpen(!isCartOpen);
            } else {
                  //   navigate("/login");
            }
      };
      const nav = useRef();
      const openNavbar = () => {
            setNavActive(!navActive);
      };
      return (
            <div className="navbar">
                  <div className="nav_logo">
                        <NavLink to="/" className="logo">
                              E-Commerce
                        </NavLink>
                  </div>
                  <div className={navActive ? "nav nav_active" : "nav"}>
                        <ul className="nav_list">
                              <li className="nav_item ">
                                    <NavLink to="/login" className={({ isActive }) => (isActive ? " nav_item active_link" : "nav_item")}>
                                          Login
                                    </NavLink>
                              </li>
                              <li className="nav_item ">
                                    <NavLink to="/purchases" className={({ isActive }) => (isActive ? "nav_item active_link" : "nav_item")}>
                                          Purchases
                                    </NavLink>
                              </li>
                              <li className="nav_cart " onClick={openCart}>
                                    <i className="bx bxs-cart"></i>
                              </li>
                        </ul>
                  </div>
                  <div className="nav_icon" onClick={openNavbar}>
                        <i className="bx bx-menu"></i>
                  </div>

                  {isCartOpen ? <Cart /> : ""}
            </div>
      );
};

export default Navbar;
