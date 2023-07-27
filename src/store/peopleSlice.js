import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countPeople: {
    adults: 0,
    children: 0,
    babies: 0,
    pets: 0,
  },
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    increment: (state, action) => {
      Object.keys(state.countPeople).forEach((key) => {
        state.countPeople[key] ++
      });

    },

    decrement: (state, action) => {
      state.countPeople.adults --
    },
  },
});

console.log(peopleSlice);

export const { increment, decrement } = peopleSlice.actions;

export default peopleSlice.reducer;
