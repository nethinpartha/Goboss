import React from "react";
import { pathOr } from "ramda";
import { useHistory } from "react-router-dom";
import Progress from "../../frontend-library/atoms/linerprogress";
import HoverScreen from "./HoverScreen/hoverscreen";
import { CardTextBeneath } from "./CarousalFragments/BelowCardContent/cardcontent";
import { useMediaQuery } from "../../components/Header/viewportHook";
import { Container, Card } from "react-bootstrap";
import {
  moviecard,
  CarousalStyle,
} from "../../styles/layouts/component/styledcomponent/movicardstyle";
import { CardContentOnCard } from "./CarousalFragments/OnCardCardContent/oncardcontent";
// import { analyticsService } from "../../services/analyticsapi.service";
import "../../styles/layouts/component/scss/moviecardstyle.scss";
import useAuthStatus from "../../hooks/useAuthStatus";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import CalculateProgress from "../../helpers/progressbar";

const imageUrl = "https://image.tmdb.org/t/p/";
const size = "w500";

const MovieCard = ({
  movie,
  style,
  progressBar = false,
  displayTextOnCard = false,
  displayHoverState = false,
  redirecturl,
  smallsize,
  displayCard,
  index,
  permalink = "",
  handleOnCardClick,
  classnameparam,
}) => {
  const history = useHistory();
  const [isSignedIn] = useAuthStatus();
  let duration;
  const breakpoint = {
    sm: useMediaQuery("(max-width: 576px)"),
    md: useMediaQuery("(max-width: 768px)"),
    lg: useMediaQuery("(min-width:1200px"),
  };
  const { colors } = __parseThemeSelector();
  const { bgColor } = colors;
  const sm = pathOr("", ["sm"])(breakpoint);
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
  let profileUrl = movie.imageUrl
    ? `${movie.imageUrl}`
    : `${imageUrl}${size}${movie.backdrop_path}`;
  let { isUserLiked, isUserAddedToList, watchHistory, runtime } = movie;
  if (watchHistory && watchHistory.duration) {
    duration = CalculateProgress(watchHistory.duration, runtime);
  }
  return (
    <>
      <CarousalStyle />
      <Container
        style={moviecard.container(sm)}
        className={"cardhover"}
        onClick={() =>
          handleOnCardClick({
            id: movie.id,
            permalink: `${
              movie && movie.permalink ? movie.permalink : permalink
            }`,
          })
        }
      >
        <Card style={{ border: "none", backgroundColor: bgColor }}>
          <Card.Body
            style={moviecard.background(profileUrl)}
            id={`1${movie.id}`}
            onMouseEnter={() => {
              if (displayHoverState) {
                setPosition(movie);
              }
            }}
            className="card-setup"
          ></Card.Body>
          {displayHoverState && (
            <div
              className="displayhoverScreen"
              style={{ height: "2rem" }}
              id={`2${movie.id}`}
            >
              <HoverScreen
                item={movie}
                api_key={""}
                media_type={""}
                backgroundImage={`${profileUrl}`}
                smallsize={smallsize}
                displayCard={displayCard}
                isUserAddedToList={isUserAddedToList}
                isUserLiked={isUserLiked}
                index={index}
              />
            </div>
          )}
          {displayTextOnCard && <CardContentOnCard movie={movie} sm={sm} />}
        </Card>
        {duration && duration > 0 && isSignedIn && (
          <Progress value={duration} />
        )}
        {!displayTextOnCard && <CardTextBeneath movie={movie} sm={sm} />}
      </Container>
    </>
  );
};

export { MovieCard };
