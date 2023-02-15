import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathOr, equals } from "ramda";
import { deleteCookie } from "../../helpers/authentication";
import { signinActions } from "../../actions/signinactions";
// import { analyticsService } from '../../services/analyticsapi.service';
import { __parseHeaderContent } from "../../selectors/headerselector";

import Modal from "react-bootstrap/Modal";
import Logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import CompanyName from "../../assets/images/companyName.png";
import Hamburger from "../../assets/images/hamburger.png";
import movieLogo from "../../assets/images/movie-clapper.svg";
import seriesLogo from "../../assets/images/series.svg";
import userLogo from "../../assets/images/user.svg";
import logoutLogo from "../../assets/images/logout-2.svg";
import devicesLogo from "../../assets/images/devices.svg";
import { showModalComAction } from "../../actions/showmodal.action";
import UserInfoSelector from "../../selectors/getuserinformationselector";
import "./FullSideNav.css";
import { __parseThemeSelector } from "../../selectors/themestyleselector";

function FullSideNav(props) {
  //this.setState({show:props.show})
  // const logo = props.themes ? props.themes.logoImg : ''
  const companyName = props.theme ? props.themes.companyName : "";
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );
  let { isSubscribed } = UserInfoSelector();
  let isSubscription = useSelector((state) =>
    pathOr(false, ["ThemeState", "isSubscription"])(state)
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignedIn = equals(200, signedInStatus);
  const { accountIcon, logo } = __parseHeaderContent();
  const { isEmailVerification } = __parseThemeSelector;

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

    if (isSubscription === true) {
      if (isSubscribed === false && isVerified === true) {
        dispatch(showModalComAction.ShowModal("membership"));
        return;
      } else if (isSubscribed === true) {
        history.push("/accountdetails");
        return;
      }
    } else if (
      (isSubscription === false && isSignedIn && isVerified === true) ||
      (isSignedIn && isEmailVerification === false)
    ) {
      history.push("/accountdetails");
      return;
    }
  }

  function handleMyListNav() {
    if (isSignedIn) {
      return history.push("/mylist");
    }
  }

  return (
    <div className={"fullsidenavbar"}>
      <Modal className="modal-style-sidenav" show={props.show}>
        <Modal.Header>
          <div className="">
            <img
              src={logo ? logo : Logo}
              alt="nav-logo-sidenav"
              className="nav-logo-sidenav"
              onClick={() => history.push("/")}
            />
            <img
              src={companyName ? companyName : CompanyName}
              alt="company-name-sidenav"
              className="company-name-sidenav"
            />
            <img
              src={Hamburger}
              alt="icon-sidenav"
              className="icon-sidenav"
              onClick={props.handleModal}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          {isSignedIn ? (
            <div className="">
              <div
                onClick={handleAccountDetailNav}
                className="logo-title"
                aria-label={"navigate to home"}
              >
                <img
                  src={accountIcon ? accountIcon : profile}
                  alt="profie-sidenav"
                  className="profile-sidenav"
                />
                <span className="caption-sidenav">
                  <b>John Doe</b>
                </span>
              </div>
            </div>
          ) : null}
          <div className="section">
            <a
              href="/home"
              className="logo-title"
              aria-label={"navigate to home"}
            >
              <img
                src={movieLogo}
                alt="movie-logo-sidenav"
                className="movie-logo-sidenav"
              ></img>
              <span className="title-sidenav">Movies</span>
            </a>
          </div>
          <div className=" section">
            <a
              href="/home"
              className="logo-title"
              aria-label={"Navigate to series page"}
            >
              <img
                src={seriesLogo}
                alt="series-logo-sidenav"
                className="series-logo-sidenav"
              ></img>
              <span className="title-sidenav">Web Series</span>
            </a>
          </div>
          {isSignedIn ? (
            <div className=" section">
              <div
                onClick={handleMyListNav}
                className="logo-title"
                aria-label={"Navigate to my list"}
              >
                <img
                  src={seriesLogo}
                  alt="series-logo-sidenav"
                  className="series-logo-sidenav"
                ></img>
                <span className="title-sidenav">My List</span>
              </div>
            </div>
          ) : null}
          <div className="section">
            <a
              href="/home"
              className="logo-title"
              aria-label={"Navigate to devices page"}
            >
              <img
                src={devicesLogo}
                alt="devices-logo-sidenav"
                className="devices-logo-sidenav"
              ></img>
              <span className="title-sidenav">Devices</span>
            </a>
          </div>
          {isSignedIn ? (
            <>
              <div className="section">
                <div
                  className="logo-title"
                  aria-label={"Navigate to acoount details"}
                  onClick={handleAccountDetailNav}
                >
                  <img
                    src={userLogo}
                    alt="user-logo-sidenav"
                    className="user-logo-sidenav"
                  ></img>
                  <span className="title-sidenav">Account</span>
                </div>
              </div>
              <div className="section" onClick={handleLogOut}>
                <div className="logo-title" aria-label={"Navigate to home"}>
                  <img
                    src={logoutLogo}
                    alt="logout-logo-sidenav"
                    className="logout-logo-sidenav"
                  ></img>
                  <span className="title-sidenav">Logout</span>
                </div>
              </div>{" "}
            </>
          ) : null}
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default FullSideNav;
