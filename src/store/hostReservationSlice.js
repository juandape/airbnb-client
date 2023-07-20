import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  agended: [],
  passed: [],
  all: [],
  show: [],
  loading: true,
  error: '',
};

const hostReservationSlice = createSlice({
  name: 'hostReservation',
  initialState,
  reducers: {
    reserveLoading: (state, action) => {
      state.loading = action.payload;
    },
    reserveAll: (state, action) => {
      state.all = action.payload;
    },
    reserveAgended: (state, action) => {
      state.agended = action.payload;
    },
    reservePassed: (state, action) => {
      state.passed = action.payload;
    },
    reserveShow: (state, action) => {
      const filter = state[action.payload];
      state.show = filter;
    },
    reserveError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  reserveLoading,
  reserveAll,
  reserveAgended,
  reservePassed,
  reserveShow,
  reserveError,
} = hostReservationSlice.actions;

export default hostReservationSlice.reducer;
