import React, { useEffect, useState } from "react";
import { pathOr } from "ramda";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Jumbotron, Container, Row, Modal, Button } from "react-bootstrap";
import Title from "./Title/title";
import RatingsWrapper from "./Ratings/Ratings";
import Overview from "./Overview/overview";
import Buttonsection from "./Button/buttonsection";
import { showModalComAction } from "../../../actions/showmodal.action";
import UserInfoSelector from "../../../selectors/getuserinformationselector";
import { type } from "../../../constants/contentdetails.constants";
import { contentdetailLikeAction } from "../../../actions/likecontent.action";
import { addtowatchlistAction } from "../../../actions/addToWatchList.action";
import { getusercontentdetailsAction } from "../../../actions/getusercontentdetails.action";
import { updateVideoSettingValue } from "../../../actions/updatevideosetting.action";
import Cookies from "js-cookie";

import {
  JumbotronStyle,
  ContainerStyle,
  JumbotronWrapperStyle,
} from "./jumbotronstyle";
import CustomizedProgressBars from "../../../frontend-library/atoms/linerprogress";
import CalculateProgress from "../../../helpers/progressbar";
import { Contentdetailsselector } from "../../../selectors/contentdetailsselector";
import SelectStereoPopup from "./Popup/SelectStereoPopup";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";

