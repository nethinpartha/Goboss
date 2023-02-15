import { updateVideoSettingConstant } from "../constants/updatevideosetting.constants";
const initialState = {
  selectedValue: "",
};

function VideoSettingSelectedReducer(state = initialState, action) {
  switch (action.type) {
    case updateVideoSettingConstant.UPDATE_SELECTED_VALUE:
      return {
        ...state,
        selectedValue: action.value,
      };

    default:
      return state;
  }
}

export default VideoSettingSelectedReducer;
