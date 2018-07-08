import * as types from './clientsTypes';

export const activateClientStatus = () => ({
  type: types.CLIENTS_ACTIVATE_STATUS
});

export const disableClientStatus = () => ({
  type: types.CLIENTS_DISABLE_STATUS
});
