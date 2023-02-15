import React from "react";
import { useSelector } from "react-redux";
import { HeaderContext } from "../../../../context/header-context";
import { __parseThemeSelector } from "../../../../selectors/themestyleselector";
import { Container, Row, Button, Image, Card, Figure } from "react-bootstrap";
import { pathOr } from "ramda";
import cancel from "../../../../assets/icons/cancel.svg";
import SideNav from "react-simple-sidenav";
import Avatar from "react-avatar";
import "../../../Header/style.scss";

import {
  CardHeaderStyle,
  CardStyle,
  ImageStyle,
  CrossBtnStyle,
  FigureStyle,
  SubscribeBtnStyle,
} from "./user-auth-style";

// icons
import logout from "../../../../assets/logout.svg";
import devices from "../../../../assets/icons/devices.svg";
import movieclapper from "../../../../assets/icons/movie-clapper.svg";
import series from "../../../../assets/icons/series.svg";
import { showModalComAction } from "../../../../actions/showmodal.action";

export const SideMenuContent = ({
  icons = "",
  setShow,
  handleSignInClick,
  history,
  dispatch,
  header_user_config,
  isSignedIn,
  bgColor,
}) => {
  const account = pathOr("", ["account"])(icons);
  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );
  let isSubscription = useSelector((state) =>
    pathOr(false, ["ThemeState", "isSubscription"])(state)
  );
  let userInfo = useSelector((state) =>
    pathOr(null, ["UserInformation", "response", "result"])(state)
  );
  let isSubscribed = pathOr("", ["subscription", "subscriptionStatus"])(
    userInfo
  );

  const isEmailVerification = pathOr(false, ["isEmailVerification"])(
    useSelector((state) => pathOr(null, ["ThemeState"])(state))
  );
  if (
    userInfo &&
    userInfo.subscription &&
    userInfo.subscription.subscriptionStatus
  ) {
    isSubscribed = isSubscribed.includes("inactive")
      ? false
      : isSubscribed.includes("active")
      ? true
      : false;
  } else if (
    userInfo &&
    userInfo.subscription &&
    userInfo.subscription.isActive
  ) {
    isSubscribed = true;
  }
  const handleAccount = () => {
    if (!isVerified && isSignedIn && isEmailVerification === true) {
      setShow(false);
      dispatch(showModalComAction.ShowModal("toverifyemail"));
      return;
    }
    if (isSubscription === true) {
      if (!isSubscribed && isVerified) {
        setShow(false);
        dispatch(showModalComAction.ShowModal("membership"));
        return;
      } else if (isSubscribed) {
        history.push("/accountdetails");
        return;
      }
    }
    if (
      (isSignedIn && isSubscription === false && isVerified) ||
      (isEmailVerification === false && isSignedIn)
    ) {
      history.push("/accountdetails");
      setShow(false);
      return;
    }
  };

  return (
    <Container style={{ display: "block" }}>
      <Row>
        <Card style={CardHeaderStyle(bgColor)}>
          <div className="float-right">
            <button
              type="button"
              className={"close"}
              aria-label="Close"
              onClick={() => setShow(false)}
            >
              <Image
                src={cancel}
                alt={"close account overlay"}
                style={CrossBtnStyle()}
                className={"hover-btn-animation"}
              />
            </button>
          </div>
        </Card>
      </Row>
      <Row>
        <Card style={CardStyle(bgColor)}>
          <Row>
            <Image
              src={movieclapper}
              alt={"checkout our movie clapper"}
              style={ImageStyle()}
              className={"hover-btn-animation"}
            ></Image>
            <Card.Body
              style={{
                border: "none",
                maxWidth: "74%",
                paddingTop: "3%",
                cursor: "pointer",
              }}
              className={"headerAuthOnhover hover-btn-animation"}
            >
              Movies
            </Card.Body>
          </Row>
        </Card>
      </Row>
      <Row>
        <Card style={CardStyle(bgColor)}>
          <Row>
            <Image
              src={series}
              style={ImageStyle()}
              className={"hover-btn-animation"}
              alt={"movies"}
            ></Image>
            <Card.Body
              style={{
                border: "none",
                maxWidth: "74%",
                paddingTop: "3%",
                cursor: "pointer",
              }}
              className={"headerAuthOnhover hover-btn-animation"}
            >
              Web Series
            </Card.Body>
          </Row>
        </Card>
      </Row>
      {isSignedIn && (
        <Row
          onClick={() => {
            if (isSignedIn) return history.push("/mylist");
          }}
        >
          <Card style={CardStyle(bgColor)}>
            <Row>
              <Image
                src={series}
                style={ImageStyle()}
                className={"hover-btn-animation"}
                alt={"movies"}
              ></Image>
              <Card.Body
                style={{
                  border: "none",
                  maxWidth: "74%",
                  paddingTop: "3%",
                  cursor: "pointer",
                }}
                className={"headerAuthOnhover hover-btn-animation"}
              >
                My List
              </Card.Body>
            </Row>
          </Card>
        </Row>
      )}
      <Row>
        <Card style={CardStyle(bgColor)}>
          <Row>
            <Image
              src={devices}
              alt={"devices support"}
              className={"hover-btn-animation"}
              style={ImageStyle()}
            ></Image>
            <Card.Body
              style={{
                border: "none",
                maxWidth: "74%",
                paddingTop: "3%",
                cursor: "pointer",
                cursor: "pointer",
              }}
              className={"headerAuthOnhover hover-btn-animation"}
            >
              Devices
            </Card.Body>
          </Row>
        </Card>
      </Row>

      <Row className={"account-logout"}>
        <Card
          style={{ ...CardStyle(bgColor), minHeight: "12vh", border: "none" }}
        >
          <Row className="mx-auto">
            <Figure
              style={FigureStyle.figure()}
              onClick={handleAccount}
              className={"headerAuthOnhover"}
            >
              <div className="account-logout-icon-wrapper">
                <Figure.Image
                  className="figure-icon hover-btn-animation"
                  src={account}
                  alt="account"
                ></Figure.Image>
              </div>
              <Figure.Caption className="figure-caption">
                Account
              </Figure.Caption>
            </Figure>
            <Figure
              style={FigureStyle.figure()}
              onClick={() => {
                handleSignInClick(
                  header_user_config.url,
                  header_user_config.currenturl
                );
                setShow(false);
              }}
              className={"headerAuthOnhover"}
            >
              <div className="account-logout-icon-wrapper">
                <Figure.Image
                  className="figure-icon hover-btn-animation"
                  src={logout}
                  alt="logout"
                ></Figure.Image>
              </div>
              <Figure.Caption style={FigureStyle.captionLogout()}>
                Logout
              </Figure.Caption>
            </Figure>
          </Row>
        </Card>
      </Row>

      {/* <Row>
        <Button
          onClick={() => {
            dispatch({ type: "RESET_SIGIN" });
            history.push("/signUp");
          }}
          style={SubscribeBtnStyle}
          className="mx-auto"
        >
          Subscribe
        </Button>
      </Row> */}
    </Container>
  );
};

