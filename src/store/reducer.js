import * as actionTypes from './actions';

const initialState = {
  isClientActive: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_CLIENT_STATUS:
      return {
        ...state,
        isClientActive: true
      };
    case actionTypes.DISABLE_CLIENT_STATUS:
      return {
        ...state,
        isClientActive: false
      };
    default:
      return state;
  }
};

export default reducer;
