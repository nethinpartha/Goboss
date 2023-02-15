import React from "react";
import Home from "../../Carousel/Home";
import { pathOr } from "ramda";
import useWindowSize from "../../../helpers/viewport";

export default function SliderSection({
  traycontent,
  display,
  breakpoint,
  title,
  handleOnCardClick,
  primaryTxtColor,
  classnameparam,
}) {
  const size = useWindowSize();
  const getWidth = pathOr(768, ["width"])(size);
  return (
    <Home
      displayTextOnCard={true}
      movies={traycontent}
      displayCard={
        getWidth < 576 ? 2 : getWidth <= 768 ? 4 : getWidth <= 1250 ? 4 : 5
      }
      progressBar={false}
      displayHoverState={true}
      redirecturl={"/content"}
      title={title}
      handleOnCardClick={handleOnCardClick}
      primaryTxtColor={primaryTxtColor}
      classnameparam={classnameparam}
    />
  );
}
