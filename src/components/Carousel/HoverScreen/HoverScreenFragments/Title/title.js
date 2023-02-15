import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import play from "../../assets/play.svg";
import like from "../../assets/like.svg";
import plus from "../../assets/plus.svg";
import { TitleStyle } from "./titlestyle";
// import { analyticsService } from "../../../../../services/analyticsapi.service";
import { thumbsupfilled, addedtolist } from '../../../../../helpers/likeAddTolist';

export default function Title({
  smallsize,
  contentid,
  isUserAddedToList,
  isUserLiked,
  handleLikeClick
}) {
  return (
    <Card.Title>
      <Row>
        <Col md={6} style={TitleStyle.column(smallsize)}>
          <span
            onClick={() => { }
            }
          >
            <Image
              src={play}
              alt="play"
              style={TitleStyle.image(smallsize)}
              className={"huecolor"}
            />
          </span>

            <span style={TitleStyle.span(smallsize)}>play</span>
        </Col>
        <Col md={6} style={TitleStyle.textalign(smallsize)}>
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleLikeClick(contentid, "addtolist", 'silent')
            }}
          >
            <Image
              src={isUserAddedToList ? addedtolist : plus}
              alt="add to list"
              style={TitleStyle.rightImage(smallsize)}
              className={"huecolor"}
            />
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleLikeClick(contentid, "like", 'silent');
            }}
          // analyticsService.contentalaytics("content", "liked", contentid)
          >
            <Image
              src={isUserLiked ? thumbsupfilled : like}
              alt="like"
              style={TitleStyle.leftImage(smallsize)}
              className={"huecolor"}
            />
          </span>
        </Col>
      </Row>
    </Card.Title >
  );
}
