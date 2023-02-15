import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import GlobalStyleLayout from "../../../global-styles/globalStyle";

const ContentDetailsPageLayout = () => {
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <GlobalStyleLayout />
      <Global
        styles={css`
          body {
            .contentpage-background {
              height: 164vh !important;
              .headerShadow {
                background: transparent
                  linear-gradient(180deg, #00000096 0%, #0000001a 100%) 0% 0%
                  no-repeat padding-box;
                position: relative;
              }
              .upgrade {
                background: #e1540f !important;
              }
            }
          }
        `}
      />
    </>
  );
};

export default ContentDetailsPageLayout;
