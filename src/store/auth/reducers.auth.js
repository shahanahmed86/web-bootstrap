import { initialState } from './state.auth';

export const authReducer = {
  onAuth: (state, action) => {
    state.isAuthenticated = !!action.payload;
    state.user = action.payload;
  },
  onLogout: (state) => {
    Object.keys(initialState).forEach((key) => {
      state[key] = initialState[key];
    });
  },
};
