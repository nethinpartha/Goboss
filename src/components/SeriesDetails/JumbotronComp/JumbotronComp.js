import React, { useEffect, useState } from "react";
import { pathOr } from "ramda";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Jumbotron, Container, Row, Modal, Button } from "react-bootstrap";
import Title from "./Title/title";
import RatingsWrapper from "./Ratings/Ratings";
import Overview from "./Overview/overview";
import { showModalComAction } from "../../../actions/showmodal.action";
import UserInfoSelector from "../../../selectors/getuserinformationselector";
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
import SeasonsAndEpisodeSelector from "./Dropdowns/dropdown";

function JumbotronComp({
  contentId,
  movieDetails,
  director,
  movie_id,
  episodes,
  title,
  description,
  gallery,
  certificate,
  genres,
  permaLink,
  languages,
  isSignedIn,
  duration,
  yearOfRelease,
  // trailerURL,
  likes,
  // isFreeContent,
  isSignIn,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const overview = pathOr("", ["overview"])(movieDetails);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedVideoSetting, setSelectedVideoSetting] = useState(null);
  const [radioBtnSelected, setRadioBtnSelected] = useState(true);
  let permalink = "";

  const backdrop_path = pathOr("", ["16x9"])(gallery);
  const url = `${backdrop_path}`;

  let isSubscription = useSelector((state) =>
    pathOr(false, ["ThemeState", "isSubscription"])(state)
  );
  let userInfo = useSelector((state) =>
    pathOr(null, ["UserInformation", "response", "result"])(state)
  );
  // let isSubscribed = pathOr("", ["subscription", "isActive"])(userInfo);
  let { isSubscribed } = UserInfoSelector();

  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );

  const handleLikeClick = (contentId, type) => {
    if (!isSignedIn) {
      dispatch(showModalComAction.ShowModal("signin"));
      return;
    }
    if (isSubscription === true && isSignedIn) {
      if (!isVerified) {
        dispatch(showModalComAction.ShowModal("toverifyemail"));
        return;
      }
      if (!isSubscribed) {
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

    if (isSubscription === false) {
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
      <Jumbotron style={JumbotronStyle(url)} className="jumbotron-wrapper">
        <Container style={ContainerStyle()} className="jumbotron-ctr-wrapper">
          <Row>
            <Title
              title={title}
              overview={overview}
              // duration={duration}
              // release_date={release_date}
              // certificate={certificate}
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
            <SeasonsAndEpisodeSelector episodes={episodes} />
            <Overview
              overview={description}
              director={director}
              genres={genres}
              languages={languages}
            />
          </Row>
        </Container>
        {/* {isSignedIn && (
          <CustomizedProgressBars
            // value={wathhistoryduration}
            customstyle={{ position: "absolute", bottom: "0", width: "100%" }}
          />
        )} */}
      </Jumbotron>
    </div>
  );
}
export default React.memo(JumbotronComp);
