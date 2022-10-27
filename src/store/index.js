import { configureStore } from '@reduxjs/toolkit';
import { IN_PROD } from '../utils/config.util';
import { authReducer } from './auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: !IN_PROD,
});
