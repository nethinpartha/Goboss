import React from 'react';
import { pathOr, equals } from 'ramda';

import { useSelector, useDispatch } from "react-redux";

export default () => {
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);

  return [isSignedIn];
}