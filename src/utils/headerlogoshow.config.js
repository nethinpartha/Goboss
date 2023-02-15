import React from "react";
import { pathOr } from "ramda";
import { useLocation } from "react-router-dom";
import { removeTrailingSlash } from "../helpers/helper";
import { __isThemeOfType } from './tenant';


export function ShouldShowLogo() {
  let show = true;
  const location = useLocation();
  let currentRoute = removeTrailingSlash(pathOr("", ["pathname"])(location));
  if (currentRoute.toLowerCase().includes('content')) {
    currentRoute = currentRoute.split('/')[0]
  }
  switch (currentRoute) {
    case "/":
    case "home":
    case "content":
    case "mylist":
    case "search":
    case "accountdetails":
      return __isThemeOfType() ? !show : show;
    case "activatedevice":
    case "billingdetails":
      return __isThemeOfType() ? show : show;
    default:
      return show;
  }
}