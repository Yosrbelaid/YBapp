import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row } from "react-bootstrap";

const MovieList = ({ movies }) => (
  <Container>
    <Row>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Row>
  </Container>
);

export default MovieList;
