import { getCastDetails } from "../services/getcastdetails.service";
import { type } from "../constants/castdetails.constants";


// get cast details by id
const castDetails = (id) => {
  return (dispatch) => {
    dispatch(request(id));
    getCastDetails.castdetailservice(id).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
};

function request(newemailid) {
  return { type: type.GET_CAST_DETAILS_REQUEST, newemailid };
}

function success(response) {
  return { type: type.GET_CAST_DETAILS_SUCCESS, response };
}

function failure(error) {
  return { type: type.GET_CAST_DETAILS_FAILURE, error };
}

export const castDetailsAction = {
  castDetails,
};
