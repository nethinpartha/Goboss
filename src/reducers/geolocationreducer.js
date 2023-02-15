import { type } from '../constants/geolocation.constants';

const initialState = {
  res: {
    "country_code": "",
    "country_name": "",
    "city": "",
    "postal": "",
    "latitude": "",
    "longitude": "",
    "IP": "",
    "state": "",
  },
  loading: false
};

function Geolocation(state = initialState, action) {
  switch (action.type) {
    case type.GET_GEOLOCATION_REQUESTED:
      return { ...state, loading: true }
    case type.GET_GEOLOCATION_SUCCESS:
      return { ...state, res: action.response, loading: false }
    case type.GET_GEOLOCATION_FAILURE:
      return { ...state, loading: false, error: action.response }
    default:
      return state;
  }
};

export default Geolocation;