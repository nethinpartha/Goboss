import React from "react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { Global, css } from "@emotion/react";

export const ListMovieGlobalStyle = () => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(themes);
  return (
    <>
      <Global
        styles={css`
          .${themeName}-my-list-Page .movie-list-container {
            min-height: 80vh;
          }
        `}
      />
    </>
  );
};
