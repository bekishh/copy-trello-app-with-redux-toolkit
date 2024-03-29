import { createSlice } from '@reduxjs/toolkit';
import { notify } from '../../constants/snackbar';

const defaultUser = {
  email: 'admin@gmail.com',
  password: 'admin123',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      if (action.payload.email === defaultUser.email && action.payload.password === defaultUser.password) {
        state.isAuthenticated = true;
        notify("Successful login to your account!");
        state.error = null;
      } else {
        state.isAuthenticated = false;
        state.error = "The ardes or password you entered is not correct";
        notify(state.error, "error");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
