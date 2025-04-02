import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";

import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Container>
      <Row className='justify-content-center'>
        {books.slice(0, 6).map((book) => (
          <Col className='m-2' key={book.asin} xs={12} sm={6} md={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
