import { combineReducers } from "redux";

import ThemeState from "./themeReducer";
import HomepageState from "./homepagereducer";
import search from "./searchreducer";
import searchcontent from "./searchcontentreducer";
import subscriptionRequested from "../components/HeroBannerWithIcon/herobannerreducer";
import ContentDetails from "./contentdetailreducer";
import castdetail from "./castdetailsreducer";
import usercontentdetails from "./usercontentdetailsreducer";
import userAuth, { resetpassword, Emailvalidation } from "./userreducer";
import ErrorAlert from "./showerroralert.reducer";
import PwdResetState from "./resetpwdreducer";
import VerifyEmail from "./verifyemailreducer";
import StaticContentReducer from "./staticpagereducer";
import ChangeEmailState from "./changeemailreducer";
import ChangePassword from "./changepwdreducer";
import watchlist from "./watchlistreducer";
import Membership from "./membershipreducer";
import ShowModal from "./showmodalreducer";
import Geolocation from "./geolocationreducer";
import ShowAlertComp from "./showalertreducer";
import Footer from "./footerreducer";
import Header from "./headerreducer";
import SubscriptionListReducer from "./subscriptionlistreducer";
import BuySubscription from "./buysubscriptionreducer";
import PaymentMethods from "./getpaymentdetailsreducer";
import UserInformation from "./getuserinformationreducer";
import UserProfile from "./getUserProfile.reducers";
import updateProfileInfo from "./updateProfileInforeducer";
import ActivateDevice from "./activatedevicereducer";
import GetAllaActivateDevice from "./getactivedevicesreducer";
import HomePageContent from "./homepagecontentreducer";
import Videoplayercontent from "./videoplayercontentreducer";
import Searchfilterparams from "./searchfilterpanelreducer";
import SearchSuggestion from "./getSearchSuggestionreducer";
import Searchfiltercount from "./searchfiltercountreducer";
import getcancellationreason from "./getcancellationresonreducer";
import CancelMembership from "./cancelsubscriptionreducer";
import ReviewsAndRatings from "./ratingsAndReviewReducer";
import CategoryReducer from "./getcategoryreducer";
import VideoSettingSelectedReducer from "./updatevideosettingreducer";
// import component reducers
const reducers = {
  ThemeState,
  StaticContentReducer,
  HomepageState,
  search,
  searchcontent,
  subscriptionRequested,
  userAuth,
  PwdResetState,
  ChangeEmailState,
  ChangePassword,
  castdetail,
  watchlist,
  usercontentdetails,
  VideoSettingSelectedReducer,
  Membership,
  Geolocation,
  ContentDetails,
  ShowModal,
  ShowAlertComp,
  Emailvalidation,
  resetpassword,
  Footer,
  Header,
  ErrorAlert,
  VerifyEmail,
  SubscriptionListReducer,
  BuySubscription,
  PaymentMethods,
  UserInformation,
  UserProfile,
  updateProfileInfo,
  ActivateDevice,
  GetAllaActivateDevice,
  HomePageContent,
  Videoplayercontent,
  Searchfilterparams,
  SearchSuggestion,
  Searchfiltercount,
  getcancellationreason,
  CancelMembership,
  ReviewsAndRatings,
  CategoryReducer,
};

const rootReducer = combineReducers({ ...reducers });

export default rootReducer;
