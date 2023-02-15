import React from "react";
import SliderSection from "./SliderSection/slider-section";
import { TrayComponentGlobalStyle } from "./traycomponentstyle";

export default function TrayWithTitle({
  breakpoint,
  title = "",
  traycontent,
  handleOnCardClick,
  primaryTxtColor,
  classnameparam
}) {
  return (
    <>
      <TrayComponentGlobalStyle />
      <div className={`tray-wrapper ${"traycomp"}`}>
        <SliderSection
          traycontent={traycontent}
          breakpoint={breakpoint}
          title={title}
          handleOnCardClick={handleOnCardClick}
          primaryTxtColor={primaryTxtColor}
          classnameparam={classnameparam}
        />
      </div>
    </>
  );
}
