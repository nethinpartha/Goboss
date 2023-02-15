import React from "react";
import { Card, Row, Image } from "react-bootstrap";
import { CardStyle } from "./titlestyle";
import fullhd from "../../assets/fullhd.svg";
import subtitles from "../../assets/subtitles.svg";

export default function Title({
  title,
  duration,
  release_date,
  certificate,
  yearOfRelease,
}) {
  return (
    <Card style={CardStyle.card()}>
      <Card.Body style={CardStyle.card()}>
        <Card.Title className="jumbotron-card-title">{title}</Card.Title>
        <Row>
          <div
            style={{
              ...CardStyle.movierunTime(),
            }}
            className="jumbotron-movie-details"
          >
            {duration}
          </div>
          <div
            style={{
              ...CardStyle.movierunTime(),
            }}
            className="jumbotron-movie-details"
          >
            {yearOfRelease ? yearOfRelease : ""}
          </div>
          <div
            style={{
              ...CardStyle.movierunTime(),
            }}
            className="jumbotron-movie-details"
          >
            Certificate:
            {certificate ? ` ` + certificate : " U"}
          </div>
          <div
            style={{
              ...CardStyle.movierunTime(),
            }}
            className="jumbotron-movie-details"
          >
            <Image
              src={subtitles}
              style={{ marginRight: "1rem" }}
              alt="add to subtitles"
            />
            <Image src={fullhd} alt="available in full HD" />
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
}
