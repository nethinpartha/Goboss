import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CardStyle } from "./detailsstyle";

export const DetailsTab = ({ production, writing, crew }) => {
  return (
    <>
      <Container className="details-wrapper">
        <Card.Body>
          <Container>
            <Row style={CardStyle.Details()}>
              <Col md={2}>
                {production.length > 0 ? (
                  <div className="details-card-title">Production</div>
                ) : null}
              </Col>
              <Col md={10}>
                {production && production.length > 0 ? (
                  <div className="details-brand-clor">
                    {production.map((person) => {
                      return `${person}, `;
                    })}
                  </div>
                ) : null}
              </Col>
            </Row>
            <Row style={CardStyle.Details()}>
              <Col md={2}>
                {production.length > 0 ? (
                  <div className="details-card-title">Writing</div>
                ) : null}
              </Col>
              <Col md={10}>
                {writing && writing.length > 0 ? (
                  <div className="details-brand-clor">
                    {writing.map((person) => {
                      return `${person}, `;
                    })}
                  </div>
                ) : null}
              </Col>
            </Row>
            <Row style={CardStyle.Details()}>
              <Col md={2}>
                {crew && crew.length > 0 ? (
                  <div className="details-card-title">crew</div>
                ) : null}
              </Col>
              <Col md={10}>
                {crew && crew.length > 0 ? (
                  <div className="details-brand-clor">
                    {crew.map((person) => {
                      return `${person}, `;
                    })}
                  </div>
                ) : null}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Container>
    </>
  );
};
