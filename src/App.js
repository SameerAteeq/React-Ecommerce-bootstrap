import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext, useThemeHook } from "./GlobalComponent/ThemeProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllProducts from "./pages/AllProducts";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
function App() {
  const { theme } = useContext(ThemeContext);
  // const [theme] = useThemeHook();
  return (
    <BrowserRouter>
      <Toaster />
      <main
        className={theme ? "bg-black" : "bg-light-2"}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:cardId" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
