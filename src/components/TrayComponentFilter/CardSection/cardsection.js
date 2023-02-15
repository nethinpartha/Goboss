import React from "react";
import Home from "../../Carousel/Home";
import useWindowSize from "../../../helpers/viewport";
import { pathOr } from "ramda";
export default function CardSection({
  trending,
  displayCard,
  redirecturl,
  handleOnCardClick,
}) {
  const size = useWindowSize();
  const getWidth = pathOr(768, ["width"])(size);
  return (
    <Home
      movies={trending}
      displayCard={
        getWidth < 576 ? 2 : getWidth <= 768 ? 4 : getWidth <= 1250 ? 4 : 5
      }
      redirecturl={redirecturl}
      displayTextOnCard={true}
      displayHoverState={true}
      // smallsize={true}
      handleOnCardClick={handleOnCardClick}
    />
  );
}
