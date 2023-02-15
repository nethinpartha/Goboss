import React from "react";
import { Row, Button, Container, Image } from "react-bootstrap";
import play from "../../assets/play.svg";
import like from "../../assets/like.svg";
import plus from "../../assets/plus.svg";
import { CardStyle } from "./buttonstyle";
import CustomizedProgressBars from "../../../../frontend-library/atoms/linerprogress";
import { thumbsupfilled, addedtolist } from "../../../../helpers/likeAddTolist";
// import { analyticsService } from "../../../../services/analyticsapi.service";

export default function Buttonsection({
  handleClick,
  movie_id,
  trailerURL,
  handleLikeClick,
  contentId,
  isUserLiked,
  isUserAddedToList,
  likes,
  wathhistoryduration,
  isSignedIn,
  addListLoading,
  isSignIn,
  btn_txt,
}) {
  return (
    <Container style={CardStyle.container()}>
      <Row>
        <Button
          className="jumbotron-play"
          onClick={() => {
            // analyticsService.contentalaytics(
            //   "content",
            //   "play_started",
            //   movie_id
            // );
            handleClick();
          }}
        >
          <Row className={"cd-image-container"}>
            <Image
              src={`${play}`}
              onClick={() => {
                // analyticsService.contentalaytics(
                //   "content",
                //   "play_started",
                //   movie_id
                // );
                handleClick("video");
              }}
              alt="play button"
              className="imageCont-btn"
            />
            <span className="btnTxtjumbotron-play-btn-txt">
              {btn_txt}
              {/* {wathhistoryduration > 0 ? <CustomizedProgressBars value={wathhistoryduration} theme={0} /> : null} */}
            </span>
          </Row>
        </Button>
        {trailerURL ? (
          <Button
            className="jumbotron-play"
            onClick={() => {
              // analyticsService.contentalaytics(
              //   "content",
              //   "play_started",
              //   movie_id
              // );
              handleClick("trailer");
            }}
          >
            <Row className={"cd-image-container"}>
              <Image
                src={`${play}`}
                alt="play button"
                className="imageCont-btn"
              />
              <span className="btnTxtjumbotron-play-btn-txt">{"Trailer"}</span>
            </Row>
          </Button>
        ) : (
          <></>
        )}

        {isSignIn && (
          <div
            className="jumbotron-icon-wrapper btn-animated"
            disabled={addListLoading}
          >
            <Image
              src={isUserAddedToList ? addedtolist : plus}
              onClick={() => handleLikeClick(contentId, "addtolist")}
              alt={"add to my list"}
              className="img-addlist-setup"
            />
          </div>
        )}
        {isSignIn ? (
          <div
            className="jumbotron-icon-wrapper btn-animated"
            onClick={() => handleLikeClick(contentId, "like")}
            disabled={addListLoading}
          >
            <Image
              src={isUserLiked ? thumbsupfilled : like}
              alt={"like the item"}
              className="img-addlist-setup"
            />
            {likes && likes > 0 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-52%",
                  right: "-6%",
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                }}
                className={"btn-animated"}
              >
                {likes > 0 ? <span>{likes}</span> : null}
                <span style={{ paddingLeft: "3px" }}>
                  {likes > 0 ? "Likes" : "Like"}
                </span>
              </div>
            )}
          </div>
        ) : null}
      </Row>
    </Container>
  );
}
