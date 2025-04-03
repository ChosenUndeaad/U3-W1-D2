import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMmI3NzM4MzRiZjAwMTUwMDA3MDMiLCJpYXQiOjE3NDM2ODI3NDUsImV4cCI6MTc0NDg5MjM0NX0.bKaG8cYPCUjxSEL7IaqLAeRt_iNSmPrmcXibiwO9xWo",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei commenti");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((error) => console.error("Errore:", error));
  }

  render() {
    return (
      <Row>
        <Col>
          <h3>Recensioni</h3>
          <CommentList />
        </Col>
      </Row>
    );
  }
}

export default CommentArea;
