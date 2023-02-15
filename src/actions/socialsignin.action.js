import { socialsignin } from '../constants/socialsignin.constants';


export const socialSignInAction = {
  facebookSignout
}

function facebookSignout() {
  return (dispatch) => {
    dispatch({ type: socialsignin.FACEBOOK_SIGNOUT_REQUESTED });
    window.FB.logout(function (response) {
      // user is now logged out
      dispatch({ type: socialsignin.FACEBOOK_SIGNOUT_SUCCESS, response });
    });
  }
}