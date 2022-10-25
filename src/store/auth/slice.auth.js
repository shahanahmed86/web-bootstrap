import { createSlice } from '@reduxjs/toolkit';
import { authReducer } from './reducers.auth';
import { initialState } from './state.auth';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducer,
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
