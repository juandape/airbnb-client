import axios from 'axios';

import {
  // POST_SUCCESS,
  // POST_ERROR,
  // POST_LOADING,
  postLoading,
  postSuccess,
  postError,
} from '../filterSlice';

export const getPosts = (data) => {
  return async (dispatch) => {
    try {
      dispatch(postLoading(true));
      const res = await axios.post(
        `${import.meta.env.VITE_APP_AIRBACK}/api/homes/filter`,
        data
      );
      // dispatch({ type: POST_SUCCESS, payload: res.data.data })
      dispatch(postSuccess(res.data.data));
      dispatch(postLoading(false));
    } catch (err) {
      dispatch(postError(err.message));
    }
  };
};
