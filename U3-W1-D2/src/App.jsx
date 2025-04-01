import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import MyNav from "./Navbar";
import MyFooter from "./Footer";

const App = () => {
  return (
    <>
      <MyNav />
      <h1>Benvenuto nel mio sito!</h1>
      <MyFooter />
    </>
  );
};

export default App;
