import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

export const ListMovieGlobalStyle = () => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(themes);
  return (
    <>
      <Global
        styles={css`
          .${themeName}-Search-Results-Page {
            .movie-list-container {
              margin: 20px;
              .filter-btn {
                background-color: #2f323c;
                border-radius: 5px;
              }
            }
          }
          .movie-list-container h1 {
            padding: 10px;
            font-size: 25px;
            letter-spacing: 0px;
            color: #ffffff;
            margin: 0;
          }
          .filter-btn .img-thumbnail {
            border: none;
            background: transparent 0% 0% no-repeat padding-box;
            border-radius: 5px;
          }
          .filterbtnwrapper {
            padding: 0.5rem;
          }
          .filter-button-conf-image {
            height: 1.8rem;
            margin-right: 0.5rem;
          }
          .filter-button-conf-text {
            font-size: 24px;
          }
          .search-results-search-panel {
            display: flex;
            align-items: flex-end;
          }
          .search-results-search-panel .search-bar-flex {
            background: 0% 0% no-repeat padding-box padding-box
              rgba(245, 245, 245, 0.12);
            padding: 1rem;
            font-size: 24px;
            border-radius: 5px;
            color: #949cb0;
          }

          .search-results-search-panel .search-bar-search-icon {
            height: 2rem;
          }

          @media screen and (max-width: 989px) {
            .search-results-search-panel .search-bar-flex {
              font-size: 18px;
            }
            .filter-button-conf-text {
              font-size: 18px;
            }
          }

          @media screen and (min-width: 768px) and (max-width: 2560px) {
            .movie-title-setup {
              font-size: 32px;
            }
          }
          @media screen and (max-width: 576px) {
            .movie-title-setup {
              font-size: 22px;
            }
            .search-results-search-panel .search-bar-flex {
              padding: 0.6rem;
              font-size: 13px;
              height: 8vh;
              border-radius: 5px;
            }
            .search-results-search-panel .search-bar-search-icon {
              height: 1rem;
              margin-top: 13px;
            }
            .filter-button-conf-image {
              height: 1.8rem;
            }
            .filterbtnwrapper {
              padding: 0.4rem;
            }
            .filter-button-conf-text {
              font-size: 14px;
            }
            .movie-list-container h1 {
              font-size: 20px;
            }
          }
          @media screen and (max-width: 320px) {
            .filter-button-conf-image {
              height: 1.6rem;
            }
          }
        `}
      />
    </>
  );
};
