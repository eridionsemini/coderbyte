import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import logger from 'redux-logger';

import wishSlice from './wish/wishSlice';
import userSlice from './user/userSlice';
import {apiSlice} from './api/apiSlice';

const rootReducer = combineReducers({
  wish: wishSlice,
  user: userSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const appReducer = (state: any, action: any) => {
  ///  clear redux state after logout
  if (action.type === 'user/logout/fulfilled') {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};


const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([apiSlice.middleware, logger]),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

setupListeners(store.dispatch);
