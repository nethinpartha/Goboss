import React, { useEffect } from "react";
import { pathOr } from "ramda";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import bgImg from './images/bg-img.png'
import bdImg from "./images/bd.png";
// import Ratings from '../../frontend-library/atoms/ratings/ratings'
// import VideoPreview from '../../frontend-library/molecules/previewVideoPlayer'
// import RatingsButton from '../../frontend-library/atoms/RatingsButton'
import like from "./images/like.png";
import playBtn from "./images/playBtn.png";
import share from "./images/Share.svg";
import download from "./images/Download.svg";
import plus from "../ContentDetails/assets/plus.svg";
import { Contentdetailsselector } from "../../selectors/contentdetailsselector";
import { contentdetailLikeAction } from "../../actions/likecontent.action";
import { addtowatchlistAction } from "../../actions/addToWatchList.action";
import { getusercontentdetailsAction } from "../../actions/getusercontentdetails.action";
import { showModalComAction } from "../../actions/showmodal.action";
// import VideoPreview from '../../frontend-library/molecules/previewVideoPlayer';
import useAuthStatus from "../../hooks/useAuthStatus";
import UserInfoSelector from "../../selectors/getuserinformationselector";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
// import { showErrorAlertAction } from '../../actions/erroralert.action';

import "./style.scss";

const thumbsupfilled =
  "https://tenant-icons.s3.amazonaws.com/thumbsup_filled.png";
const addedtolist = "https://tenant-icons.s3.amazonaws.com/added_to_list.png";

export const CustomFilterHoc = ({ children }) => {
  let props = Contentdetailsselector();
  return children(props);
};

/**
 * Hero Banner React component
 */

// Method to display genere types

export const GenereType = () => {
  return (
    <div className="sub-type" data-test="genereComponent">
      <div className="genre-setup">
        <div
          className="form-check list-inline list-group-horizontal btn-group"
          role="group"
          data-toggle="buttons"
        >
          <span className="btn genres btn-top-animated">
            {/* <span type="checkbox" className="form-check list-group-item" /> */}
            <span>Action</span>
          </span>
          <span className="btn genres btn-top-animated">
            {/* <span type="checkbox" className="form-check list-group-item" /> */}
            <span>Crime</span>
          </span>
          <span className="btn genres btn-top-animated">
            {/* <span type="checkbox" className="form-check list-group-item" /> */}
            <span>Drama</span>
          </span>
          <span className="btn genres btn-top-animated">
            {/* <span type="checkbox" className="form-check list-group-item" /> */}
            <span>Fantasy</span>
          </span>
        </div>
      </div>
    </div>
  );
};

// Method to display action panel

