import React from "react";
import Facebook from '../Facebook/facebook';
import GoogleAuth from '../Google/GoogleAuth';
import AppleAuth from '../AppleLogin/applelogin';
import { browser } from '../../../helpers/browser';

export function SocialLoginSection({
  socialSignIn,
  facebookAuthAvailable,
  currentpagetoshow,
  emailverificationdone,
  googleAuthEnabled,
  isExists,
  loading
}) {

  return (
    <>
      {socialSignIn
        && facebookAuthAvailable
        && currentpagetoshow === "signin"
        && !emailverificationdone
        && !isExists
        ? (
          <div>
            <div className="social-signin-section">
              <div className="social-login-delimiter">
                OR
              </div>
            </div>
            {<div className="social-signin-wrapper" style={{ pointerEvents: `${loading ? "none" : ""}` }}>
              <Facebook />
              {googleAuthEnabled ? <GoogleAuth /> : null}
              {!browser.includes("safari") ? <AppleAuth /> : null}
            </div>
            }
          </div>)
        :
        null}
    </>
  )
}
