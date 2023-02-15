export const types = {
  SHOW_ALERT_REQUESTED: "SHOW_ALERT_REQUESTED",
  CLOSE_ALERT_REQUESTED: "CLOSE_ALERT_REQUESTED",
}


export const showAlertAction = {
  ShowAlertModal,
  CloseAlertModal
}

function ShowAlertModal({ body, title }) {
  return { type: types.SHOW_ALERT_REQUESTED, body, title }
}

function CloseAlertModal() {
  return { type: types.CLOSE_ALERT_REQUESTED }
}