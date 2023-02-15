import React from "react";
import { Col, Row } from "react-bootstrap";
import { MovieCardGlobalStyle } from "../../../../styles/layouts/component/styledcomponent/oncardcontentstyle";
export const CardContentOnCard = ({ movie, sm }) => {
  return (
    <>
      <MovieCardGlobalStyle />
      <Row className="cardcontent-container">
        {/* <Col md={12} className="movie-data">
          {movie.release_date ? movie.release_date : null}
        </Col> */}
        {movie && movie.language && <Col md={12} className="movie-data language">
          {movie.language ? movie.language : null}
        </Col>}
        {movie && movie.genres && <Col md={12} className="movie-data">
          {movie.genres ? movie.genres : null}
        </Col>}
        <Col md={12} className="oncardtitle">
          {movie.title && movie.title.length > 20
            ? movie.title.substring(0, 10) + ".."
            : movie.title}
        </Col>
      </Row>
    </>
  );
};
