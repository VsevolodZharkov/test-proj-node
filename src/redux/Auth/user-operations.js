import { API } from '../../services/API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const userGet = createAsyncThunk('user/current', async () => {
  try {
    const { data } = await API.get('/api/auth/users/current');
    return data;
  } catch (error) {
    toast.error('ERROR');
  }
});
