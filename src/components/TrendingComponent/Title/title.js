import React from "react";
import { Card } from "react-bootstrap";
export default function Title({ title = "Trending Movies", breakpoint }) {
  return (
    <Card
      style={{
        background: "transparent",
        marginBottom: "0.5rem",
        padding: "0",
        border: "none",
      }}
    >
      <Card.Body className="trending-movies-title-text">{title}</Card.Body>
    </Card>
  );
}
