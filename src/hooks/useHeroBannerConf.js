import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { pathOr, equals } from "ramda";
import UserInfoSelector from '../selectors/getuserinformationselector';
import { GetVideoBannerContent } from '../selectors/homecontentselector';
import { showModalComAction } from '../actions/showmodal.action';
import { showErrorAlertAction } from '../actions/erroralert.action';
import { addtowatchlistAction } from '../actions/addToWatchList.action';
import { getusercontentdetailsAction } from '../actions/getusercontentdetails.action';
import play from "../assets/play.svg";
import plus from "../assets/plus.svg";

const addedtolist = "https://tenant-icons.s3.amazonaws.com/added_to_list.png";
// Settings for autoslider
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};



export const useHeroBannerConf = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const themes = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  let isUserAddedToList = useSelector((state) => pathOr(false, ['usercontentdetails', 'response', 'result', 'isUserAddedToList'])(state));
  let addListLoading = useSelector(state => pathOr(false, ['usercontentdetails', 'loading'])(state));
  let { isSubscribed } = UserInfoSelector();
  let isSubscription = useSelector(state => pathOr(false, ['ThemeState', 'isSubscription'])(state));
  let videoBanner = GetVideoBannerContent();
  const isSignedIn = equals(200, signedInStatus);
  const icons = pathOr("", ["themes"])(themes);
  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );
  let manifest = "";
  const handleClick = () => {
    if (!isSignedIn) {
      dispatch(showModalComAction.ShowModal('signin'));
      return;
    }

    if (isSubscription === false && isSignedIn && isVerified) {
      if (videoBanner && videoBanner.videoPermalink) {
        return history.push(videoBanner.videoPermalink);
      }
    }

    if (isSignedIn && isSubscribed && isVerified) {
      // if (!manifest) return;
      // dispatch({ type: 'PLAYER_VIDEO_TYPE', videotype: "video" })
      if (videoBanner && videoBanner.videoPermalink) {
        return history.push(videoBanner.videoPermalink);
      }
    }

    if (isSubscription === false && isSignedIn) {
      if (!isVerified) {
        dispatch(showModalComAction.ShowModal('toverifyemail'));
        return;
      }
    }
    if (isSignedIn && !isSubscribed) {
      if (!isVerified) {
        dispatch(showModalComAction.ShowModal('toverifyemail'));
        return;
      }
      dispatch(showModalComAction.ShowModal("membership"));
      return;
    }


  };

  const handleAddToListClick = (contentId) => {
    if (!isSignedIn) {
      dispatch(showModalComAction.ShowModal('signin'));
      return;
    }
    if (isSignedIn) {
      if (isSubscription === true && !isSubscribed) {
        if (!isVerified) {
          dispatch(showModalComAction.ShowModal('toverifyemail'));
          return;
        }
        return dispatch(showModalComAction.ShowModal("membership"));
      }
      dispatch(addtowatchlistAction.addTolist(contentId));
      return;
    }
    return dispatch(showErrorAlertAction.ShowErrorAlert("Sign in to add content to list"));
  };

  useEffect(() => {
    if (videoBanner && videoBanner.videoId && isSignedIn) {
      dispatch(getusercontentdetailsAction.getusercontentdetails(videoBanner.videoId));
    }
    return () => { };
  }, []);


  const HeroBannerState = {
    themes,
    isSignedIn,
    icons,
    handleClick,
    url:
      "https://1.bp.blogspot.com/-hJtTiGMJ1rc/Xp8_CUGH8BI/AAAAAAAAAyg/799Mw2ZodPAF2xLXOaGsF7uf0wLihfPmgCLcBGAsYHQ/s1600/49669442602_846bbd82ba_k.jpg",
    plus,
    play,
    videoBanner,
    handleAddToListClick,
    addedtolist,
    isUserAddedToList,
    addListLoading
  };

  return { HeroBannerState, settings, videoBanner }
}