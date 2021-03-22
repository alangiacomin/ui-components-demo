const actionPrefix = 'USER';
const actions = {
  LOGIN_FAILED: `${actionPrefix}/LOGIN_FAILED`,
  LOGGED_IN: `${actionPrefix}/LOGGED_IN`,
  LOGGED_OUT: `${actionPrefix}/LOGGED_OUT`,
  SET_PROFILE: `${actionPrefix}/SET_PROFILE`,
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export {
  reducer as default,
  actions as USER_ACTIONS,
};
