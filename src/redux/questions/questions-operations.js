import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services/API';

export const getRandomQuestions = createAsyncThunk(
  'questions/random', //под капотом создаст статусы
  async (type, { rejectedWithValue }) => {
    try {
      const { data } = await API.get(`/api/questions/${type}/random`);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const getAnswerResult = createAsyncThunk(
  'questions/result',
  async (answers, { rejectedWithValue }) => {
    try {
      const { data } = await API.post('/api/questions/result', answers);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const getResult = createAsyncThunk(
  'questions/result',
  async (answers, { rejectedWithValue }) => {
    try {
      const { data } = await API.get('/api/questions/result', answers);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
