import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

// Importa i file JSON per ciascuna categoria
import fantasyBooks from "./assets/fantasy.json";
import historyBooks from "./assets//history.json";
import horrorBooks from "./assets//horror.json";
import romanceBooks from "./assets//romance.json";
import scifiBooks from "./assets//scifi.json";

const AllTheBooks = () => {
  const [books, setBooks] = useState({
    fantasy: [],
    history: [],
    horror: [],
    romance: [],
    scifi: [],
  });

  useEffect(() => {
    setBooks({
      fantasy: fantasyBooks,
      history: historyBooks,
      horror: horrorBooks,
      romance: romanceBooks,
      scifi: scifiBooks,
    });
  }, []);

  const renderBooks = (booksArray) => {
    return booksArray.map((book) => (
      <Col key={book.asin} md={4} className='p-4 bg-dark text-light'>
        <Card>
          <Card.Img variant='top' src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <strong>Price: </strong>${book.price}
            </Card.Text>
            <Card.Text>
              <strong>Category: </strong>
              {book.category}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      <h2 className='text-center my-4'>All The Books</h2>

      {/* Sezione Fantasy */}
      <h3 className='my-3'>Fantasy</h3>
      <Row>{renderBooks(books.fantasy)}</Row>

      {/* Sezione History */}
      <h3 className='my-3'>History</h3>
      <Row>{renderBooks(books.history)}</Row>

      {/* Sezione Horror */}
      <h3 className='my-3'>Horror</h3>
      <Row>{renderBooks(books.horror)}</Row>

      {/* Sezione Romance */}
      <h3 className='my-3'>Romance</h3>
      <Row>{renderBooks(books.romance)}</Row>

      {/* Sezione Sci-Fi */}
      <h3 className='my-3'>Sci-Fi</h3>
      <Row>{renderBooks(books.scifi)}</Row>
    </Container>
  );
};

export default AllTheBooks;
