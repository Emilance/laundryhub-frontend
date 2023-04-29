import { createSlice } from "@reduxjs/toolkit";
import { serviceObj } from "../data/serviceData";

const initialState = {
  service: serviceObj,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,

  reducers: {
    setService: (state, action) => {
      state.service = action.payload;
    }
  },
});

export const { setService } = serviceSlice.actions;

export default serviceSlice.reducer;
