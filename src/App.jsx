import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import "./App.css";
import Navbar from "./Components/Navbar";
function App() {
      return (
            <div className="App">
                  <Navbar />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/login" element={<Login />} />
                        <Route element={<ProtectedRoutes />}>
                              {/* <Route path="/purchases" element={<Purchases />} /> */}
                              {/* <Route path="/cart" element={<Cart />} /> */}
                        </Route>
                        {/* <Route path="/purchases" element={<Purchases />} /> */}
                        {/* <Route path="/signup" element={<SignUp />} />
                  <Route element={<ProtectedRoutes />} />
                  <Route path="/user" element={<UserInfo />} /> */}
                  </Routes>
            </div>
      );
}

export default App;
