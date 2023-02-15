import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import fblogo from "./fblogo.png";
import "./facebookstyle.scss";
import { useFacebookAuth } from "../../../hooks/useFacebookAuth";

const AppID = process.env.REACT_APP_FACEBOOK_APP_ID;

const Facebook = () => {
  const { responseFacebook, userData, componentClicked } = useFacebookAuth();
  return !userData.isLogedin && AppID ? (
    <div style={{ margin: "auto 0" }}>
      <FacebookLogin
        appId={AppID}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        autoLoad={false}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="facebook-signin-button"
          >
            <img src={fblogo} alt="fb login" />
          </button>
        )}
        // cssClass="my-facebook-button-class"
        // icon="fa fa-facebook mr-1"
      />
    </div>
  ) : null;
};

export default Facebook;
