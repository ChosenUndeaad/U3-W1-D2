import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleBook = ({ book }) => {
  return (
    <Card
      style={{ width: "18rem", margin: "10px" }}
      className='p-4 bg-dark text-light h-100'
    >
      <Card.Img variant='top' src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Button variant='primary'>More Info</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
