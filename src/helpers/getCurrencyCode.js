import cc from "currency-codes";
import { pathOr } from "ramda";
import { store } from '../helpers/store';

function select(state) {
  return pathOr(null, ['Geolocation'])(state);
}

export const getGeolocationDetails = () => {
  const geolocation = select(store.getState());
  return geolocation;
}

export function CurrencyCode() {
  const geolocation = pathOr('', ['res', 'country_name'])(getGeolocationDetails());
  const code = pathOr('', ['0', 'code'])(cc.country(geolocation));
  const __parseToLowerCase = code.toLowerCase();
  return __parseToLowerCase;
}
