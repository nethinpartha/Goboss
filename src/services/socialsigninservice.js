export const socialSignInService = {
  fbSessionSignout,
  googleLogout
}

async function fbSessionSignout() {
  var uid = "";
  var accessToken = "";
  try {
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        uid = response.authResponse.userID;
        accessToken = response.authResponse.accessToken;
        return window.FB.logout(function (response) {
          // user is now logged out
        });
      } else if (response.status === 'not_authorized') {

      } else {

      }
    });

  } catch (e) {
  }
}

async function googleLogout() {
  try {
    if (!window.gapi) return;
    var auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    });
    auth2.disconnect().then(function () {
    })
  } catch (e) {
    console.log(e, 'error while disconnecting');
  }
}