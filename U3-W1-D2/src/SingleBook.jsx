import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "./index.css";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;
    return (
      <Card
        style={{ width: "18rem", margin: "10px" }}
        className={`p-4 bg-dark text-light h-100 ${
          this.state.selected ? "selectedBook" : ""
        }`}
        onClick={() => {
          this.setState({
            selected: !this.state.selected,
          });
        }}
      >
        <Card.Img variant='top' src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button variant='primary'>{book.price} € - Acquista</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
