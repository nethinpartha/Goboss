import React from "react";
import { Row, Col } from "react-bootstrap";
import { descriptionstyle } from "./descriptionstyle";
import "../style.scss";

export default function Description({
  smallsize,
  title,
  duration,
  yearOfRelease,
  item,
}) {
  return (
    <>
      <Row style={{ padding: "0", margin: "0" }}>
        {title ? title : "Movie Title"}
      </Row>
      {
        <>
          <Row
            className="textFlow"
            style={descriptionstyle.description(smallsize)}
          >
            {item && item.description ? item.description : " - "}
          </Row>
          <Row style={descriptionstyle.subdescription(smallsize)}>
            <Col style={{ paddingLeft: `${smallsize ? "0px" : ""}` }}>
              {duration ? duration : "2h20min"}
            </Col>
            <Col style={{ paddingRight: `${smallsize ? "0px" : ""}` }}>
              {yearOfRelease ? yearOfRelease : "2020"}
            </Col>
            <Col style={{ paddingRight: `${smallsize ? "0px" : ""}` }}>
              Certificate: {item && item.certificate ? item.certificate : " - "}
            </Col>
          </Row>
        </>
      }
    </>
  );
}
