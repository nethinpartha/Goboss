import React, { useState, useEffect, useRef } from "react";
import { pathOr, equals } from "ramda";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EmailValidationSelector from "../selectors/emailValidationSelector";
import { socialSignInService } from "../services/socialsigninservice";
import { showModalComAction } from "../actions/showmodal.action";
import { signinActions } from "../actions/signinactions";
import { __parseThemeSelector } from "../selectors/themestyleselector";
import UserInfoSelector from "../selectors/getuserinformationselector";

export const useSignInAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [emailverificationdone, setemailverificationdone] = useState(false);

  const [emailverificationpending, setemailverificationpending] =
    useState(false);
  const [facebookAuthAvailable, setFacebookAuthAvailabel] = useState(true);
  const [googleAuthEnabled, setgoogleAuthEnabled] = useState(true);
  const currentpagetoshow = useSelector((state) =>
    pathOr(false, ["ShowModal", "currentpagetoshow"])(state)
  );
  const reRef = useRef();
  let { userIsVerified } = UserInfoSelector();
  // const [hasText, setHasText] = useState(false);
  const [showPassWord, setShowPassword] = useState(false);
  const { isSocialLogin, socialLoginError } = EmailValidationSelector();
  // falsy sign in === due to incorrect password
  const [incorrectPassword, setIncorrectPassword] = useState("");

  // React form handle methods
  const { handleSubmit, register, errors } = useForm();

  // selectors
  const isExists = useSelector((state) =>
    pathOr("", ["Emailvalidation", "emailaddress", "isExists"])(state)
  );
  const loading = useSelector((state) =>
    pathOr(false, ["userAuth", "loading"])(state)
  );
  const message = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "message"])(state)
  );
  const emailAddress = useSelector((state) =>
    pathOr("", ["Emailvalidation", "emailaddress", "username"])(state)
  );
  let isVerified = useSelector((state) =>
    pathOr("", ["Emailvalidation", "emailaddress", "isVerified"])(state)
  );
  const reload = useSelector((state) =>
    pathOr("", ["userAuth", "reload"])(state)
  );

  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );

  const isSignedIn = equals(200, signedInStatus);
  const [recapchaAvailable, setRecapchaAvailable] = useState(0);
  const { colors, socialSignIn, isEmailVerification } = __parseThemeSelector();
  const primaryBtnColor = pathOr("", ["primaryBtnColor"])(colors);
  const [errorRecapcha, setError] = useState("");
  if (isEmailVerification === false && isExists) {
    isVerified = true;
  }
  const showEmailPreventiveMsg = useSelector((state) =>
    pathOr("", ["ErrorAlert", "message"])(state)
  );

  // if the user is signed in, then redirect them to home page,
  // and is reload necessary,
  // reload the page to effeciate the cookies on to browser
  useEffect(() => {
    // if (isSignedIn) {
    //   (async function () {
    //     await analyticsService.addeventanalytics("login", "");
    //   })();
    // }
    if (reload) {
      dispatch({ type: "RESET_RELOAD_STATUS" });
    }
  }, [isSignedIn, reload, dispatch]);

  useEffect(() => {
    if (
      message &&
      typeof message === "string" &&
      message.toLowerCase().includes("user not found")
    ) {
      history.push("/signUp");
    }
    return () => {
      // clean up
    };
  }, [message]);

  useEffect(() => {
    setRecapchaAvailable(document.getElementsByClassName("recapcha").length);
  });

  // component did mount / initialiser constructor
  useEffect(() => {
    if (emailAddress && isExists) {
      setInputs({ ...inputs, email: emailAddress });
    }
    socialSignInService.fbSessionSignout();
    socialSignInService.googleLogout();
  }, []);

  // New user, sign them up!!!
  useEffect(() => {
    if (isExists === false && !isSignedIn) {
      dispatch(showModalComAction.ShowModal("signup"));
      return undefined;
    }
  }, [isExists]);

  // useEffect for emailAddress
  useEffect(() => {
    if (isVerified === true && isExists === true) {
      return setemailverificationdone(true);
    } else if (isExists === true) {
      return setemailverificationpending(true);
    }
    setemailverificationdone(false);
    setemailverificationpending(false);
  }, [isVerified, isExists]);

  const onSubmit = async (values) => {
    if (isExists) {
      if (recapchaAvailable === 1) {
        let token;
        if (reRef && reRef?.current) {
          token = await reRef.current.getValue();
          setError("");
          reRef.current.reset();
        }
        if (!token) return setError("Please check the box to validate");
      }

      return dispatch(
        signinActions.signin({
          username: inputs.email,
          password: values.password,
          accessToken: undefined,
          isSocialLogin: {
            isFacebookUser: false,
            isGoogleUser: false,
            isAppleUser: false,
          },
          cb: (user) => {
            if (!user) {
              setIncorrectPassword("Incorrect password!");
              return;
            }
            dispatch(showModalComAction.CloseModal("signin"));
          },
        })
      );
    }

    dispatch(
      signinActions.preSignInAuth({
        username: inputs.email,
        accessToken: "",
        isSocialLogin: {
          isFacebookUser: false,
          isGoogleUser: false,
          isAppleUser: false,
        },
      })
    );
    setInputs({ ...inputs, email: values.email, password: values.password });
  };

  //  show, Forgot password content in popup
  const handleForgotPassword = () => {
    dispatch(showModalComAction.ShowModal("forgotpassword"));
    // return history.push("/forgotpassword");
  };
  return {
    history,
    handleForgotPassword,
    inputs,
    dispatch,
    setIncorrectPassword,
    reRef,
    recapchaAvailable,
    isExists,
    onSubmit,
    primaryBtnColor,
    errorRecapcha,
    loading,
    socialSignIn,
    emailverificationdone,
    emailverificationpending,
    facebookAuthAvailable,
    googleAuthEnabled,
    setgoogleAuthEnabled,
    handleSubmit,
    register,
    errors,
    showPassWord,
    setShowPassword,
    currentpagetoshow,
    isSocialLogin,
    incorrectPassword,
    isVerified,
    message,
    setInputs,
    showEmailPreventiveMsg,
    socialLoginError,
    emailAddress,
  };
};