function JumbotronComp({
  contentId,
  movieDetails,
  director,
  movie_id,
  title,
  description,
  gallary,
  certificate,
  genres,
  languages,
  isSignedIn,
  duration,
  yearOfRelease,
  trailerURL,
  likes,
  isFreeContent,
  isSignIn,
}) {
  const history = useHistory();
  const isEmailVerification = pathOr(false, ["isEmailVerification"])(
    useSelector((state) => pathOr(null, ["ThemeState"])(state))
  );
  const dispatch = useDispatch();
  const overview = pathOr("", ["overview"])(movieDetails);
  const [isModalOpen, setModalIsOpen] = useState(false);
  let selectedVideoSetting = null;
  const [radioBtnSelected, setRadioBtnSelected] = useState(true);
  // let videoSettingRenditions = useSelector((state) =>
  //   pathOr("", ["ContentDetails", "response", "result", "renditions"])(state)
  // );
  const { isHD, is4K, isDolby, isdolbyAtmos } = Contentdetailsselector();
  const videoSettingValue = {
    Stereo: isHD,
    "4K": is4K,
    Dolby: isDolby,
    "Dolby Atmos": isdolbyAtmos,
  };
  const trueVideoValues = Object.entries(videoSettingValue)
    .filter(([key, value]) => value)
    .map(([key, value]) => key);
  if (trueVideoValues?.length === 1) {
    selectedVideoSetting = trueVideoValues[0];
    dispatch(updateVideoSettingValue(trueVideoValues[0]));
  }

  const release_date = pathOr("", ["release_date"])(movieDetails);

  const backdrop_path = pathOr("", ["bannerbackdrop"])(gallary);
  const url = `${backdrop_path}`;
  let isUserLiked = useSelector((state) =>
    pathOr(false, ["usercontentdetails", "response", "result", "isUserLiked"])(
      state
    )
  );
  let isUserAddedToList = useSelector((state) =>
    pathOr(false, [
      "usercontentdetails",
      "response",
      "result",
      "isUserAddedToList",
    ])(state)
  );
  let durations = useSelector((state) =>
    pathOr(0, [
      "usercontentdetails",
      "response",
      "result",
      "watchHistory",
      "duration",
    ])(state)
  );
  let { isSubscribed } = UserInfoSelector();

  let runtime = useSelector((state) =>
    pathOr(0, ["ContentDetails", "response", "result", "runtime"])(state)
  );
  let permalink = useSelector((state) =>
    pathOr("", ["ContentDetails", "response", "result", "permaLink"])(state)
  );
  let addListLoading = useSelector((state) =>
    pathOr(false, ["usercontentdetails", "loading"])(state)
  );
  let isSubscription = useSelector((state) =>
    pathOr(false, ["ThemeState", "isSubscription"])(state)
  );
  let userInfo = useSelector((state) =>
    pathOr(null, ["UserInformation", "response", "result"])(state)
  );
  // let isSubscribed = pathOr("", ["subscription", "isActive"])(userInfo);

  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );
  let wathhistoryduration = CalculateProgress(durations, runtime);
  let btn_txt = "MOVIE";

  if (durations === runtime && isSignedIn) {
    btn_txt = "WATCH AGAIN";
  } else if (wathhistoryduration > 0 && isSignedIn) {
    btn_txt = "RESUME";
  }
  const toggleModal = (val = "save") => {
    if (selectedVideoSetting !== null && val === "save") {
      handleClick("video");
      setModalIsOpen(!isModalOpen);
    }
    if (val === "close") {
      setModalIsOpen(!isModalOpen);
    }
    if (selectedVideoSetting == null && val === "save") {
      setRadioBtnSelected(false);
    }
  };
  const handleChange = (value) => {
    selectedVideoSetting = value;
    dispatch(updateVideoSettingValue(value));
  };

  const handleClick = (videotype = "video") => {
    if (videotype.includes("trailer")) {
      dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
      Cookies.set("trailerURL", trailerURL, {
        expires: 1,
      });
      return history.push(`/player`);
    }
    if (isFreeContent === true) {
      dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
      return history.push(`/player`);
    }
    if (!isSignedIn) {
      dispatch({ type: "RESET_SIGIN" });
      dispatch({ type: "EMAIL_ADDRESS_RESET" });
      dispatch({ type: "RESET_USER_INFORMATION" });
      dispatch(showModalComAction.ShowModal("signin"));
      return;
    }
    if (isSignedIn && isEmailVerification === false) {
      dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
      return history.push("/player");
    }

    if (isSubscription === true) {
      if (
        (isSignedIn &&
          isSubscribed &&
          isVerified &&
          selectedVideoSetting !== null) ||
        (isSubscribed && trueVideoValues[0] == null)
      ) {
        dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
        return history.push("/player");
      }
      if (
        isSignedIn &&
        isSubscribed &&
        isVerified &&
        selectedVideoSetting === null
      ) {
        setModalIsOpen(true);
      }
      if (isSignedIn && !isSubscribed && isEmailVerification === true) {
        if (!isVerified) {
          dispatch(showModalComAction.ShowModal("toverifyemail"));
          return;
        }
        dispatch(showModalComAction.ShowModal("membership"));
        return;
      }
    } else if (
      isSignedIn &&
      isSubscription === false &&
      isEmailVerification === true
    ) {
      if (!isVerified) {
        dispatch(showModalComAction.ShowModal("toverifyemail"));
        return;
      } else {
        dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
        return history.push("/player");
      }
      // dispatch(showModalComAction.ShowModal("membership"));
      // return;
    }
  };

  const handleLikeClick = (contentId, type) => {
    if (!isSignedIn) {
      dispatch(showModalComAction.ShowModal("signin"));
      return;
    }
    if (
      (isSubscription === true && isSignedIn) ||
      (isEmailVerification === false && isSignedIn)
    ) {
      if (!isVerified && isEmailVerification === true) {
        dispatch(showModalComAction.ShowModal("toverifyemail"));
        return;
      }
      if (!isSubscribed && isEmailVerification === true) {
        dispatch(showModalComAction.ShowModal("membership"));
        return;
      }
      if (type === "like") {
        dispatch(contentdetailLikeAction.likeContent(contentId, permalink));
        return;
      } else {
        dispatch(addtowatchlistAction.addTolist(contentId));
        return;
      }
    }

    if (isSubscription === false || isEmailVerification === false) {
      if (isSignedIn) {
        if (type === "like") {
          dispatch(contentdetailLikeAction.likeContent(contentId, permalink));
          return;
        } else {
          dispatch(addtowatchlistAction.addTolist(contentId));
          return;
        }
      }
    }
  };

  useEffect(() => {
    if (contentId && isSignedIn) {
      dispatch(getusercontentdetailsAction.getusercontentdetails(contentId));
    }
    return () => {};
  }, []);

  return (
    <div>
      <JumbotronWrapperStyle />
      {trueVideoValues?.length > 1 ? (
        <SelectStereoPopup
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
          trueVideoValues={trueVideoValues}
          handleChange={handleChange}
          radioBtnSelected={radioBtnSelected}
        />
      ) : (
        <></>
      )}

      <Jumbotron style={JumbotronStyle(url)} className="jumbotron-wrapper">
        <Container style={ContainerStyle()} className="jumbotron-ctr-wrapper">
          <Row>
            <Title
              title={title}
              overview={overview}
              duration={duration}
              release_date={release_date}
              certificate={certificate}
              yearOfRelease={yearOfRelease}
            />
            <RatingsWrapper
              isSignedIn={isSignedIn}
              dispatch={dispatch}
              isSubscription={isSubscription}
              isVerified={isVerified}
              isSubscribed={isSubscribed}
              contentId={contentId}
              title={title}
            />
            <Buttonsection
              handleClick={handleClick}
              handleLikeClick={handleLikeClick}
              trailerURL={trailerURL}
              isUserLiked={isUserLiked}
              isUserAddedToList={isUserAddedToList}
              contentId={contentId}
              movie_id={movie_id}
              likes={likes}
              wathhistoryduration={wathhistoryduration}
              isSignedIn={isSignedIn}
              addListLoading={addListLoading}
              isSignIn={isSignIn}
              btn_txt={btn_txt}
            />
            <Overview
              overview={description}
              director={director}
              genres={genres}
              languages={languages}
            />
          </Row>
        </Container>
        {isSignedIn && (
          <CustomizedProgressBars
            value={wathhistoryduration}
            customstyle={{ position: "absolute", bottom: "0", width: "100%" }}
          />
        )}
      </Jumbotron>
    </div>
  );
}
export default React.memo(JumbotronComp);
