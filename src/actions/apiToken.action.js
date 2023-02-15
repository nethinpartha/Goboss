import { apiTokenService } from "../services";
import { apiTokenConstants } from "../constants";
import { themeActions } from "./theme.action";
import { footercontentaction } from "./footer.action";
import { headercontentaction } from "./header.action";
import { geoLocation } from "./getgeolocationdetailaction";

export const apiTokenActions = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));
    apiTokenService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        dispatch(themeActions.themes());
        if (!sessionStorage.getItem('getGeolocationTrue')) {
          dispatch(geoLocation.getGeolocationAction());
        }
        if (!sessionStorage.getItem('setfootercontent')) {
          dispatch(footercontentaction.footercontent());
        }
        if (!sessionStorage.getItem('setheadercontent')) {
          dispatch(headercontentaction.headercontent());
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: apiTokenConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: apiTokenConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: apiTokenConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  apiTokenService.logout();
  return { type: apiTokenConstants.LOGOUT };
}
