import React from "react";
import { Card, Row } from "react-bootstrap";

export const CardTextBeneath = ({ movie }) => {
  return (
    <>
      <Card style={{ border: "none" }}>
        <Card.Body className="textbeneath">
          <Row
            style={{ fontWeight: "600", fontSize: "10px", color: "#949CB0" }}
          >
            {movie.language ? movie.language : null}
          </Row>
          <Row
            style={{ fontWeight: "600", fontSize: "10px", color: "#949CB0" }}
          >
            {movie.genres ? movie.genres : null}
          </Row>
          <Row className="textsize">
            {movie.title && movie.title.length > 20
              ? movie.title.substring(0, 10) + ".."
              : movie.title}
          </Row>
          {movie && movie.role && <Row
            style={{ fontWeight: "600", fontSize: "10px", color: "#949CB0" }}
          >
            {movie.role ? movie.role : null}
          </Row>}
        </Card.Body>
      </Card>
    </>
  );
};
