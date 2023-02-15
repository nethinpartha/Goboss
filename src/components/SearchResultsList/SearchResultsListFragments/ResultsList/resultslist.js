import React from "react";
import { MovieCard } from "../../../searchBar/MovieCard";

import { CarousalStyle } from "../../../../styles/layouts/component/styledcomponent/movicardstyle";
import { SearchContentSelector } from "../../../../selectors/searchresultsselector";
import "../../../../styles/layouts/component/scss/moviecardstyle.scss";

export const ResultsList = ({ content = [] }) => {
  const results = content.length > 0 ? content : SearchContentSelector();

  if (!results || !results.length) {
    return (
      <div className="movie-list-container">
        <h1>No Result found. Please try some other keyword.</h1>
      </div>
    );
  }
  return (
    <>
      <CarousalStyle />
      <ol className="movie-list-grid">
        {results &&
          results.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} displayTextOnCard={false} />
            </li>
          ))}
      </ol>
    </>
  );
};
