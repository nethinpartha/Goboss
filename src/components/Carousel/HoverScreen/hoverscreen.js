import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import VideoPreview from "../../../frontend-library/molecules/previewVideoPlayer";
import Title from "./HoverScreenFragments/Title/title";
import Description from "./HoverScreenFragments/Description/description";
import Subtitle from "./HoverScreenFragments/Subtitles/subtitle";
import { Link } from "react-router-dom";
import { hoverscreenstyle } from "./hoverscreenstyle";
import HandleLike from "../../../hooks/useHandleLike";

const HoverScreenMemo = ({
  item,
  api_key,
  media_type,
  backgroundImage,
  smallsize = false,
  displayCard,
  index,
  isUserAddedToList,
  isUserLiked,
}) => {
  const [moviePreviewAvailable, setPreviewAvailable] = useState(true);
  const { handleLikeClick } = HandleLike();
  // const [rstCurrTime, setRstCurrTime] = useState(0);
  const [sendConfigurations, setSendConfigurations] = useState({
    position: "absolute",
    width: "100%",
    height: `${smallsize ? "8.25rem" : "12.5rem"}`,
    left: "50%",
    top: "23%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    opacity: 1,
    backgroundSize: "cover",
    overflow: "hidden",
    border: "none",
    outline: "none",
  });
  let config = {
    url: "",
  };
  if (item && item.trailerURL) {
    config = {
      url: item.trailerURL,
    };
  }

  // config videoautoplay
  const [autoPlayConfig, setAutoPlayConfig] = React.useState({
    opacity: 0,
  });
  // React.useEffect(() => {
  //   let timer = setTimeout(function () {
  //     setAutoPlayConfig({ ...autoPlayConfig, opacity: 1 });
  //   }, 5000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  // const handleMouseHover = () => {
  //   setTimeout(function () {
  //     setAutoPlayConfig({ ...autoPlayConfig, opacity: 1 });
  //     setSendConfigurations({ ...sendConfigurations, opacity: 1 });
  //   }, 1000);
  // };
  return (
    <Card
      style={{
        width: `${smallsize ? "14rem" : "20rem"}`,
        height: `${smallsize ? "17rem" : "25.25rem"}`,
        top: `${smallsize ? "0.8rem" : "0"}`,
        right: `${
          displayCard === index + 1
            ? `${
                smallsize
                  ? `${
                      displayCard && displayCard.length > 6 ? "7rem" : "4.7rem"
                    }`
                  : "3.3rem"
              }`
            : ""
        }`,
        boxShadow: "6px 3px 12px #362F2FD1",
      }}
      className={"hoverscreen-wrapper"}
      id={`hoverscreen-wrapper`}
      // onMouseOver={() => handleMouseHover()}
      // onMouseOut={() =>
      //   setSendConfigurations({ ...sendConfigurations, opacity: 0 })
      // }
    >
      <div
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        {/* <Link
        // to={`/${media_type}?id=${item.id}`}
        style={{ textDecoration: "none", color: "white" }}
      > */}
        {item && item.trailerURL && (
          <VideoPreview
            videoConfigStyle={sendConfigurations}
            config={config}
            id={`${
              item && item.id
                ? smallsize
                  ? `${item.id}smallsize`
                  : item.id
                : item.id
            }`}
            dispalaycls={false}
            setAutoPlay={false}
            rstCurrTime={true}
          />
        )}
        <Card.Img
          variant="top"
          src={backgroundImage}
          alt={"hover to view"}
          style={hoverscreenstyle.image(smallsize)}
        />
        <Card.Body
          style={{
            padding: `${smallsize ? "0.45rem 0.25rem 0 0.25rem" : ""}`,
            marginBottom: `${smallsize ? `0.35rem` : ""}`,
          }}
        >
          <Container
            style={{
              padding: `${smallsize ? "" : "0 0.15rem"}`,
            }}
          >
            <Title
              smallsize={smallsize}
              contentid={item.id}
              handleLikeClick={handleLikeClick}
              isUserAddedToList={isUserAddedToList}
              isUserLiked={isUserLiked}
            />
            <Description
              smallsize={smallsize}
              title={item && item.title}
              duration={item && item.duration}
              yearOfRelease={item && item.yearOfRelease}
              item={item}
            />
            <Subtitle smallsize={smallsize} />
          </Container>
        </Card.Body>
      </div>
      {/* </Link> */}
    </Card>
  );
};

export default React.memo(HoverScreenMemo);
