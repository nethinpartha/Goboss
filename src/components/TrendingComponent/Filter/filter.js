import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

import { filterTypeTxtStyle } from "./filter-style";
import { __parseThemeSelector } from '../../../selectors/themestyleselector';
export default function Filter({
  types = [],
  active,
  filtertype,
  handleFilterClick,
  breakpoint,
}) {
  const [selectedGenere, seSelectedGenere] = useState("Drama");
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;
  return (
    <Card className="mx-auto border-0">
      <Card.Body className="trendingnowfilterbody">
        <Row className="mx-auto mt-3">
          {filtertype &&
            filtertype.map((filterby, key) => (
              <Col
                style={filterTypeTxtStyle.text(selectedGenere === filterby)}
                key={key}
                className={`${filterby} ${key} filterby ${selectedGenere === filterby ? "gradient-text" : ""}`}
                onClick={() => {
                  handleFilterClick(filterby);
                  seSelectedGenere(`${filterby}`);
                }}
              >
                {filterby}
              </Col>
            ))}
        </Row>
      </Card.Body>
    </Card>
  );
}
