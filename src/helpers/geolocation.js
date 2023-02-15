import { store } from '../helpers/store';
import { pathOr } from "ramda";

function select(state) {
  return pathOr(null, ['Geolocation'])(state);
}

export const getGeolocationDetails = () => {
  const geolocation = select(store.getState());
  return geolocation;
}

export const getZipcode = () => {
  const zipcode = pathOr('', ['res', 'postal'])(getGeolocationDetails());
  return zipcode;
}

export const getCountryCode = () => {
  const contryCode = pathOr('', ['res', 'country_code'])(getGeolocationDetails());
  return contryCode;
}
