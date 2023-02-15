import React from "react";
import { pathOr, equals } from "ramda";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { removeTrailingSlash } from "../helpers/helper";
import { __isThemeOfType } from "../utils/tenant";

const page_header_constants = {
  forgotpassword: process.env.REACT_APP_FORGOTPASSWORD,
  home: "home",
  search: "search",
  success: "success",
  membership: "membership",
  paymentoptions: "paymentoptions",
  cardcheckout: "cardcheckout",
  resetpassword: process.env.REACT_APP_RESETPASSWORD,
  verifyemail: "verify-email",
  termsofuse: "terms-of-use",
  about: "about",
  privacy: "privacy",
  signin: "signIn",
  signup: "signUp",
  player: "player",
  accountdetails: "accountdetails",
  content: "content",
  billingdetails: "billingdetails",
  streamingdetails: "streamingdetails",
  activatedevice: "activatedevice",
  mylist: "mylist",
  changeplan: "changeplan",
  browse: "browse",
  reviewsandrating: "reviewsandrating"
};

export function HeaderConfiguration() {
  const location = useLocation();
  let currentRoute = removeTrailingSlash(pathOr("", ["pathname"])(location));
  if (currentRoute.toLowerCase().includes('content')) {
    currentRoute = currentRoute.split('/')[0]
  }
  if (currentRoute.toLowerCase().includes('verify-email')) {
    currentRoute = currentRoute.split('/')[0]
  }
  if (currentRoute.toLowerCase().includes('activate/tv')) {
    currentRoute = "activatedevice"
  }
  if (currentRoute.toLowerCase().includes('browse')) {
    currentRoute = "activatedevice"
  }
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);

  let headerConfig = {
    home: {
      avatar: isSignedIn && !__isThemeOfType() ? true : false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      showbtn: isSignedIn ? false : true,
      url: "/signIn",
      currenturl: "/home",
    },
    content: {
      avatar: isSignedIn && !__isThemeOfType() ? true : false,
      showbtn: isSignedIn ? false : true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/content",
      currenturl: "/content"
    },
    player: {
      avatar: isSignedIn && !__isThemeOfType() ? true : false,
      showbtn: isSignedIn ? false : true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      currenturl: "/player",
      url: '/'
    },
    mylist: {
      avatar: isSignedIn && !__isThemeOfType() ? true : false,
      showbtn: false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      currenturl: "/mylist",
      url: '/'
    },
    search: {
      avatar: isSignedIn && !__isThemeOfType() ? true : false,
      showbtn: isSignedIn ? false : true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      currenturl: "/search",
      url: '/search'
    },
    forgotpassword: {
      avatar: false,
      showbtn: false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      currenturl: "/forgotpassword",
    },
    verifyemail: {
      avatar: false,
      showbtn: false,
      btntxt: false,
      currenturl: "/verify-email",
    },
    resetpassword: {
      avatar: false,
      showbtn: false,
      btntxt: false,
      currenturl: "/resetpassword",
    },
    signIn: {
      avatar: false,
      showbtn: true,
      btntxt: "SIGN UP",
      url: "/signUp",
      currenturl: "/signIn",
    },
    signUp: {
      avatar: false,
      showbtn: true,
      btntxt: "Sign In",
      url: "/signIn",
      currenturl: "/signUp",
    },
    accountdetails: {
      avatar: true,
      showbtn: false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/",
      currenturl: "/accountdetails",
    },
    streamingdetails: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/streamingdetails",
    },
    billingdetails: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/billingdetails",
    },
    paymentoptions: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/paymentoptions",
    },
    cardcheckout: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/cardcheckout",
    },
    membership: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/membership",
    },
    changeplan: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/changeplan",
    },
    success: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/success",
    },
    activatedevice: {
      avatar: isSignedIn ? true : false,
      showbtn: !isSignedIn ? true : false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/activate/tv",
      currenturl: "/activate/tv",
    },
    browse: {
      avatar: isSignedIn ? true : false,
      showbtn: !isSignedIn ? true : false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/browse",
      currenturl: "/browse",
    },
    reviewsandrating: {
      avatar: isSignedIn ? true : false,
      showbtn: !isSignedIn ? true : false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/reviewsandrating",
      currenturl: "/reviewsandrating",
    },
    default: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/",
      currenturl: "/",
    },
  };

  switch (currentRoute) {
    case page_header_constants.home:
    case "/":
      return headerConfig["home"];
    case page_header_constants.forgotpassword:
      return headerConfig["forgotpassword"];
    case page_header_constants.resetpassword:
      return headerConfig["resetpassword"];
    case page_header_constants.verifyemail:
      return headerConfig["verifyemail"];
    case page_header_constants.signin:
      return headerConfig["signIn"];
    case page_header_constants.signup:
      return headerConfig["signUp"];
    case page_header_constants.mylist:
      return headerConfig["mylist"];
    case page_header_constants.search:
      return headerConfig["search"];
    case page_header_constants.content:
      return headerConfig["content"];
    case page_header_constants.player:
      return headerConfig["player"];
    case page_header_constants.accountdetails:
      return headerConfig["accountdetails"];
    case page_header_constants.billingdetails:
      return headerConfig["billingdetails"];
    case page_header_constants.activatedevice:
      return headerConfig["activatedevice"];
    case page_header_constants.streamingdetails:
      return headerConfig["streamingdetails"];
    case page_header_constants.paymentoptions:
      return headerConfig["paymentoptions"];
    case page_header_constants.cardcheckout:
      return headerConfig["cardcheckout"];
    case page_header_constants.changeplan:
      return headerConfig["changeplan"];
    case page_header_constants.membership:
      return headerConfig["membership"];
    case page_header_constants.success:
      return headerConfig["success"];
    case page_header_constants.browse:
      return headerConfig["browse"];
    case page_header_constants.reviewsandrating:
      return headerConfig["reviewsandrating"];
    default:
      return headerConfig["default"];
  }
}
