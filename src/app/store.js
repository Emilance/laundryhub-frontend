import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import serviceReducer from "../features/serviceSlice";
import bookingsReducer from "../features/bookingSlice";



export const store = configureStore({
  reducer: {
    user: userReducer,
    service: serviceReducer,
    booking : bookingsReducer
  },
});
