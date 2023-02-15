import { types } from "../constants/videoplayer.constants";

export const videoPlayerContentAction = {
  videoPlayerContent,
};

function videoPlayerContent(payload) {
  return (dispatch) => {
    dispatch(request({}));
    if (payload) {
      return dispatch(success(payload));
    }
    dispatch(failure("Video content not found"));
  };
}
function request(payload) {
  return { type: types.VIDEO_PLAYER_CONTENT_REQUESTED, payload };
}
function success(payload) {
  return { type: types.VIDEO_PLAYER_CONTENT_SUCCESS, payload };
}
function failure(error) {
  return { type: types.VIDEO_PLAYER_CONTENT_FAILURE, error };
}
