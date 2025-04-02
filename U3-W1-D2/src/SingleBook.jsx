import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;

    return (
      <Card
        className='p-4 bg-dark text-light h-100 d-flex flex-column'
        style={{ width: "18rem", margin: "10px" }}
      >
        <Card.Img
          variant='top'
          src={book.img}
          alt={book.title}
          style={{ objectFit: "cover", height: "250px" }}
        />
        <Card.Body className='d-flex flex-column flex-grow-1'>
          <Card.Title>{book.title}</Card.Title>
          <Button variant='primary' className='mt-auto'>
            More Info
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
