import React, { useState, useEffect } from "react";
import { pathOr, equals } from "ramda";
import { useSelector, useDispatch } from "react-redux";
import SignIn from "../components/Auth/SignIn/index";
import SignUp from "../components/Auth/SignUp";
import { SuccessMessage } from "../frontend-library/molecules/SuccessMessage/successmessage";
import ForgotPassword from "../components/Auth/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import MemberShip from "../pages/membership";
import StripeCheckoutFlow from "../pages/StripeCheckoutFlow";
import { showModalComAction } from "../actions/showmodal.action";
import { __isThemeOfType } from "../utils/tenant";
import { __parseThemeSelector } from "../selectors/themestyleselector";
import { useSignInAuth } from "../hooks/useSignInAuth";

const popUpTitle = {
  signin: "Sign in or create an account",
  emailverificationdone: "Sign In",
  forgotpassword: "Forgot Password",
  membership: "SELECT A PLAN",
  signup: "Add a password to set up your account",
  signupsucess: "User created successfully!",
  SubscriptionSuccess: "Subscription Successful",
  toverifyemail: "Email verification pending",
  resetPassword: "Reset Password",
  paymentpage: "Set up your credit or debit card",
};

export const useModal = () => {
  const dispatch = useDispatch();
  const [currentpage, setCurrentPage] = useState("signin");
  const showModalComp = useSelector((state) =>
    pathOr(false, ["ShowModal", "show"])(state)
  );
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);
  const currentpagetoshow = useSelector((state) =>
    pathOr(false, ["ShowModal", "currentpagetoshow"])(state)
  );
  const email = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "username"])(state)
  );
  const [showModal, setModalShow] = useState(false);
  const [verticallyCentered, setVerticallCentered] = useState(false);
  const { colors, isEmailVerification } = __parseThemeSelector();
  let isPaymentPage = currentpage === "paymentpage";
  const { emailverificationdone } = useSignInAuth();
  function handleClose() {
    setModalShow(false);
    dispatch(showModalComAction.CloseModal("signin"));
    if (!isSignedIn) dispatch({ type: "EMAIL_ADDRESS_RESET" });
  }

  useEffect(() => {
    setModalShow(showModalComp);
    setCurrentPage(currentpagetoshow);
    if (
      currentpagetoshow === "signupsucess" ||
      currentpagetoshow === "SubscriptionSuccess"
    ) {
      setVerticallCentered(true);
    }
  }, [showModalComp, currentpagetoshow]);

  const renderComponent = () => {
    if (currentpage === "signin") {
      return <SignIn />;
    } else if (currentpage === "forgotpassword") {
      return <ForgotPassword />;
    } else if (currentpage === "membership" && isEmailVerification === true) {
      return <MemberShip />;
    } else if (currentpage === "signup") {
      return <SignUp />;
    } else if (currentpage === "ResetPassword") {
      return <ResetPassword />;
    } else if (currentpage === "signupsucess") {
      // the following control flow is added for demo, as we dont have the post signup email verification process
      // for Dorm to be followed.
      if (__isThemeOfType()) {
        dispatch(showModalComAction.CloseModal("signin"));
        return;
      }
      return (
        <SuccessMessage
          dispatch={dispatch}
          colors={colors}
          message={`<h6 style="text-align:left;font-size:16px;">Congratulations! Thanks for signing up.</h6>`}
          subcontent={
            isEmailVerification
              ? `<h6 style="text-align:left;font-size:16px;">Please check your email <b>${email}</b> to verify your identity.</h6>`
              : ""
          }
          showAcptBtn={true}
          showCheckIcon={true}
        />
      );
    } else if (currentpage === "SubscriptionSuccess") {
      return (
        <SuccessMessage
          dispatch={dispatch}
          colors={colors}
          message={"Congratulations! Start enjoying your favorite content."}
          showAcptBtn={true}
          showCheckIcon={true}
        />
      );
    } else if (
      currentpage === "toverifyemail" &&
      isEmailVerification === true
    ) {
      return (
        <SuccessMessage
          dispatch={dispatch}
          colors={colors}
          message={`<h6 style="text-align:left;font-size:16px;line-height:1.6;">Please verify your email &nbsp;<b>${email}</b>. Check your inbox for the verification mail.</h6>`}
          showAcptBtn={false}
          showCheckIcon={false}
        />
      );
    } else if (currentpage === "paymentpage") {
      return <StripeCheckoutFlow />;
    } else {
      return <SignIn />;
    }
  };

  const HeaderMessage = () => {
    switch (currentpage) {
      case "signin":
        return (
          <>
            {emailverificationdone
              ? popUpTitle["emailverificationdone"]
              : popUpTitle["signin"]}
          </>
        );
      case "forgotpassword":
        return <>{popUpTitle["forgotpassword"]}</>;
      case "membership":
        return <>{popUpTitle["membership"]}</>;
      case "signup":
        return <>{popUpTitle["signup"]}</>;
      case "signupsucess":
        return <>{popUpTitle["signupsucess"]}</>;
      case "SubscriptionSuccess":
        return <>{popUpTitle["SubscriptionSuccess"]}</>;
      case "toverifyemail":
        return <>{popUpTitle["toverifyemail"]}</>;
      case "ResetPassword":
        return <>{popUpTitle["resetPassword"]}</>;
      case "paymentpage":
        return <>{popUpTitle["paymentpage"]}</>;
      default:
        return <SignIn />;
    }
  };

  return {
    showModal,
    handleClose,
    isPaymentPage,
    verticallyCentered,
    HeaderMessage,
    renderComponent,
  };
};
