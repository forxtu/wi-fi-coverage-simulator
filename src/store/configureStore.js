import { createStore, combineReducers } from 'redux';

import {
  powerReducer,
  initialState as powerInitialState
} from './power/powerReducers';
import {
  clientsReducer,
  initialState as clientsInitialState
} from './clients/clientsReducers';

const configureStore = () => {
  const reducers = combineReducers({
    power: powerReducer,
    clients: clientsReducer
  });
  const store = createStore(
    // combineReducers({
    //   power: powerReducer,
    //   client: clientsReducer
    // }),
    reducers,
    {
      power: powerInitialState,
      clients: clientsInitialState
    }
  );

  return store;
};

export default configureStore;
