import { createSlice } from '@reduxjs/toolkit';
import { getRandomQuestions, getResult } from './questions-operations';

const initialState = {
  questions: [],
  answers: [],
  result: {},
  loading: false,
  questionNumber: 0,
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  extraReducers: {
    [getRandomQuestions.pending]: (state, _) => {
      state.loading = true;
    },
    [getRandomQuestions.fulfilled]: (state, { payload }) => {
      state.questions = payload;
      state.loading = false;
    },
    [getRandomQuestions.rejected]: (state, _) => {
      state.loading = false;
    },
    [getResult.fulfilled]: (state, { payload }) => {
      state.result = payload;
      state.loading = false;
    },
    [getResult.pending]: (state, _) => {
      state.loading = true;
    },
    [getResult.rejected]: (state, _) => {
      state.loading = false;
    },
  },
  reducers: {
    addAnswers(state, action) {
      state.answers.push(action.payload);
    },
    removeAnswer(state, action) {
      state.answers = state.answers.filter(el => el?.id !== action.payload);
    },
    clearQuestions(state) {
      state.questions = [];
    },
    clearAnswers(state) {
      state.answers = [];
    },
    clearResult(state) {
      state.result = {};
    },
    questionNumberIncrement(state) {
      state.questionNumber += 1;
    },
    questionNumberDecrement(state) {
      state.questionNumber -= 1;
    },
    questionNumberReset(state) {
      state.questionNumber = 0;
    },
  },
});
export const {
  addAnswers,
  removeAnswer,
  clearQuestions,
  clearAnswers,
  questionNumberIncrement,
  questionNumberDecrement,
  questionNumberReset,
  clearResult,
} = questionSlice.actions;
export const questionsReduser = questionSlice.reducer;
