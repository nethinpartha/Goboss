import React from "react";
import { Carousel } from "./Carousel";
import { MovieCard } from "./MovieCardBoot";

const Home = ({
  movies,
  title,
  style,
  displayCard,
  progressBar,
  displayTextOnCard,
  displayHoverState,
  redirecturl,
  smallsize = false,
  handleOnCardClick,
  primaryTxtColor,
  classnameparam,
}) => {
  const filterMovies = movies ? movies : "";
  return filterMovies.length > 0 ? (
    <div className="home-container">
      <Carousel
        title={title}
        primaryTxtColor={primaryTxtColor}
        style={style}
        displayCard={displayCard}
        classnameparam={classnameparam}
      >
        {filterMovies &&
          filterMovies.map((movie, index) => (
            <MovieCard
              index={index}
              displayCard={displayCard}
              displayTextOnCard={displayTextOnCard}
              key={movie.id}
              movie={movie}
              progressBar={progressBar}
              displayHoverState={displayHoverState}
              redirecturl={redirecturl}
              smallsize={smallsize}
              handleOnCardClick={handleOnCardClick}
              classnameparam={classnameparam}
            />
          ))}
      </Carousel>
    </div>
  ) : null;
};

export default Home;
