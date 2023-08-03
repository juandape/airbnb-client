import axios from 'axios';

import { postLoading, postSuccess, postError } from '../filterSlice';

export const getPosts = (data) => {
  return async (dispatch) => {
    try {
      dispatch(postLoading(true));
      const res = await axios.get(
        `${import.meta.env.VITE_APP_AIRBACK}/api/homes`
      );
      dispatch(postSuccess(res.data.data));
      dispatch(postLoading(false));
    } catch (err) {
      dispatch(postError(err));
    }
  };
};
