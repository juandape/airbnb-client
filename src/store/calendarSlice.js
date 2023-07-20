import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dates: [null, null],
  title: '',
  head: '',
  flexRange: 'normal',
  nights: 0,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    changeDate: (state, action) => {
      state.dates = action.payload;
    },
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeDateHead: (state, action) => {
      state.head = action.payload;
    },
    changeFlexRange: (state, action) => {
      state.flexRange = action.payload;
    },
    changeNights: (state, action) => {
      state.nights = action.payload;
    },
  },
});

export const {
  changeDate,
  changeTitle,
  changeDateHead,
  changeFlexRange,
  changeNights,
} = calendarSlice.actions;

export default calendarSlice.reducer;
