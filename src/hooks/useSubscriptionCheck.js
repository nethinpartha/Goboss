import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import moment from "moment";

export default () => {
  const billingDetailsResponse = useSelector((state) =>
    pathOr([], ["Billingdetails", "response"])(state)
  );
  let billingDetails =
    billingDetailsResponse.responseCode === 200
      ? billingDetailsResponse.response
      : [];

  let subscriptionPlanName = "";
  let isSubscribed = false;
  let subscriptionType = 0;
  if (billingDetails && billingDetails.length) {
    if (billingDetails[0] && billingDetails[0].EndDate) {
      let endDate = moment(billingDetails[0].EndDate).format("YYYY-MM-DD");
      isSubscribed = moment(endDate).isSameOrAfter(
        moment().format("YYYY-MM-DD")
      );
    }
    if (billingDetails[0] && billingDetails[0].plan) {
      subscriptionPlanName = billingDetails[0].plan;
    }
    if (billingDetails[0] && billingDetails[0].planId) {
      subscriptionType = billingDetails[0].planId;
    }
  }
  return { isSubscribed, subscriptionPlanName, subscriptionType };
};