export const MenueCard = ({
  show,
  setShow,
  icons,
  handleSignInClick,
  dispatch,
  history,
  header_user_config,
  isSignedIn,
  isSubscribed,
  bgColor,
}) => {
  return (
    <SideNav
      navStyle={{
        minWidth: "30%",
        minHeight: "100%",
        height: "auto",
        backgroundColor: bgColor,
      }}
      showNav={show}
      onHideNav={() => setShow(false)}
      itemStyle={{ backgroundColor: bgColor }}
      openFromRight={false}
      itemHoverStyle={{ backgroundColor: "#CDDC39" }}
      isSubscribed={isSubscribed}
    >
      <SideMenuContent
        icons={icons}
        setShow={setShow}
        handleSignInClick={handleSignInClick}
        dispatch={dispatch}
        history={history}
        header_user_config={header_user_config}
        isSignedIn={isSignedIn}
        isSubscribed={isSubscribed}
        bgColor={bgColor}
      />
    </SideNav>
  );
};

export const AuthenticatedUser = () => {
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor, bgColor } = colors;
  return (
    <HeaderContext.Consumer>
      {({
        profile,
        setShow,
        show,
        handleSignInClick,
        emailAddress,
        icons,
        dispatch,
        history,
        header_user_config,
        isSignedIn,
        isSubscribed,
        firstLtrFirstName,
      }) => (
        <>
          {firstLtrFirstName ? (
            <Avatar
              name={firstLtrFirstName}
              alt="signed-in avatar"
              id="signedIn"
              className={"avatar avatar-icon"}
              onClick={() => setShow(!show)}
              size="40"
              round={true}
              color={primaryBtnColor}
            />
          ) : (
            <img
              src={profile}
              // src={account}
              alt="signed-in avatar"
              id="signedIn"
              className={"avatar avatar-icon"}
              onClick={() => setShow(!show)}
            />
          )}
          <MenueCard
            setShow={setShow}
            show={show}
            icons={icons}
            handleSignInClick={handleSignInClick}
            dispatch={dispatch}
            history={history}
            header_user_config={header_user_config}
            isSignedIn={isSignedIn}
            isSubscribed={isSubscribed}
            bgColor={bgColor}
          />
        </>
      )}
    </HeaderContext.Consumer>
  );
};

export default function UserAuth() {
  return (
    <HeaderContext.Consumer>
      {({ handleSignInClick, header_user_config }) => (
        <>
          {header_user_config && header_user_config.showbtn && (
            <Button
              onClick={() =>
                handleSignInClick(
                  header_user_config.url,
                  header_user_config.currenturl
                )
              }
              className="authuser-btn-style hover-btn-animation"
            >
              {header_user_config && header_user_config.btntxt}
            </Button>
          )}
          {header_user_config && header_user_config.avatar && (
            <AuthenticatedUser />
          )}
        </>
      )}
    </HeaderContext.Consumer>
  );
}
