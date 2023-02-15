import { getcontentdetailsService } from "../services/contentdetail.service";
import { type } from "../constants/contentdetails.constants";
import { ratingsreview } from "./ratingreview.action";

// get the content details based on permalink
const contentdetails = (permalink, contentId) => {
  return (dispatch) => {
    dispatch(request(permalink));
    getcontentdetailsService.contentdetails(permalink).then(
      (response) => {
        dispatch(success(response));
        if (contentId) {
          dispatch(ratingsreview.ratingsreviewAAction({ contentId }));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
};

function request(id) {
  return { type: type.GET_CONTENT_DETAILS_REQUESTED, id };
}

function success(response) {
  return { type: type.GET_CONTENT_DETAILS_SUCCESS, response };
}

function failure(error) {
  return { type: type.GET_CONTENT_DETAILS_FAILURE, error };
}

export const contentdetailsAction = {
  contentdetails,
};
