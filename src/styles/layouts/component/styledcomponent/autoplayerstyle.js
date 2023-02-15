import React from "react";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";

export const HeaderGlobalStyle = () => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const btnColor = pathOr('', ['colors', 'primaryBtnColor'])(themes);
  const { type = "solid", color = {
    degree: '',
    start: '',
    end: ''
  }
  } = btnColor;
  return (
    <>
      <Global
        styles={css`
        .latest-movie .upgrades {
          background: ${type === "linearGradient" ? `linear-gradient(${color.degree}deg, ${color.start}, ${color.end})` : '#e1540f'};
          color: #ffffff;
          border: none;
          text-transform: uppercase;
          font-size: 11px;
          padding: 0.4rem 1.2rem;
          border-radius: 5px;
        }
        `}
      />
    </>
  );
};