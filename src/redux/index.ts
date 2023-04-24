import {configureStore, combineReducers} from '@reduxjs/toolkit';

import logger from 'redux-logger';

import authSlice from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authSlice
});

const appReducer = (state: any, action: any) => {
  ///  clear redux state after logout
  if (action.type === 'auth/logout') {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger]),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
