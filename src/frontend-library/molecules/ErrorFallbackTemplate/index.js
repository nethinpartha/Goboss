import React from "react";
import { Card } from "react-bootstrap";

export const FallBacktemplate = ({ resetErrorBoundary }) => {
  return (
    <>
      <Card
        body
        style={{
          margin: "auto",
          marginTop: "8rem",
          float: "none",
          width: "80%",
          top: "10%",
          textAlign: "center",
        }}
      >
        <Card.Title>Whoops, Something went wrong...</Card.Title>
        <Card.Text>Unexpected Error</Card.Text>
        <Card.Text>
          There was an unexpected error. Please reload the page and try again!
        </Card.Text>
      </Card>
    </>
  );
};
