import React, { useEffect } from 'react';
import ReactStars from "react-stars";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import './MovieDetails.css'; 

const MovieDetails = ({ movies }) => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const movie = movies[id];


  useEffect(() => {
    if (!movie) {
      navigate("/");
    }
  }, [movie, navigate]); 

  
  const handleBackClick = () => {
    navigate("/"); 
  };


  if (!movie) return null;

  return (
    <Container className="movie-details-container" style={{ minHeight: "100vh" }}>
      <Row>
        <Col lg={4} className="movie-poster-col">
          <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
        </Col>
        <Col lg={8}>
          <div className="movie-details-content">
            <h2 className="movie-title">{movie.title}</h2>
            <ReactStars
              count={5}
              value={movie.rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
            <p className="movie-description">{movie.description}</p>
            <div className="trailer-section">
              <h5 className="trailer-title">Watch Trailer:</h5>
              <iframe
                title="movie trailer"
                src={movie.trailer}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="trailer-video"
              ></iframe>
            </div>
            <Button variant="secondary" onClick={handleBackClick} className="back-button">
              Back to Movies
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;


