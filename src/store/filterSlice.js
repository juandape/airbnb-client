import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  post: [],
  loading: true,
  error: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    postLoading: (state, action) => {
      state.loading = action.payload;
    },
    postSuccess: (state, action) => {
      state.post = action.payload;
    },
    postError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { postLoading, postSuccess, postError } = filterSlice.actions;

export default filterSlice.reducer;
