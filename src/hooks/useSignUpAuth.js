import React, { useState, useEffect, useRef } from "react";
import { pathOr } from "ramda";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signupActions } from "../actions/signupactions";
import { __parseThemeSelector } from "../selectors/themestyleselector";

export const useSignUpAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [recapchaAvailable, setRecapchaAvailable] = useState(0);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const reRef = useRef();
  const emailAddress = useSelector((state) =>
    pathOr("", ["Emailvalidation", "emailaddress", "username"])(state)
  );
  const [error, setError] = useState("");

  const responseCode = useSelector((state) =>
    pathOr(null, ["Emailvalidation", "emailaddress", "responseCode"])(state)
  );
  const loading = useSelector((state) =>
    pathOr(false, ["userAuth", "loading"])(state)
  );
  const { colors } = __parseThemeSelector();
  const primaryBtnColor = pathOr("", ["primaryBtnColor"])(colors);
  // React form handle methods
  const { handleSubmit, register, errors } = useForm();
  const [showPassWord, setShowPassword] = useState(false);
  const isVerified = useSelector((state) =>
    pathOr("", ["Emailvalidation", "emailaddress", "isVerified"])(state)
  );
  const onSubmit = async (values) => {
    let token;
    if (recapchaAvailable === 1) {
      if (reRef && reRef?.current) {
        token = await reRef.current.getValue();
        setError("");
        reRef.current.reset();
      }
      if (!token) return setError("Please check the box to validate");
    }
    dispatch(
      signupActions.signup({
        username: inputs.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phone,
        token,
        accessToken: "",
        isSocialLogin: {
          isFacebookUser: false,
          isGoogleUser: false,
          isAppleUser: false,
        },
        cb: (user) => {
          // history.push("/membership")
          if (user?.error) {
            return setError(user.error);
          }
        },
      })
    );
    // analyticsService.addeventanalytics("signup", "");
    setInputs({
      ...inputs,
      email: values.email,
      password: values.password,
      phoneNumber: values.phone,
      firstName: values.firstName,
      lastName: values.lastName,
    });
  };

  // useEffect for emailAddress
  useEffect(() => {
    if (!emailAddress) return;
    setInputs({ ...inputs, email: emailAddress });
  }, [emailAddress, responseCode]);

  useEffect(() => {
    setRecapchaAvailable(document.getElementsByClassName("recapcha").length);
  });
  return {
    recapchaAvailable,
    setRecapchaAvailable,
    emailAddress,
    inputs,
    setInputs,
    handleSubmit,
    register,
    errors,
    loading,
    error,
    reRef,
    history,
    showPassWord,
    primaryBtnColor,
    onSubmit,
    setShowPassword,
    isVerified,
  };
};
