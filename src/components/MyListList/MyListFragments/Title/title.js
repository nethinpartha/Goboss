import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Title({
  title = "My List",
  handleclearall,
  resultsLength,
  primaryTxtColor
}) {
  return (
    <Card className="mylist-card-body">
      <Card.Body className="mylist-card-title">
        <Container fluid>
          <Row>
            <Col>
              <div
                className="mylist-section-title"
              >
                <span className="gradient-text">
                  {title}
                </span>
              </div>
            </Col>
            {resultsLength > 0 ? (
              <Col style={{ textAlign: "end" }}>
                <div
                  style={{
                    color: "#cccccc",
                    cursor: "pointer",
                  }}
                  className="mylist-section-clear"
                >
                  <span
                    onClick={handleclearall}
                  >Clear All
                  </span>
                </div>
              </Col>
            ) : null}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
