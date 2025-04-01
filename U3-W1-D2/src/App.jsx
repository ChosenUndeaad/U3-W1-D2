import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import MyNav from "./Navbar";
import MyFooter from "./Footer";
import WelcomeAlert from "./Welcome";

const App = () => {
  return (
    <>
      <MyNav />
      <div className='container d-flex justify-content-center mt-3'>
        <h1>Epibook</h1>
      </div>
      <MyFooter />
      <WelcomeAlert />
    </>
  );
};

export default App;
