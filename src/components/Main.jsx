import React from "react";
import "../App.css";
import Header from "./partials/Header";
import Products from "./partials/Products";

function Main() {
  return (
    <main className="bg-customNormalBlue">
      <Header />
      <Products />
    </main>
  );
}

export default Main;
