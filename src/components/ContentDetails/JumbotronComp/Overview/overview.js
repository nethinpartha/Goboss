import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { CardStyle } from "./overviewstyle";
import { useMediaQuery } from "../../../Header/viewportHook";

export default function Overview({
  overview = "",
  director,
  genres,
  languages,
}) {
  const sm = useMediaQuery("(max-width: 456px)");
  const overviewtxt = overview;
  const substrgoverview =
    overviewtxt && overviewtxt.length > 10
      ? overviewtxt.substring(0, 100) + "..."
      : overviewtxt;
  return (
    <>
      <Card className="card">
        <Card.Body className="card">
          <Container>
            <Row
              // style={{ ...CardStyle.container() }}
              className="jumbotron-overview"
            >
              {sm ? substrgoverview : overviewtxt}
            </Row>
            {director && director?.length > 0 && (
              <Row style={CardStyle.Details()}>
                <Col className="jumbotron-overview-card-title" md={2}>
                  Director
                </Col>
                <Col md={10} className="jumbotron-overview-color">
                  {director}
                </Col>
              </Row>
            )}
            {genres && (
              <Row style={CardStyle.Details()}>
                <Col className="jumbotron-overview-card-title" md={1}>
                  Genres
                </Col>
                <Col md={11} className="jumbotron-overview-card-type">
                  {genres.map(
                    (genres, index) =>
                      genres && (
                        <span key={index} className="gradient-text">
                          {genres.title} &nbsp;
                        </span>
                      )
                  )}
                </Col>
              </Row>
            )}
            {languages && (
              <Row style={CardStyle.Details()}>
                <Col className="jumbotron-overview-card-title" md={1}>
                  Language
                </Col>
                <Col md={11} className="jumbotron-overview-card-type">
                  {languages.map(
                    (language, index) =>
                      language && (
                        <span key={index} className="gradient-text">
                          {language.title} &nbsp;
                        </span>
                      )
                  )}
                </Col>
              </Row>
            )}
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
