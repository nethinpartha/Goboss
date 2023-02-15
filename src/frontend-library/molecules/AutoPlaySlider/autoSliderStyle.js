import React from "react";
import { Global, css } from "@emotion/react";
import { __parseThemeSelector } from '../../../selectors/themestyleselector';

export const SlickSliderStyle = () => {
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor } = colors;
  return (
    <>
      <Global
        styles={css`
        .slick-dots li button:before {
          font-family: "slick", sans-serif;
          font-size: 14px;
          line-height: 23px;
          position: absolute;
          top: 0;
          left: 1px;
          width: 17px;
          height: 20px;
          content: "•";
          text-align: center;
          opacity: 1;
          border-radius: 1px solid ${primaryBtnColor};
          color: white;
          -webkit-font-smoothing: antialiased;
      }
      
      .slick-dots {
          bottom: 0px !important;
          padding-bottom: 10px;
      }
      
      .slick-dots li {
          background: ${primaryBtnColor};
          border-radius: 50%;
      }
      
      .slick-dots li.slick-active button:before {
          color: ${primaryBtnColor};
          opacity: 1;
          border-radius: 50%;
      }
        `}
      />
    </>
  );
};
