export const types = {
  PLAN_SELECTED: "PLAN_SELECTED",
};

export const membershipaction = {
  selectedmembership,
};

function selectedmembership(payload) {
  return {
    type: types.PLAN_SELECTED,
    data: payload,
  };
}
