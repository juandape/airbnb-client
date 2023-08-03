// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './calendarSlice';
import peopleReducer from './peopleSlice';
import headerReducer from './headerSlice';
import filterReducer from './filterSlice';
import hostReservationReducer from './hostReservationSlice';

// const middleware = applyMiddleware(thunk);

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    people: peopleReducer,
    header: headerReducer,
    filter: filterReducer,
    hostReservation: hostReservationReducer,
  },
});

export default store;

// import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
// import calendarReducer from "./reducer/calendarReducer";
// import peopleReducer from "./reducer/peopleReducer";
// import headerReducer from "./reducer/headerReducer";
// import filterReducer from "./reducer/filterReducer";
// import reservationReducer from "./reducer/hostReservation.Reducer";

// const rootReducer = combineReducers({
//   calendarReducer,
//   peopleReducer,
//   headerReducer,
//   filterReducer,
//   reservationReducer,
// });

// export const store = legacy_createStore(rootReducer, middleware);
