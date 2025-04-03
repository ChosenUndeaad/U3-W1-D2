import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

const CommentList = ({ commentsToShow }) => (
  <ListGroup style={{ color: "black" }} className='mt-2'>
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
