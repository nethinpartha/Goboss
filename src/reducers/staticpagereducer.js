import { actions } from "../actions/staticpageactions.js";

const initialState = {};

export default function StaticContentReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOS_DATA:
      return { ...state, results: null, loading: true };
    case actions.TOS_DATA_SUCCESS:
      return { ...state, result: action.res, loading: false };
    case actions.TOS_DATA_FAILURE:
      return { ...state, results: null, loading: false };
    default:
      return state;
  }
}
