import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

export function LoggedInDeviceSelector() {
  let devices = useSelector(state => pathOr([], ['GetAllaActivateDevice', 'response', 'result'])(state));
  let loading = useSelector(state => pathOr(false, ['GetAllaActivateDevice', 'loading'])(state));
  return {
    loading,
    loggedInDevices: devices
  }
}

export default LoggedInDeviceSelector;
