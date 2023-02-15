import { type } from '../constants/erroralert.constants';

export const showErrorAlertAction = {
  ShowErrorAlert,
  CloseErrorAlert,
};

function ShowErrorAlert(message, title = "") {
  return { type: type.SHOW_ERROR_ALERT, message, title };
}

function CloseErrorAlert() {
  return { type: type.HIDE_ERROR_ALERT };
}
