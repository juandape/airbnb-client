import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerPopover: '',
  menuPopover: '',
  location: '',
  coordinates: [],
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    flip: (state, action) => {
      state.headerPopover = action.payload;
    },
    flipMenu: (state, action) => {
      state.menuPopover = action.payload;
    },
    locate: (state, action) => {
      state.location = action.payload;
    },
    coordinates: (state, action) => {
      state.coordinates = action.payload;
    },
  },
});

export const { flip, flipMenu, locate, coordinates } = headerSlice.actions;

export default headerSlice.reducer;