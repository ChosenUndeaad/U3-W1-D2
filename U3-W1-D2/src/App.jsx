import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import MyNav from "./Components/Navbar";
import MyFooter from "./Components/Footer";
import WelcomeAlert from "./Components/Welcome";
//import AllTheBooks from "./AllTheBooks";
import BookList from "./Components/BookList";
import fantasyBooks from "./assets/fantasy.json";
import historyBooks from "./assets//history.json";
import horrorBooks from "./assets//horror.json";
import romanceBooks from "./assets//romance.json";
import scifiBooks from "./assets//scifi.json";
import "./index.css";

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
        <h1 className='text-center mt-4'>Fantasy Books</h1>
        <BookList books={fantasyBooks} />

        <h1 className='text-center mt-4'>History Books</h1>
        <BookList books={historyBooks} />

        <h1 className='text-center mt-4'>Horror Books</h1>
        <BookList books={horrorBooks} />

        <h1 className='text-center mt-4'>Romance Books</h1>
        <BookList books={romanceBooks} />

        <h1 className='text-center mt-4'>Sci-Fi Books</h1>
        <BookList books={scifiBooks} />
      </div>
    </>
  );
};

export default App;
