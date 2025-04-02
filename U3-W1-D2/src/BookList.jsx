import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container>
        <Row className='justify-content-center'>
          {this.props.books.slice(0, 6).map((book) => (
            <Col className='m-2' key={book.asin} xs={12} sm={6} md={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
