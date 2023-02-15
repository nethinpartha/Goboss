import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { filterTypeTxtStyle } from "./filter-style";
import { __parseThemeSelector } from '../../../selectors/themestyleselector';

export default function Filter({
  types = [],
  active,
  filtertype,
  handleFilterClick,
}) {
  const [selectedGenere, seSelectedGenere] = useState("Drama");
  return (
    <Card className="mx-auto border-0">
      <Card.Body className="filtercardbody">
        <Row className="mx-auto mt-3">
          {filtertype &&
            filtertype.map((filterby, key) => (
              <Col
                style={filterTypeTxtStyle.text(selectedGenere === filterby.title)}
                key={key}
                className={`${filterby.title} ${key} trayfilterby ${selectedGenere === filterby.title ? "gradient-text" : ""}`}
                onClick={() => {
                  handleFilterClick(filterby.title);
                  seSelectedGenere(`${filterby.title}`);
                }}
              >
                {filterby.title}
              </Col>
            ))}
        </Row>
      </Card.Body>
    </Card>
  );
}
