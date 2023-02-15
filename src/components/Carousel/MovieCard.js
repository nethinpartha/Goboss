import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Progress from "../../frontend-library/atoms/linerprogress";
import useAuthStatus from "../../hooks/useAuthStatus";
import CalculateProgress from "../../helpers/progressbar";
// import HoverScreen from "./HoverScreen/hoverscreen";

const imageUrl = "https://image.tmdb.org/t/p/";
const size = "w500";

const HoverComponent = React.lazy(() => import("./HoverScreen/hoverscreen"));

const MovieCard = ({
  movie,
  style,
  progressBar = false,
  displayTextOnCard = false,
  displayHoverState = false,
  redirecturl,
  permalink = "film-1",
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSignedIn] = useAuthStatus();
  let duration;
  const setPosition = (item) => {
    var x = document.getElementById(`1${item.id}`);
    var divItem = document.getElementById(`2${item.id}`);
    var count = 0;

    if (divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + count * 800 + "px";
    }
    return divItem.style;
  };
  let url = movie.imageUrl
    ? `${movie.imageUrl}`
    : `${imageUrl}${size}${movie.backdrop_path}`;
  let { watchHistory, runtime } = movie;
  if (watchHistory && watchHistory.duration) {
    duration = CalculateProgress(watchHistory.duration, runtime);
  }
  return (
    <div>
      <div
        className="movie-card"
        style={{
          backgroundImage: `linear-gradient(0deg, #000000 0%, #00000024 100%), 
          url(${url})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "50% 50%",
          backgroundColor: "#131722",
          border: "0",
          cursor: "pointer",
        }}
        onClick={() => {
          history.push(
            movie && movie.permalink ? movie.permalink : `content/film-1`
          );
          // return window.location.pathname = `${redirecturl}`
        }}
      >
        {/* <div className="play-icon">
        <img src={playbtn} alt="play button" />
      </div> */}
        <div
          className="movie-card-container"
          id={`1${movie.id}`}
          onMouseEnter={() => {
            if (displayHoverState) {
              setPosition(movie);
            }
          }}
        >
          <div className="movie-card-text">
            {displayTextOnCard ? (
              <>
                <div className="movie-card-info">
                  <div className="movie-card-year">
                    {movie.release_date
                      ? movie.release_date.split("-")[0]
                      : null}
                  </div>
                </div>
                <div className="movie-card-title">
                  {movie.title && movie.title.length > 20
                    ? movie.title.substring(0, 10) + ".."
                    : movie.title}
                </div>
              </>
            ) : null}
            {/* <div className="movie-card-description">{movie.overview ? movie.overview.substring(0, TRUNCATE_LENGTH) + '...' : 'Additional text goes here ...'}</div> */}
          </div>
        </div>
        {displayHoverState && (
          <div className="displayhoverScreen" id={`2${movie.id}`}>
            <HoverComponent
              item={movie}
              api_key={""}
              media_type={""}
              backgroundImage={`${imageUrl}${size}${movie.backdrop_path}`}
            />
          </div>
        )}
      </div>
      {duration && duration > 0 && isSignedIn && <Progress value={duration} />}
      {!displayTextOnCard ? (
        <div className="text-below">
          {
            <div className="title">
              {movie.title && movie.title.length > 20
                ? movie.title.substring(0, 10) + ".."
                : movie.title}
            </div>
          }
          <div className="year">
            {movie.release_date ? movie.release_date : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { MovieCard };
