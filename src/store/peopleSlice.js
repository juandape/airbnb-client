import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countPeople: {
    adults: 0,
    children: 0,
    babies: 0,
    pets: 0,
  },
};

console.log(initialState);


const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    increment(state) {
      state.countPeople.adults += 1;
    },

  },
});


export const { increment, decrement } = peopleSlice.actions;

export default peopleSlice.reducer;
