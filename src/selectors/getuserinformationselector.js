import React from "react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

export function UserInfoSelector() {
  let userInfo = useSelector((state) =>
    pathOr(null, ["UserInformation", "response", "result"])(state)
  );
  let loading = useSelector((state) =>
    pathOr(false, ["UserInformation", "loading"])(state)
  );
  let isSubscribed = pathOr("", ["subscription", "subscriptionStatus"])(userInfo);
  const dateConvert = (date) =>{
    if(date){
      var date1 = date.split('T')
      var dArr = date1[0].split("-"); 
      return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0].substring(2); 
    }else{
      return '-'
    }
  }
 
  return {
    loading,
    email: pathOr("", ["email"])(userInfo),
    id: pathOr("", ["id"])(userInfo),
    isSubscribed: isSubscribed === 'active' ? true : false,
    isTrial: pathOr("", ["subscription", "isTrial"])(userInfo),
    planId: pathOr("", ["subscription", "planId"])(userInfo),
    nextBillingDate: dateConvert(pathOr("", ["subscription", "expires_date"])(userInfo)),
    purchase_date: dateConvert(pathOr("", ["subscription", "purchase_date"])(userInfo)),
    duration: pathOr("", ["subscription", "duration"])(userInfo),
    description: pathOr("", ["subscription", "product_identifier"])(userInfo),
    paymentPartnerId: pathOr("", ["subscription", "paymentPartnerId"])(
      userInfo
    ),
    isCancelled: pathOr(false, ["subscription", "isCancelled"])(userInfo),
    endDate: pathOr(false, ["subscription", "endDate"])(userInfo),
    userIsVerified: pathOr(false, ["isVerified"])(userInfo),
    loggedInDevices: pathOr("", ["loggedInDevices"])(userInfo),
    phoneNumber: pathOr("", ["phoneNumber"])(userInfo),
    isSubscribetoNewsLetter: pathOr(false, ["isSubscribetoNewsLetter"])(
      userInfo
    ),
  };
}

export default UserInfoSelector;
