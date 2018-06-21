import * as actionTypes from './actions';

const initialState = {
  isClientActive: '#FC3516'
  // isClientActive: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_CLIENT_STATUS:
      return {
        ...state,
        isClientActive: '#24B77D'
      };
    case actionTypes.DISABLE_CLIENT_STATUS:
      return {
        ...state,
        isClientActive: '#FC3516'
      };
    default:
      return state;
  }
};

export default reducer;
