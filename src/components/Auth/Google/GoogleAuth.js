import React from 'react';
import GoogleLogin from "react-google-login";
import './googlestyle.scss';
import googlelogo from './googlelogo.png';
import { useGoogleAuth } from '../../../hooks/useGoogleAuth';

const googleID = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

export default function GoogleAuth() {
  const { responseGoogle } = useGoogleAuth();
  return googleID ? (
    <>
      <div className="google-auth-wrapper">
        <GoogleLogin
          clientId={googleID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              className="google-signin-button"
              disabled={renderProps.disabled}
            ><img src={googlelogo} alt="google-logo" />
            </button>
          )}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </>
  ) : null;
}
