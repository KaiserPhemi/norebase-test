// react libraries
import React from "react";

// styles
import "./app.scss";

// components
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../home/Home";

// main component
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
