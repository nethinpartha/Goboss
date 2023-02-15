import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import GlobalStyleLayout from "../../../global-styles/globalStyle.js";

const SearchResultsPageLayout = () => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const tenantname = pathOr("default", ["themeName"])(themes);
  return (
    <>
      <GlobalStyleLayout />
      <Global
        styles={css`
          body {
            height: initial !important;

            .${tenantname}-Search-Results-Page
              .movie-list-container
              .movie-list-grid
              .movie-card {
              width: 148px;
              height: 196px;
            }
            .${tenantname}-Search-Results-Page
              .movie-list-container
              .movie-list-grid
              li {
              width: 16%;
            }
            .movie-card-text {
              bottom: auto;
            }
          }

          @media screen and (max-width: 1198px) {
            body{
              .${tenantname}-Search-Results-Page
              .movie-list-container
              .movie-list-grid
              li {
              width: 19%;
              }
            }
          } 

          @media screen and (max-width: 992px) {
            body{
              .${tenantname}-Search-Results-Page
              .movie-list-container
              .movie-list-grid
              li {
              width: 25%;
              }
            }
          }

          @media screen and (max-width: 767px) {
            body{.${tenantname}-Search-Results-Page
            .movie-list-container
            .movie-list-grid
            li {
            width: 33%;
            }
            }
          }

          @media screen and (max-width: 568px) {
            body{.${tenantname}-Search-Results-Page
            .movie-list-container
            .movie-list-grid
            li {
            width: 49%;
          }}
          }
        `}
      />
    </>
  );
};

export default SearchResultsPageLayout;
