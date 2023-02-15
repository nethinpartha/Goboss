import React from "react";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";
import { ShouldShowLogo } from "../../utils/headerlogoshow.config";
import { __isThemeOfType } from "../../utils/tenant";

export const NavBarStyle = (bgColor = "") => {
  return {
    // background: `${__isThemeOfType() ? "transparent" : bgColor ? bgColor : "transparent"}`,
  };
};

export const HeaderGlobalStyle = ({ breakpoint }) => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(themes);
  const btnColor = pathOr("", ["colors", "primaryBtnColor"])(themes);
  const {
    type = "solid",
    color = {
      degree: "",
      start: "",
      end: "",
      value:""
    },
  } = btnColor;
  let showHeaderLogo = ShouldShowLogo();
  return (
    <>
      <Global
        styles={css`
          .${themeName}-logo-image {
            display: ${!showHeaderLogo ? "none" : ""};
            width: ${showHeaderLogo && __isThemeOfType() ? "40%" : "100%"};
            max-width: 50%;
          }

          .authuser-btn-style,
          .authuser-btn-style:active,
          .authuser-btn-style:focus,
          .authuser-btn-style:hover {
            background: ${type === "linearGradient"
              ? `${btnColor?.color?.value ? btnColor?.color?.value : '' }`
              : `${btnColor?.color?.value ? btnColor?.color?.value : ''}`};
            color: #ffffff;
            background-color: ;
            border: none;
            text-transform: uppercase;
            font-size: 11px;
            padding: 0.8rem 1rem;
          }

          .${themeName}-logo-image {
            display: ${!showHeaderLogo ? "none" : ""};
            width: ${showHeaderLogo && __isThemeOfType() ? "45px" : "100%"};
            max-width: 50%;
          }

          .header-userauth-btn-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px;
            margin: 0px -2px;
          }

          // mobile devices
          @media screen and (max-width: 766px) {
            .${themeName}-Home-Page .tray-with-filter {
              // padding: 0 0.15rem;
              margin-bottom: 3%;
            }

            .${themeName}-billing-details-Page .headercomp {
              padding: 2% 6%;
            }

            .authuser-btn-style,
            .authuser-btn-style:active,
            .authuser-btn-style:focus,
            .authuser-btn-style:hover {
              font-size: 8px;
              padding: 0.6rem 0.2rem;
            }
            .header-userauth-btn-wrapper {
              padding: 0px;
            }
          }
          @media screen and (max-width: 768px) {
            .authuser-btn-style,
            .authuser-btn-style:active,
            .authuser-btn-style:focus,
            .authuser-btn-style:hover {
              padding: 0.8rem 0.25rem;
            }
          }
        `}
      />
    </>
  );
};
