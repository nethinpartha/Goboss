import React from "react";
import parse from "html-react-parser";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";

export const AuthMessage = ({
  isExists = false,
  isVerified = false,
  message = "",
  isSocialLogin,
  showEmailPreventiveMsg,
  socialLoginError,
  emailAddress,
}) => {
  const renderMessage = () => {
    const { isEmailVerification } = __parseThemeSelector();

    if (socialLoginError && showEmailPreventiveMsg) {
      return showEmailPreventiveMsg;
    }
    if (isExists && isExists === true) {
      if (isVerified === false && isEmailVerification === true) {
        return parse(
          `<h6 style="text-align:left;color:white;line-height:1.6;font-size:16px;">Please verify your email <b>${emailAddress}</b>. Check your inbox for the verification mail.</h6>`
        );
      }
      if (
        (isSocialLogin === false && isVerified) ||
        (isSocialLogin === false && isEmailVerification === false)
      )
        return `Welcome back! Enter your Password to sign in`;
      if (isSocialLogin && showEmailPreventiveMsg)
        return showEmailPreventiveMsg;
    } else if (!isExists && isExists === false) {
      return `Add a password to set up your account`;
    } else {
      return `Enter your registered email to sign in, else we'll create
      you an account.`;
    }
  };
  return <>{renderMessage()}</>;
};
