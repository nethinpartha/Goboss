import { staticInfoService } from "../services/static.info.service";

export const actions = {
  GET_TOS_DATA: "GET_TOS_DATA",
  TOS_DATA_SUCCESS: "TOS_DATA_SUCCESS",
  TOS_DATA_FAILURE: "TOS_DATA_FAILURE",
};

export const staticPageActions = {
  getTermsOfService,
};

function getTermsOfService(pattern) {
  return (dispatch) => {
    dispatch(request());
    staticInfoService
      .getInfo(pattern)
      .then((res) => dispatch(success(res)))
      .catch((err) => dispatch(failure(err)));
  };
}

function request() {
  return { type: actions.GET_TOS_DATA };
}

function success(res) {
  return { type: actions.TOS_DATA_SUCCESS, res };
}

function failure(err) {
  return { type: actions.TOS_DATA_FAILURE, err };
}
