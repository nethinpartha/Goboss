import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { pathOr, equals } from 'ramda';
import { getCookie, deleteCookie } from '../helpers/authentication';
import { cgetQueryStringParams } from '../helpers/getQueryParams';
import { signinActions } from '../actions/signinactions';
import { showModalComAction } from '../actions/showmodal.action';
import { socialSignInService } from '../services/socialsigninservice';
import { __parseHeaderContent } from '../selectors/headerselector';
import UserInfoSelector from '../selectors/getuserinformationselector';
import ProfileInfoSelector from '../selectors/profileinfoselector';
import { HeaderConfiguration } from './header-signin-config';
import { __parseThemeSelector } from '../selectors/themestyleselector';
import logotent from '../assets/logotent.png';
import profile from '../assets/profile.svg';

export const useHeaderConfig = () => {
  const header_user_config = HeaderConfiguration();
  // React redux dispatcher and selectors
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [socialSignInRetry, setSocialSignInRetry] = useState(0);
  // State Selectors
  const usernameCookie = getCookie('username');
  const themes = useSelector(state => pathOr(null, ['ThemeState'])(state));
  const themename = pathOr('default', ['themeName'])(themes);
  const emailAddress = useSelector(state => pathOr(usernameCookie ? usernameCookie : '',
    ['userAuth', 'emailaddress', 'username'])
    (state));
  const emailValidationAddress = useSelector(state => pathOr('', ['Emailvalidation', 'emailaddress', "username"])(state))
  const [displaysearch, setDisplaySearch] = useState(false)
  const [displaycategories, setdisplaycategories] = useState(false)
  // header layout
  const headerLayout = pathOr({}, ['layout', 'header'], themes);
  const { bgColor: headerbgclr } = headerLayout;
  const signedInStatus = useSelector(state => pathOr('',
    ['userAuth', 'signInstatus', 'responseCode'])(state));
  const isSignedIn = equals(200, signedInStatus);
  // is facebook login true
  const isFacebookAuthenticated = useSelector(state => pathOr('',
    ['userAuth', 'signInstatus', 'isFacebookUser'])(state));
  //  is google login true
  const isGoogleAuthenticated = useSelector(state => pathOr('',
    ['userAuth', 'signInstatus', 'isGoogleUser'])(state))
  // logo - currying technique
  const logo = pathOr('', ['logoImg'])(themes);

  const icons = pathOr('', ['icons'])(themes);
  const { showSearch, originals } = __parseHeaderContent();
  const { firstName, lastName } = ProfileInfoSelector();
  let firstLtrFirstName = firstName.charAt(0);
  // Destructure the theme props 
  const {
    primaryBtnColor: primBtCol,
    primaryFontColor: pFontClr,
  } = pathOr({}, ['colors'], themes);

  // Avatar icon click 
  const [show, setShow] = useState(false);

  // is user subscribed
  let { isSubscribed, userIsVerified } = UserInfoSelector();
  const { isSignIn } = __parseThemeSelector();
  useEffect(() => {
    if (location.pathname == '/' || location.pathname.toLowerCase().includes('home')) {
      setDisplaySearch(showSearch)
      setdisplaycategories(true)
    }
    else if (location.pathname.toLowerCase().includes('content')) {
      setDisplaySearch(showSearch)
      setdisplaycategories(true)
    } else if (location.pathname.toLowerCase().includes('search')) {
      setDisplaySearch(showSearch)
      setdisplaycategories(true)
    }
    else if (location.pathname.toLowerCase().includes('mylist')) {
      setDisplaySearch(showSearch)
      setdisplaycategories(true)
    }
    else if (location.pathname.toLowerCase().includes('verify-email')
      || location.pathname.toLowerCase().includes('paymentoptions') ||
      location.pathname.toLocaleLowerCase().includes('cardcheckout') ||
      location.pathname.toLocaleLowerCase().includes('membership')) {
      setDisplaySearch(false)
    }
    else if (
      // location.pathname.toLowerCase().includes('accountdetails')
      // ||
      location.pathname.toLowerCase().includes('activatedevice') ||
      location.pathname.toLowerCase().includes('billingdetails')
      || location.pathname.toLowerCase().includes('activate/tv')
    ) {
      setDisplaySearch(false)
    }
    else {
      setDisplaySearch(showSearch)
      setdisplaycategories(true)
    }
  }, []);

  useEffect(() => {
    let socialSignInRedirect = cgetQueryStringParams(window.location.search);
    let state = pathOr('', ['state'])(socialSignInRedirect)
    let code = pathOr('', ['code'])(socialSignInRedirect)
    if (state && code && !isSignedIn && socialSignInRetry === 0) {
      setSocialSignInRetry(socialSignInRetry + 1);
      dispatch(signinActions.signin({
        username: emailValidationAddress,
        accessToken: code,
        isSocialLogin: {
          isFacebookUser: true,
          isGoogleUser: false
        },
        cb: (user) => {
          // dispatch(showModalComAction.CloseModal('signin'));
        }
      }))
    }
    return () => {
    }
  }, [])


  const useraction = async (isSignedIn, url, currenturl) => {
    if (isSignedIn) {
      // await analyticsService.addeventanalytics('logout', '');
      await dispatch(signinActions.signout());
      dispatch(signinActions.resetSignInParams());
      dispatch({ type: 'RESET_SUBSCRIPTION' });
      deleteCookie('signInStatus');
      deleteCookie('username');
      dispatch({ type: 'RESET_SIGIN' });
      if (isFacebookAuthenticated) {
        socialSignInService.fbSessionSignout();
      } else if (isGoogleAuthenticated === true) {
        socialSignInService.googleLogout();
      }
      return window.location.reload;
    }

    if (currenturl && (currenturl.toLowerCase().includes('home')
      || currenturl.toLowerCase().includes('signup'))) {
      dispatch({ type: 'RESET_SIGIN' });
    }
    if (currenturl && (currenturl.toLowerCase().includes('home')
      || currenturl.toLowerCase().includes('content')
      || currenturl.toLowerCase().includes('search')
    )) {
      dispatch({ type: 'RESET_SIGIN' });
      dispatch({ type: "EMAIL_ADDRESS_RESET" });
      dispatch({ type: "RESET_USER_INFORMATION" });
      dispatch(showModalComAction.ShowModal('signin'));
      return;
    }
    return history.push(url);
  }

  // Sign In navigator or Sign out action
  const handleSignInClick = (url, currenturl) => {
    switch (currenturl) {
      case '/home':
      case '/accountdetails':
      case '/streamingdetails':
      case '/activate/tv':
      case '/billingdetails':
      case '/paymentoptions':
      case '/cardcheckout':
      case '/membership':
      case '/changeplan':
      case '/success':
      case '/mylist':
      case '/search':
      case '/content':
      case '/browse':
      case '/reviewsandrating':
        return useraction(isSignedIn, url, currenturl);
      default:
        return history.push(url);
    }
  }

  const HeaderContextState = {
    header_user_config,
    logotent,
    logo,
    themes,
    themename,
    usernameCookie,
    handleSignInClick,
    emailAddress,
    isSignedIn,
    dispatch,
    history,
    icons,
    category: {
      style: `${pFontClr}`
    },
    button: {
      style: `${primBtCol}`
    },
    profile,
    setShow,
    show,
    displaysearch,
    displaycategories,
    isSubscribed,
    isSignIn,
    firstLtrFirstName,
    originals
  }
  return { HeaderContextState }
}