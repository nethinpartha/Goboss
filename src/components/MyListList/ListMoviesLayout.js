import React from "react";
import { Global, css } from "@emotion/react";
import { __isThemeOfType } from "../../utils/tenant";
import { __parseThemeSelector } from '../../selectors/themestyleselector';
import GlobalStyleLayout from '../../styles/global-styles/globalStyle';

export const MyListLayout = () => {
  const { colors } = __parseThemeSelector();
  const { bgColor } = colors;
  return (
    <>
      <GlobalStyleLayout />
      <Global
        styles={css`
          body {
            .tentkotta-my-list-Page {
              .movie-list-container {
                margin: 0px 20px 20px 20px;
              }
              .movie-list-container aside nav {
                width: 50%;
              }

              .movie-list-container h1 {
                padding: 10px;
                font-size: 25px;
                letter-spacing: 0px;
                color: #ffffff;
                margin: 0;
              }
            }
            .mylist-card-body {
              border: none;
              border-radius: 0;
              width: 100%;
              margin: 2rem 0;
            }
            .mylist-card-title {
              width: 100%;
              background: ${bgColor};
              color: "white";
              font-size: 32px;
              border: none;
              border-radius: 0;
            }

            .delete-icon-setup {
              background: #f23d3dc2 0% 0% no-repeat padding-box;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor:pointer;
            }

            .delete-icon{
              height: 26px;
              width: 21px;
            }
            .mylist-fade-in {
              background: #222634 0% 0% no-repeat padding-box;
              border-radius: 2px;
              width: 100%;
              margin-bottom: 1rem;
            }
            .mylist-image-container {
              height: 33px;
              width: 33px;
              margin-right: 1%;
            }
            .mylist-section-title {
              font: normal normal normal 35px/38px Inter;
              color: white;

              font-size: 50px;
            }

            .mylist-fade-in {
              animation: fadeIn ease 3s;
              -webkit-animation: fadeIn ease 3s;
              -moz-animation: fadeIn ease 3s;
              -o-animation: fadeIn ease 3s;
              -ms-animation: fadeIn ease 3s;
            }
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-moz-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-webkit-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-o-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-ms-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @media (min-width: 1200px) {
            .container {
              max-width: 850px;
            }
          }

          @media screen and (min-width: 430px) and (max-width: 2000px) {
            .paragraph-content-setup {
              width: 77px;
              height: 83px;
              padding: 1rem;
            }
            .mylist-section-clear {
              font-size: 20px;
              margin-right: 1.4rem;
            }

            body .mylist-section-title {
              font-size: 37px;
              margin-left: -8px;
            }

            .paragraph-content-year {
              font-size: 14px;
            }

            .paragraph-content-title {
              font-size: 21px;
              margin-top: -4px;
              margin-bottom: -3px;
            }
          }

          @media screen and (max-width: 576px) {
            .paragraph-content-setup {
              width: 77px;
              height: ${__isThemeOfType() ? "77%" : "83%"};
              padding: 1rem;
            }
            .mylist-card-title {
              font-size: 32px;
              margin: 0;
              padding: 0;
            }
            
          body .delete-icon {
            height: 20%;
            width: 18px;
          }
            body .mylist-section-title {
              font-size: 23px;
            }

            .paragraph-content-year {
              font-size: 10px;
            }

            .paragraph-content-title {
              font-size: 15px;
              margin-top: -3px;
              margin-left: 3px;
              margin-bottom: -3px;
            }

            .mylist-section-clear {
              font-size: 15px;
              margin-top: 6px;
              margin-right: 2rem;
            }

            .mylist-image-container {
              height: 18px;
              width: 18px;
            }
            .movie-list-container h1 {
              font-size: 20px;
            }
          }
          @media screen and (max-width: 320px) {
            body .mylist-fade-in {
              background: #222634 0% 0% no-repeat padding-box;
              border-radius: 2px;
              width: ${__isThemeOfType() ? "117%" : "100%"};
              margin-bottom: 1rem;
            }
            .delete-icon-setup{  padding-right: 10px;
            
          }
          
          .mylist-section-clear {
            margin-right: ${__isThemeOfType() ? "0rem" : "2rem"};
          }
          
          .paragraph-content-setup {
            padding: 1rem 0 1rem 0;
          }
        `}
      />
    </>
  );
};

export default MyListLayout;