const ActionPanel = ({
  handleLikeClick,
  contentId,
  handleClick,
  isUserLiked,
  isUserAddedToList,
  isSignIn,
}) => {
  return (
    <div className="action-panel-container">
      <div className="action-panel" data-test="actionComponent">
        <div
          className="deck form-check list-inline list-group-horizontal btn-group"
          role="group"
          data-toggle="buttons"
        >
          {isSignIn && (
            <div
              className="icon-link"
              aria-label={"more on video details"}
              onClick={() => handleLikeClick(contentId, "like")}
            >
              <div className="logoWrapper">
                <img
                  src={isUserLiked ? thumbsupfilled : like}
                  alt="devices-logo"
                  className="like-logo-new btn-animated"
                  // style={{ filter: `${isUserLiked ? 'invert(0.5) sepia(4) saturate(5) hue-rotate(685deg)' : 'invert(0)'}` }}
                ></img>
                <p style={{ marginTop: "0.5rem" }}>Like</p>
              </div>
            </div>
          )}

          <a
            href="/videoinfo"
            className="icon-link"
            aria-label={"more on video details"}
          >
            <div className="logoWrapper">
              <img
                src={share}
                alt="devices-logo"
                className="like-logo-new1 btn-animated"
              ></img>
              <br />
              <p style={{ marginTop: "0.5rem" }}>Share</p>
            </div>
          </a>
          <div
            onClick={handleClick}
            className="icon-link"
            aria-label={"play the video"}
          >
            <div className="logoWrapper">
              <img
                src={playBtn}
                alt="devices-logo"
                className="like-logo player-logo btn-animated"
              ></img>
              <br />
              <p style={{ marginTop: "0.5rem" }}>Play</p>
            </div>
          </div>
          {isSignIn && (
            <div
              onClick={() => handleLikeClick(contentId, "addtolist")}
              className="icon-link"
              aria-label={"add to list"}
            >
              <div className="logoWrapper">
                <img
                  src={isUserAddedToList ? addedtolist : plus}
                  alt="devices-logo"
                  className="like-logo btn-animated"
                  // style={{
                  //     filter: `${isUserAddedToList ?
                  //         'invert(0.5) sepia(4) saturate(5) hue-rotate(685deg)' :
                  //         'invert(0)'}`
                  // }}
                ></img>
                <br />
                <p style={{ marginTop: "0.5rem" }}>List</p>
              </div>
            </div>
          )}
          <a
            href="/videoinfo"
            className="icon-link"
            aria-label={"more on video details"}
          >
            <div className="logoWrapper">
              <img
                src={download}
                alt="devices-logo"
                className="like-logo btn-animated"
              ></img>
              <br />
              <p style={{ marginTop: "0.5rem", marginLeft: "-14px" }}>
                Download
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

// Method to display ratings

const RatingSection = ({
  title,
  duration,
  yearOfRelease,
  description,
  handleLikeClick,
  contentId,
  handleClick,
  isUserAddedToList,
  isUserLiked,
  isFreeContent,
  isSignIn,
}) => {
  const ratings = {
    value: 4.5,
    name: "half-rating-read",
    precision: 0.5,
    readOnly: true,
    classname: null,
    // icon: this.props.themes && this.props.themes.icons ? this.props.themes.icons.rating : ''
  };
  // const fetch = () => {
  //     // Initiate fetch action
  // }

  // const configButton = {
  //     buttonText: ratings.value,
  //     emitEvent: fetch
  // }

  return (
    <>
      <div className="ratingsSection" data-test="ratingsComponent">
        <div className="new">
          {title && <h2 style={{ textTransform: "uppercase" }}>{title}</h2>}
        </div>
        {/* {<p className="sub-type cotnent">Film</p>} */}
        {/* {<div className="ratings-wrapper">
                              <span className="ratings-value">
                                  {ratings.value}
                              </span>
                              <Ratings {...ratings} />
                              <RatingsButton  {...configButton} />
                          </div>} */}
        {duration && (
          <p className="sub-type sub-type1">
            {duration} {yearOfRelease ? ` - ${yearOfRelease}` : null}
          </p>
        )}
        <GenereType />
        {description && (
          <p className="sub-type cotnent max-width">{description}</p>
        )}
        <ActionPanel
          handleLikeClick={handleLikeClick}
          contentId={contentId}
          handleClick={handleClick}
          isUserAddedToList={isUserAddedToList}
          isUserLiked={isUserLiked}
          isSignIn={isSignIn}
        />
      </div>
    </>
  );
};

const ImageContent = () => {
  return (
    <>
      <div className="desc-img">
        <img src={bdImg} alt="breaking bad" />
      </div>
    </>
  );
};

export const HeroBanner = () => {
  let {
    loading,
    title,
    description,
    gallary,
    genres,
    noContentFound,
    duration,
    yearOfRelease,
    trailerURL,
    contentId,
    isFreeContent,
  } = Contentdetailsselector();
  const { isSignIn } = __parseThemeSelector();
  const history = useHistory();
  let [isSignedIn] = useAuthStatus();
  let { isSubscribed } = UserInfoSelector();
  const dispatch = useDispatch();
  let isUserLiked = useSelector((state) =>
    pathOr(false, ["usercontentdetails", "response", "result", "isUserLiked"])(
      state
    )
  );
  const { isEmailVerification } = __parseThemeSelector;
  let isUserAddedToList = useSelector((state) =>
    pathOr(false, [
      "usercontentdetails",
      "response",
      "result",
      "isUserAddedToList",
    ])(state)
  );
  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );
  let isSubscription = useSelector((state) =>
    pathOr(false, ["ThemeState", "isSubscription"])(state)
  );

  const handleLikeClick = (contentId, type) => {
    if (isSignIn === true) {
      if (!isSignedIn) {
        dispatch(showModalComAction.ShowModal("signin"));
        return;
      }
      if (
        (isSignedIn && isSubscription === true) ||
        (isSignedIn && isEmailVerification === false)
      ) {
        if (type === "like") {
          dispatch(contentdetailLikeAction.likeContent(contentId));
          return;
        } else {
          dispatch(addtowatchlistAction.addTolist(contentId));
          return;
        }
      } else if (
        (!isSubscription && isSignedIn) ||
        (isSignedIn && isEmailVerification === false)
      ) {
        if (isVerified === false && isEmailVerification === true) {
          dispatch(showModalComAction.ShowModal("toverifyemail"));
          return;
        }
        if (type === "like") {
          dispatch(contentdetailLikeAction.likeContent(contentId));
          return;
        } else {
          dispatch(addtowatchlistAction.addTolist(contentId));
          return;
        }
      }
    }
  };

  const handleClick = () => {
    if (isFreeContent) {
      dispatch({ type: "PLAYER_VIDEO_TYPE", videotype: "video" });
      return (window.location.pathname = "/player");
    }
    if (isSubscription === true) {
      if (isSignedIn && isSubscribed && isVerified) {
        dispatch({ type: "PLAYER_VIDEO_TYPE", videotype: "video" });
        return (window.location.pathname = "/player");
      }
    } else if (isSignedIn && isVerified) {
      dispatch({ type: "PLAYER_VIDEO_TYPE", videotype: "video" });
      return (window.location.pathname = "/player");
    }

    if (isSubscription === true) {
      if (isSignedIn && !isSubscribed && isEmailVerification === true) {
        if (!isVerified) {
          dispatch(showModalComAction.ShowModal("toverifyemail"));
          return;
        }
        dispatch(showModalComAction.ShowModal("membership"));
        return;
      }
    } else if (isSignedIn && isEmailVerification === true) {
      if (!isVerified) {
        dispatch(showModalComAction.ShowModal("toverifyemail"));
        return;
      }
      dispatch(showModalComAction.ShowModal("membership"));
      return;
    }

    if (!isSignedIn) {
      dispatch(showModalComAction.ShowModal("signin"));
      return;
    }
  };

  useEffect(() => {
    if (contentId && isSignedIn) {
      dispatch(getusercontentdetailsAction.getusercontentdetails(contentId));
      return;
    }
  }, [contentId]);

  return noContentFound ? (
    <>
      <div className="blackLayer" />
      <div
        className="hero-banner"
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(to right bottom, rgb(146 146 155 / 18%), rgb(16 33 46)), url(${gallary.bannerbackdrop})`,
        }}
      >
        {/* {props.trailerURL && <VideoPreview
                              videoConfigStyle={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                              }}
                              displayposter={props.gallary.bannerbackdrop}
                              config={{ url: props.trailerURL }}
                          />} */}
        <ImageContent />
        <RatingSection
          title={title}
          duration={duration}
          yearOfRelease={yearOfRelease}
          description={description}
          handleLikeClick={handleLikeClick}
          contentId={contentId}
          handleClick={handleClick}
          isUserLiked={isUserLiked}
          isUserAddedToList={isUserAddedToList}
          isSignIn={isSignIn}
          isFreeContent={isFreeContent}
        />
      </div>
    </>
  ) : (
    <h3
      style={{
        color: "#ffffff",
        textAlign: "center",
        marginTop: "1rem",
        fontSize: "24px",
      }}
    >
      Sorry, we did not find any content
    </h3>
  );
};

export default HeroBanner;
