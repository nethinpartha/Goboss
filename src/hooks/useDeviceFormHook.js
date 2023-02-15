import React, { useState, useEffect, useRef } from 'react';
import { pathOr } from 'ramda';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { activateDeviceAction } from '../actions/activatedevice.action';
import { useMediaQuery } from "../components/Header/viewportHook";
import { __parseThemeSelector } from "../selectors/themestyleselector";
import { removeTrailingSlash } from "../helpers/helper";

export const useDeviceFormHook = () => {
  const location = useLocation();
  let currentRoute = removeTrailingSlash(pathOr("", ["pathname"])(location));
  const { handleSubmit, register, errors } = useForm();
  const [formField, setFormField] = useState({
    forminput1: "",
    forminput2: "",
    forminput3: "",
    forminput4: "",
    forminput5: "",
    forminput6: "",
  });
  const dispatch = useDispatch();
  const { colors } = __parseThemeSelector();
  const loading = useSelector((state) => pathOr(false, ['ActivateDevice', 'loading'])(state));
  const { primaryBtnColor, primaryTxtColor } = colors;
  const [error, setError] = useState("");
  const onSubmit = (values) => {
    let otp = "";
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        otp += value;
      }
    });
    if (otp.length === 6) {

      if (currentRoute.toLowerCase().includes('accountdetails')) {
        return dispatch(activateDeviceAction.activatedevice(otp, true));
      }
      return dispatch(activateDeviceAction.activatedevice(otp));
    }
    else if (otp.length < 6) {
      setError("Invalid OTP");
      return;
    }
  };
  return {
    setError,
    error,
    dispatch,
    errors,
    onSubmit,
    primaryBtnColor,
    colors,
    formField,
    handleSubmit,
    register,
    setFormField,
    primaryTxtColor,
    loading
  }
}