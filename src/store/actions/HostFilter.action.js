import axios from 'axios';

import {
  reserveLoading,
  reserveAll,
  reserveAgended,
  reservePassed,
  reserveShow,
  reserveError,
} from '../hostReservationSlice';

export const getPosts = (token) => {
  const convertion = 1000 * 60 * 60 * 24;
  const all = [];
  const agended = [];
  const passed = [];
  return async (dispatch) => {
    try {
      dispatch(reserveLoading(true));
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_AIRBACK}/api/reservations/showHost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      data.data.homes.forEach((home) => {
        if (home.reservations.length === 0) return;
        home.reservations.forEach((reservation) => {
          all.push(reservation);
          const final = Math.floor(reservation.finalDate / convertion);
          const now = Math.floor(Date.now() / convertion);
          if (final >= now) {
            agended.push(reservation);
          } else {
            passed.push(reservation);
          }
        });
      });
      dispatch(reserveAll(all));
      dispatch(reserveAgended(agended));
      dispatch(reservePassed(passed));
      dispatch(reserveShow('all'));
      dispatch(reserveLoading(false));
    } catch (err) {
      dispatch(reserveError(err));
    }
  };
};
