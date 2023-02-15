import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathOr, equals } from "ramda";
import { __parseHeaderContent } from "../../selectors/headerselector";
import { deleteCookie } from "../../helpers/authentication";
import { signinActions } from "../../actions/signinactions";
// import { analyticsService } from '../../services/analyticsapi.service';
import "./SideNavStyle.css";
import Logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import movieLogo from "../../assets/images/movie-clapper.svg";
import seriesLogo from "../../assets/images/series.svg";
import userLogo from "../../assets/images/user.svg";
import logoutLogo from "../../assets/images/logout-2.svg";
import devicesLogo from "../../assets/images/devices.svg";
import UserInfoSelector from "../../selectors/getuserinformationselector";
import { showModalComAction } from "../../actions/showmodal.action";
import { __parseThemeSelector } from "../../selectors/themestyleselector";

function SideNav({ assets, children }) {
  const { isEmailVerification } = __parseThemeSelector;
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignedIn = equals(200, signedInStatus);
  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );
  let { isSubscribed } = UserInfoSelector();
  let isSubscription = useSelector((state) =>
    pathOr(false, ["ThemeState", "isSubscription"])(state)
  );
  const { accountIcon, logo } = __parseHeaderContent();
  async function handleLogOut() {
    if (isSignedIn) {
      // await analyticsService.addeventanalytics('logout', '');
      await dispatch(signinActions.signout());
      dispatch(signinActions.resetSignInParams());
      dispatch({ type: "RESET_SUBSCRIPTION" });
      deleteCookie("signInStatus");
      deleteCookie("username");
      dispatch({ type: "RESET_SIGIN" });
      return;
    }
  }

  function handleAccountDetailNav() {
    if (
      isVerified === false &&
      isSignedIn === true &&
      isEmailVerification === true
    ) {
      dispatch(showModalComAction.ShowModal("toverifyemail"));
      return;
    }
    if (isSubscription) {
      if (isSubscribed === false && isVerified === true) {
        dispatch(showModalComAction.ShowModal("membership"));
        return;
      } else if (isSubscribed === true) {
        history.push("/accountdetails");
        return;
      }
    } else if (isSubscription === false) {
      history.push("/accountdetails");
      return;
    }
  }

  function handleMyListNav() {
    if (isSignedIn) {
      return history.push("/accountdetails");
    }
  }
  return (
    <div className="sidenav">
      {children}
      <div onClick={() => history.push("/")} aria-label={"navigate to home"}>
        <img src={logo ? logo : Logo} alt="nav-logo" className="nav-logo" />
      </div>
      <div
        onClick={handleAccountDetailNav}
        aria-label={"navigate to account details page"}
      >
        <img
          src={accountIcon ? accountIcon : profile}
          alt="profie-pic"
          className="profile-pic"
        />
      </div>
      <span className="caption">JD</span>
      <div
        className="movie-logo-home"
        onClick={() => history.push("/")}
        aria-label={"navigate to home"}
      >
        <img src={movieLogo} alt="movie-logo" className="movie-logo"></img>
      </div>
      <div
        href="/home"
        aria-label={"navigate to home"}
        className="series-logo-home"
      >
        <img src={seriesLogo} alt="series-logo" className="series-logo"></img>
      </div>
      <div
        href="/home"
        aria-label={"navigate to devices page"}
        className="devices-logo-home"
      >
        <img
          src={assets && assets.icons ? assets.icons.devices : devicesLogo}
          alt="devices-logo"
          className="devices-logo"
        ></img>
      </div>
      {isSignedIn ? (
        <>
          <div
            aria-label={"navigate to home"}
            onClick={handleAccountDetailNav}
            className="user-logo-home"
          >
            <img src={userLogo} alt="user-logo" className="user-logo"></img>
          </div>
          <div
            aria-label={"navigate to home"}
            onClick={handleLogOut}
            className="logout-logo-home"
          >
            <img
              src={logoutLogo}
              alt="logout-logo"
              className="logout-logo"
            ></img>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default SideNav;
