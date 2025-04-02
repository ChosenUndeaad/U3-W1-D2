import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import MyNav from "./Navbar";
import MyFooter from "./Footer";
import WelcomeAlert from "./Welcome";
//import AllTheBooks from "./AllTheBooks";
import BookList from "./BookList";
import fantasyBooks from "./assets/fantasy.json";
import historyBooks from "./assets//history.json";
import horrorBooks from "./assets//horror.json";
import romanceBooks from "./assets//romance.json";
import scifiBooks from "./assets//scifi.json";

const App = () => {
  return (
    <>
      <MyNav />
      <div className='container d-flex justify-content-center mt-3'>
        <h1>Epibook</h1>
      </div>
      <MyFooter />
      <WelcomeAlert />
      <div>
        <h1 className='text-center mb-4'>Fantasy Books</h1>
        <BookList books={fantasyBooks} />

        <h1 className='text-center mb-4'>History Books</h1>
        <BookList books={historyBooks} />

        <h1 className='text-center mb-4'>History Books</h1>
        <BookList books={horrorBooks} />

        <h1 className='text-center mb-4'>History Books</h1>
        <BookList books={romanceBooks} />

        <h1 className='text-center mb-4'>History Books</h1>
        <BookList books={scifiBooks} />
      </div>
    </>
  );
};

export default App;
