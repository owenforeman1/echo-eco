import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Mens from "../components/Mens";
import Womens from "../components/Womens";
import Kids from "../components/Kids";
import Tents from "../components/Tents";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import Account from "../components/Account";
import Cart from "../components/Cart";
import AboutUs from "../components/AboutUs";

const AppRoutes = () => {
  return (
    <Router>
      <div className="content-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/tents" element={<Tents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
