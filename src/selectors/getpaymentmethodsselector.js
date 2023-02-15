import React from 'react';
import { pathOr } from 'ramda';
import { useSelector } from 'react-redux';


const __parseOptions = (options) => {
  if (options.length === 0) return [];
  return options.map((option, index) => {
    return {
      id: pathOr('', ['id'])(option),
      billing_details: pathOr('', ['billing_details'])(option),
      card: {
        brand: pathOr('', ['card', 'brand'])(option),
        country: pathOr('', ['card', 'country'])(option),
        last4: pathOr('', ['card', 'last4'])(option)
      },
      customer: pathOr('', ['customer'])(option)
    }
  })
}


export function GetPaymentMethodSelector() {
  let paymentMethods = useSelector((state) =>
    pathOr(null, ["PaymentMethods"])(state)
  );

  let result = pathOr([], ["response", "result"], paymentMethods);

  return {
    loading: pathOr(false, ['loading'])(paymentMethods),
    paymentMtds: __parseOptions(result),
  }
}