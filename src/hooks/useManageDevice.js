import React, { useState, ueEffect, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { clearAllDevicesAction } from '../actions/clearDevices.action';
import { showAlertAction } from "../actions/showalert.action";
import loggedInDeviceSelector from "../selectors/getactivedeviceselector";
import { __parseThemeSelector } from "../selectors/themestyleselector";
import { getactivateDeviceAction } from '../actions/getactivedevices.action';

export const useManageDevice = () => {
  const { loggedInDevices, loading } = loggedInDeviceSelector();
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor, primaryTxtColor } = colors;
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getactivateDeviceAction.getactivatedevice());
  }, []);

  const handleClearAll = () => {
    dispatch(
      showAlertAction.ShowAlertModal({
        title: "Clear All Devices",
        body: "Logout of all sessions?",
      })
    );
  }

  function handleAcceptanceManageDevice() {
    dispatch(clearAllDevicesAction.clearAllDevices(() => {
      history.push('/');
      return window.location.reload();
    }));
  }

  return {
    loggedInDevices,
    colors,
    primaryBtnColor,
    primaryTxtColor,
    dispatch,
    handleClearAll,
    handleAcceptanceManageDevice,
    loading
  }
}