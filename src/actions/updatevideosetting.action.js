import { updateVideoSettingConstant } from "../constants/updatevideosetting.constants";
export const updateVideoSettingValue = (value) => {
  return {
    type: updateVideoSettingConstant.UPDATE_SELECTED_VALUE,
    value,
  };
};
