import * as actionTypes from './actions';

const initialState = {
  isClientActive: false,
  isClientActiveStyle: '#24B77D'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_CLIENT_STATUS:
      return {
        ...state,
        isClientActive: true,
        isClientActiveStyle: '#24B77D'
      };
    case actionTypes.DISABLE_CLIENT_STATUS:
      return {
        ...state,
        isClientActive: false,
        isClientActiveStyle: '#FC3516'
      };
    default:
      return state;
  }
};

export default reducer;
