export const types = {
  SHOW_POPUP: "SHOW_POPUP",
  CLOSE_POPUP: "CLOSE_POPUP",
};

export const showModalComAction = {
  ShowModal,
  CloseModal,
};

function ShowModal(currentpage) {
  return { type: types.SHOW_POPUP, currentpage };
}

function CloseModal() {
  return { type: types.CLOSE_POPUP };
}
