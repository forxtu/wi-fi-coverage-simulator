import * as types from './clientsTypes';

export const initialState = {
  isClientActive: '#FC3516'
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLIENTS_ACTIVATE_STATUS:
      return {
        ...state,
        isClientActive: '#24B77D'
      };
    case types.CLIENTS_DISABLE_STATUS:
      return {
        ...state,
        isClientActive: '#FC3516'
      };
    default:
      return state;
  }
};
