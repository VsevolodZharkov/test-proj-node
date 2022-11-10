import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from '../../services/API';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk(
  'users/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/api/auth/users/signup', credentials);
      toast.success('You have successfully signed up.');
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Server error, please try again later');
      }
      return rejectWithValue('something went wrong');
    }
  }
);

export const logIn = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/api/auth/users/login', credentials);

      tokenAuth.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Server error, please try again later');
      }

      return rejectWithValue('something went wrong');
    }
  }
);

export const logOut = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await API.get('/api/auth/users/logout');
      toast.success('Logout successful. Your session has been logged out.');
      tokenAuth.unset();
    } catch {
      toast.error('Server error, please try again later');
      return rejectWithValue('something went wrong');
    }
  }
);

// export const getRefresh = createAsyncThunk(
//   'auth/refresh',
//   async (_, { getState, rejectWithValue }) => {
//     const state = getState();
//     const oldRefresh = state.auth.refreshToken;
//     if (!oldRefresh || !oldSid) {
//       return rejectWithValue('something went wrong');
//     }
//     try {
//       const { data } = await API.post('/auth/refresh', {
//         headers: {
//           Authorization: `Bearer ${oldRefresh}`,
//         },
//       });

//       tokenAuth.set(data.newAccessToken);
//       return data;
//     } catch (error) {
//       tokenAuth.unset();
//       if (error.response.status !== 401) {
//         toast.error('Oops, we got an error :(((( Dont worry and try again.');
//       }
//       return rejectWithValue('something went wrong');
//     }
//   }
// );
