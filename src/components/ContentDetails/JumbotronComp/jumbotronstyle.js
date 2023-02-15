import React from "react";
import { Global, css } from "@emotion/react";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";

export const JumbotronStyle = (url) => {
  const gradient = `linear-gradient(90deg, #131722 0%, #131722 0%, #131722 0%, #0A0A0A42 100%)`;
  return {
    background: `linear-gradient(360deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.14) 100%) 0% 0% / 100% 100% no-repeat, url(${url}) rgb(19, 23, 34)`,
    borderRadius: "none",
    padding: "0",
    backgroundSize: "100% 100%",
    border: "0",
    position: "relative",
  };
};

export const ContainerStyle = () => {
  return {
    border: "none",
  };
};

export const JumbotronWrapperStyle = () => {
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor, primaryTxtColor } = colors;
  return (
    <>
      <Global
        styles={css`
          .card {
            background: transparent;
            border-radius: none;
            border: none;
            width: 100%;
          }
          .jumbotron-wrapper {
            min-height: 87vh;
          }
          .jumbotron-icon-wrapper {
            padding: 1px;
            .img-addlist-setup {
              height: 20px;
            }
            .img-like-setup {
              height: 20px;
            }
          }

          .jumbotron-wrapper .btn-primary:focus {
            background-color: #ffffff;
            border: none;
          }

          .active {
            background: none !important;
            a {
              color: #ff8b53 !important;
            }
          }

          .btn-animated {
            font-size: 11px;
          }

          .jumbotron-play {
            transition: all 0.2s ease-in-out;
            background-color: #ffffff;
            margin-right: 1rem;
            border: none;
            padding: 0.5rem 2rem;
          }
          .jumbotron-play:hover {
            transform: scale(1.1);
            background: ${primaryBtnColor};
          }

          .imageCont-btn {
            height: 16px;
            width: 16px;
          }

          .jumbotron-card-title {
            font-size: 38px;
            color: ${primaryTxtColor};
          }

          .jumbotron-movie-details {
            font-size: 18px;
          }

          .jumbotron-overview {
            margin: 1rem 0 1rem 0;
            letter-spacing: 0.49px;
            max-width: 65%;
            color: #ffffff;
          }

          .btnTxtjumbotron-play-btn-txt {
            text-transform: uppercase;
            font-size: 13px;
            color: #000000;
            font-weight: bold;
            padding-left: 6px;
            padding-right: 2px;
          }

          .jumbotron-overview-card-title {
            color: #949cb0;
            font-size: 17x;
            padding-left: 0px;
            border-radius: none;
            border: none;
          }

          .jumbotron-overview-card-type {
            color: #feb896;
            font-size: 17px;
          }

          .jumbotron-overview-color {
            color: #feb896;
          }

          .jumbotron-play-btn-txt {
            color: #000000;
            font-size: 16px;
            text-transform: uppercase;
            font-style: Inter;
            padding-left: 4px;
            font-weight: 800;
          }

          .jumbotron-icon-wrapper {
            background: #6b7182;
            padding: 10px;
            border-radius: 50%;
            margin-right: 1rem;
            position: relative;
            display: flex;
            margin-top: 0.5rem;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
          }

          .jumbotron-icon-wrapper:hover,
          jumbotron-play:hover {
            transform: scale(1.1);
          }

          .btn-animated {
            animation: moveInButton 0.5s ease-out 0.75s;
            animation-fill-mode: backwards;
          }

          @keyframes moveInButton {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translate(0);
            }
          }

          @media screen and (max-width: 1200px) {
            .jumbotron-overview-card-title {
              display: flex;
            }

            .jumbotron-overview-card-type {
              padding-left: 3rem;
            }
          }

          @media screen and (min-width: 1200px) {
            .jumbotron-wrapper {
              .jumbotron-ctr-wrapper {
                margin: 0rem 1rem 1rem;
              }
            }
          }

          @media screen and (min-width: 576px) and (max-width: 1200px) {
            .jumbotron-wrapper {
              .jumbotron-ctr-wrapper {
                margin-left: 1rem;
              }
            }
          }

          @media screen and (max-width: 767px) {
            .jumbotron-overview-card-type {
              font-size: 12px;
              padding-left: 4rem;
              margin-top: -1.1rem;
            }
            .jumbotron-wrapper {
              min-height: 43vh;
            }
            .jumbotron-play {
              padding: 0.15rem 2rem;
            }
            .cd-image-container {
              display: flex;
            }
            .imageCont-btn {
              height: 10px;
            }
            .jumbotron-card-title {
              font-size: 18px;
              color: #ffffff;
              border: none;
            }
            .jumbotron-movie-details {
              font-size: 12px;
            }
            .jumbotron-overview {
              font-size: 12px;
              max-width: 100%;
            }
            .jumbotron-overview-card-title {
              font-size: 12px;
            }

            .jumbotron-overview-color {
              font-size: 12px;
              padding-left: 0;
            }
            .jumbotron-play-btn-txt {
              font-size: 10px;
            }
            .jumbotron-icon-wrapper {
              padding: 1px;
              .img-addlist-setup {
                height: 20px;
                padding: 3px;
              }
              .img-like-setup {
                height: 20px;
                padding: 3px;
              }
            }
            .btn-animated {
              font-size: 8px;
            }
            .btnTxtjumbotron-play-btn-txt {
              font-size: 10px;
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      />
    </>
  );
};
