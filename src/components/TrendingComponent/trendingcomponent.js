import React from "react";
import Title from "./Title/title";
import Filter from "./Filter/filter";
import MovieCard from "./MovieCards/movie-card";
import { Container, Row, Col } from "react-bootstrap";
import { TrendingNowStyle } from "./trendingnowlayout";

export default function TrendingNowTray({
  title = "Trending Now",
  trending = [],
  breakpoint,
  history,
  filtertype,
  handleFilterClick,
  handleOnCardClick,
  primaryTxtColor
}) {
  if (trending && trending.length <= 0) {
    return null;
  }
  return (
    <>
      <TrendingNowStyle />
      <Container className="trendingnowcontainer nopadding" fluid>
        <Row className="nopadding">
          <Col sm={12} md={6} className="nopadding">
            <Title breakpoint={breakpoint} title={title} />
          </Col>
          {/* <Col sm={12} md={6} className="trendingnowcol nopadding">
            <Filter
              breakpoint={breakpoint}
              filtertype={filtertype}
              handleFilterClick={handleFilterClick}
            />
          </Col> */}
          <MovieCard
            breakpoint={breakpoint}
            trending={trending}
            history={history}
            handleOnCardClick={handleOnCardClick}
          />
        </Row>
      </Container>
    </>
  );
}
