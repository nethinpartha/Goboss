import React from "react";
import { pathOr } from "ramda";
import { Card } from "react-bootstrap";
import { CardTitleStyle, CardBodyStyle } from "./title-style.js";

export default function Title({ title = "Movies", breakpoint, primaryTxtColor, bgColor }) {
  const bp = pathOr("", ["sm"])(breakpoint);
  return (
    <Card style={CardBodyStyle(bp)} className="float-left moviescardtitle">
      <Card.Body style={CardTitleStyle(primaryTxtColor, bgColor)} className="movie-title-setup">
        {<span className="gradient-text">{title}</span>}
      </Card.Body>
    </Card>
  );
}
