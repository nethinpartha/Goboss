import React from "react";
import { Image } from "react-bootstrap";

export default function ImageContainer() {
  return (
    <>
      <Image
        className={"float-right"}
        src="https://via.placeholder.com/150/"
        alt={"image poster"}
      />
    </>
  );
}
