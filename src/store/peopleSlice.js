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
      state.countPeople[action.payload] += 1;
    },
    decrement: (state, action) => {
      state.countPeople[action.payload] -= 1;
    },
  },
});

console.log(peopleSlice);

export const { increment, decrement } = peopleSlice.actions;

export default peopleSlice.reducer;
