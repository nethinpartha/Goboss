import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pathOr } from "ramda";
import { Route, Switch } from "react-router-dom";
// import HomePage from "../../pages/HomePage/page-content-slot";
// import SearchResultsPageContent from "../../pages/SearchResults/search-page-content-slot";
import MyListPagePageContent from "../../pages/MyList/mylist-content-slot";
import ContentDetailsPageContent from "../../pages/ContentDetailsPage/content-details-page-slot";
import SeriesDetailsPageContent from "../../pages/SeriesDetailsPage/series-details-page-slot";
import AccountdetailPageContent from "../../pages/MyAccountDetails/accountdetailpageslots";
// import RecentStreamingPageContent from '../../pages/MyAccountDetails/RecentStreamingActivity/recentstreamingpageslots';
// import BillingdetailPageContent from '../../pages/BillingDetails/billingdetailspageslot';
// import ActivateDevicePageContent from '../../pages/MyAccountDetails/ActivateDevice/activatedevicepageslots';
import { VideoPage } from "../../pages/VideoPage/VideoPage";
// import SignInPage from '../../pages/SignInPage/index';
// import SignUpPage from '../../pages/SignUpPage/index';
// import MemberShip from '../../pages/membership/index';
// import ChangePlan from '../../pages/ChangePlan/index';
// import SubscriptionActivated from '../../pages/SignUpPage/SubscriptionActivatedPage';
// import VerifyEmail from "../../pages/VerifyEmail";
// import StripeCheckoutFlow from '../../pages/StripeCheckoutFlow';
// import ResetPassword from '../../pages/ResetPassword';
// import ForgotPassword from '../../pages/ForgotPassword';
// import { analyticsService } from '../../services/analyticsapi.service';
// import PaymentSelectionPage from '../../pages/PaymentOptionsPage/index';
// import StaticInformation from '../../pages/StaticPages';
// import { removeTrailingSlash } from '../../helpers/helper';
import { ProtectedRoute, SignedInUser } from "./protected.route";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { getuserinformationAction } from "../../actions/getuserinformation.action";
import { showModalComAction } from "../../actions/showmodal.action";
import { useLocation } from "react-router-dom";
import { removeTrailingSlash } from "../../helpers/helper";
import UserInfoSelector from "../../selectors/getuserinformationselector";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import { ActivateDeviceTv } from "../../pages/ActivateDeviceTv/activatedevicetv";
import ReviewAndRatingsList from "../../pages/AllReviewsAndRatings/reviews";
import useAuthStatus from "../../hooks/useAuthStatus";
import LoadingSpinner from "../../frontend-library/atoms/loadingSpinner";

const HomePageLazy = React.lazy(() =>
  import("../../pages/HomePage/page-content-slot")
);
const SearchPageLazy = React.lazy(() =>
  import("../../pages/SearchResults/search-page-content-slot")
);
const ViewAllLazy = React.lazy(() => import("../../pages/ViewAll"));
const SubscriptionActivatedLazy = React.lazy(() =>
  import("../../pages/SignUpPage/SubscriptionActivatedPage")
);
const VerifyEmailLazy = React.lazy(() => import("../../pages/VerifyEmail"));
const StaticPagesLazy = React.lazy(() => import("../../pages/StaticPages"));
// const ActivateDeviceTvLazy = React.lazy(() => import("../../pages/ActivateDeviceTv/activatedevicetv"));
// const ContentDetailsPageLazy = React.lazy(() => import("../../pages/ContentDetailsPage/content-details-page-slot"));

function usePageViews() {
  let dispatch = useDispatch();
  let [isSignedIn] = useAuthStatus();
  const location = useLocation();
  let currentRoute = removeTrailingSlash(pathOr("", ["pathname"])(location));

  const { isSubscription } = __parseThemeSelector();
  let userInfo = useSelector((state) =>
    pathOr(null, ["UserInformation", "response", "result"])(state)
  );
  // let isSubscribed = pathOr("", ["subscription", "isActive"])(userInfo);
  let { isSubscribed } = UserInfoSelector();

  let userIsVerified = pathOr(false, ["isVerified"])(userInfo);

  React.useEffect(() => {
    let timerRouter, timerSignin;
    if (isSignedIn) {
      dispatch(getuserinformationAction.getuserinformation());
    }

    if (
      !isSignedIn &&
      !currentRoute.toLowerCase().includes("verify-email") &&
      !currentRoute.toLowerCase().includes("activate/tv")
    ) {
      timerSignin = setTimeout(() => {
        dispatch(showModalComAction.ShowModal("signin"));
        return;
      }, 1000);
    }
    if (
      isSubscription === true &&
      isSignedIn &&
      userIsVerified &&
      !isSubscribed &&
      !currentRoute.toLowerCase().includes("verify-email") &&
      !currentRoute.toLowerCase().includes("activate/tv")
    ) {
      timerRouter = setTimeout(() => {
        dispatch(showModalComAction.ShowModal("membership"));
        return;
      }, 1000);
    }
    return () => {
      clearTimeout(timerRouter);
      clearTimeout(timerSignin);
    };
  }, []);
}

function Routes() {
  usePageViews();
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route exact path="/" render={() => <HomePageLazy />} />
        <Route path="/home" render={() => <HomePageLazy />} />
        <Route path="/search" render={() => <SearchPageLazy />} />
        <Route path="/success" render={() => <SubscriptionActivatedLazy />} />
        {/* <Route path="/reset-password" component={ResetPassword} /> */}
        <Route path="/verify-email" render={() => <VerifyEmailLazy />} />
        <Route path="/terms-of-use" render={() => <StaticPagesLazy />} />
        <Route path="/about-us" render={() => <StaticPagesLazy />} />
        <Route path="/privacy-policy" render={() => <StaticPagesLazy />} />
        {/* <SignedInUser path="/signIn" component={SignInPage} />
      <SignedInUser path="/signUp" component={SignUpPage} />
      <SignedInUser path="/forgotpassword" component={ForgotPassword} /> */}
        {/* <Route path="/paymentoptions" component={PaymentSelectionPage} /> */}
        {/* <ProtectedRoute path="/cardcheckout" component={StripeCheckoutFlow} /> */}
        {/* <ProtectedRoute path="/membership" component={MemberShip} /> */}
        <Route path="/player" component={VideoPage} />
        <ProtectedRoute
          path="/accountdetails"
          component={AccountdetailPageContent}
        />
        <ProtectedRoute
          path="/reviewsandrating"
          component={ReviewAndRatingsList}
        />
        <Route path="/content" component={ContentDetailsPageContent} />
        <Route path="/category" component={SeriesDetailsPageContent} />

        {/* <ProtectedRoute path="/billingdetails" component={BillingdetailPageContent} /> */}
        {/* <ProtectedRoute path="/streamingdetails" component={RecentStreamingPageContent} /> */}
        {/* <ProtectedRoute path="/activatedevice" component={ActivateDevicePageContent} /> */}
        <ProtectedRoute path="/mylist" component={MyListPagePageContent} />
        <Route path="/activate/tv" render={() => <ActivateDeviceTv />} />
        <Route path="/browse" render={() => <ViewAllLazy />} />
        {/* <ProtectedRoute path="/changeplan" component={ChangePlan} /> */}
        <Route component={ErrorPage} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
