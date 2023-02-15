import { type } from "../constants/watchduration.constants";
import { watchDurationService } from "../services/watchduration.service";

export const watchDurationAction = {
  watchDuration,
};

function watchDuration({ contentId, duration }) {
  return (dispatch) => {
    dispatch(request({}));
    watchDurationService.WatchDuration(contentId, duration).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };
}
function request(user) {
  return { type: type.POST_WATCH_DURATION_REQUESTED, user };
}
function success(user) {
  return { type: type.POST_WATCH_DURATION_SUCCESS, user };
}
function failure(error) {
  return { type: type.POST_WATCH_DURATION_FAILURE, error };
}
