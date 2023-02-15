import React from "react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

export default function MembershipDetailsList() {
  const getSubscription = useSelector((state) =>
    pathOr([], ["SubscriptionListReducer", "result", "result"])(state)
  );
  console.log("subs", getSubscription);
  if (getSubscription && getSubscription.length === 0) return [];

  const currencySymbol = {
    inr: "₹",
    usd: "$",
  };

  return getSubscription.map((list) => {
    return {
      id: list.id,
      object: list.object,
      active: list.active,
      title: pathOr("", ["recurring", "interval"])(list),
      product: pathOr("", ["product"])(list),
      currency: currencySymbol[`${pathOr("usd", ["currency"])(list)}`],
      main: (
        Math.round(pathOr("", ["unit_amount_decimal"])(list)) / 100
      ).toFixed(2),
      price: "",
      btnTxt: "SUBSCRIBE",
      selected: false,
      metadata: {
        title: pathOr("", ["metadata", "title"])(list),
        subtitle: pathOr("", ["metadata", "subtitle"])(list),
      },
    };
  });
}
