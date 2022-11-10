import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut } from './auth-operations';
import { userGet } from './user-operations';

export const initialState = {
  token: null,
  isLogin: false,
  isLoading: false,
  user: {
    email: '',
    avatarURL: '',
    verify: false,
    error: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleAuth: (state, { payload }) => {
      state.token = payload.accessToken;
      state.isLogin = true;
      state.user.email = payload.email;
      state.user.avatarURL = payload.avatarURL;
    },
  },
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
    },
    [logIn.pending]: (state, { payload }) => {
      state.error = null;
      state.isLoading = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.user = {};
      state.error = payload;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;

      state.isLogin = true;
      state.user = payload.user;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = null;
      state.isLogin = false;
      state.user = {};
      state.user.verify = false;
    },
    [userGet.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [userGet.fulfilled]: (state, { payload }) => {
      state.user.verify = payload.verify;
      state.isLoading = false;
    },
    [userGet.rejected]: (state, _) => {
      state.user.verify = false;
    },

    // [getRefresh.pending]: (state, { payload }) => {
    //   state.isLogin = false;
    // },
    // [getRefresh.fulfilled]: (state, { payload }) => {
    //   state.accessToken = payload.newAccessToken;
    //   state.refreshToken = payload.newRefreshToken;
    //   state.sid = payload.newSid;
    //   state.isLogin = true;
    // },
    // [getRefresh.rejected]: (state, { payload }) => {
    //   state.isLogin = false;
    //   state.accessToken = null;
    //   state.refreshToken = null;
    //   state.sid = null;
    // },
  },
});

export const authReducer = authSlice.reducer;
export const { googleAuth } = authSlice.actions;
