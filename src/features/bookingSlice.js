import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: [],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,

  reducers: {
    setMyBooking: (state, action) => {
      state.booking =action.payload
    }
  },
});

export const { setMyBooking } = bookingSlice.actions;

export default bookingSlice.reducer;