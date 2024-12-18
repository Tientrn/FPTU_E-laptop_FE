import React from "react";
import Header from "./header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "./carousel/Carousel";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Laptop from "./laptop/Laptops";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Navbar />
      <Laptop />
      <Footer />
    </div>
  );
}

export default App;
