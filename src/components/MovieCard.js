import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => (
  <Card style={{ width: '18rem', background: '#2C2C2C', color: '#fff', margin: '1rem' }}>
    <Card.Img variant="top" src={movie.posterURL} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Card.Text>⭐ {movie.rating}</Card.Text>
    </Card.Body>
  </Card>
);

export default MovieCard;
