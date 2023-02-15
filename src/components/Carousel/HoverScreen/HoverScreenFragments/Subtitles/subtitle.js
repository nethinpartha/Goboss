import React from "react";
import subtitles from "../../assets/subtitles.svg";
import Fourkhd from "../../assets/Fourkhd.svg";
import { Row, Image } from "react-bootstrap";
import { subtitlestyle } from "./subtitlestyle.js";

export default function Subtitle({ smallsize }) {
  return (
    <>
      <Row className={"float-right"} style={subtitlestyle.wrapper()}>
        <Image
          src={subtitles}
          style={{
            ...subtitlestyle.size(smallsize),
            ...subtitlestyle.leftitem(),
          }}
          alt={"subtitle"}
        />
        <Image
          src={Fourkhd}
          style={{
            ...subtitlestyle.size(smallsize),
            ...subtitlestyle.rightitem(),
          }}
          alt={"4 K streaming"}
        />
      </Row>
    </>
  );
}
