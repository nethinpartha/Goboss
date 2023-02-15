import React from 'react';
import { pathOr } from 'ramda';
import { Button, Image } from 'react-bootstrap';
import appleLogo from '../../../assets/apple-black-logo.png';
import AppleSignin from 'react-apple-signin-auth';
import { useAppleAuth } from "../../../hooks/useAppleSignin";
import { showErrorAlertAction } from '../../../actions/erroralert.action';


const AppleAuth = () => {
  const { responseAppleLogin, componentClicked, dispatch } = useAppleAuth();

  const handleError = (error) => {
    return dispatch(showErrorAlertAction.ShowErrorAlert(`${pathOr('Error while authenticating', ['error'], error)}`, `Something went wrong. Please try later.`));
  }

  return <div style={{ margin: 'auto 0' }} className="google-auth-wrapper">
    <AppleSignin
      /** Auth options passed to AppleID.auth.init() */
      authOptions={{
        clientId: `${process.env.REACT_APP_APPLE_SERVICE_ID}`,
        scope: 'email name',
        redirectURI: `${process.env.REACT_APP_APPLE_REDIRECT_URI}`,
        state: 'state',
        responseMode: 'form_post',
        nonce: 'nonce',
        usePopup: true,
      }} // REQUIRED
      /** General props */
      uiType="dark"
      /** className */
      className="apple-auth-btn"
      /** Removes default style tag */
      noDefaultStyle={false}
      /** Extra controlling props */
      /** Called upon signin success in case authOptions.usePopup = true -- which means auth is handled client side */
      onSuccess={(response) => responseAppleLogin(response)} // default = undefined
      /** Called upon signin error */
      onError={(error) => handleError(error)} // default = undefined
      /** Skips loading the apple script if true */
      skipScript={false} // default = undefined
      /** render function - called with all props - can be used to fully customize the UI by rendering your own component  */
      render={(props) =>
        <Button
          style={{
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            background: "#cccccc",
            border: "none"
          }}
          {...props}
        >
          <Image
            onClick={componentClicked}
            src={appleLogo}
            alt="apple-logo"
          />
        </Button>}
    />
  </div>

}


export default AppleAuth;