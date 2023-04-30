import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentOrder: {},
};

export const currentOrderSlice = createSlice({
  name: "currentOrder",
  initialState,

  reducers: {
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload
    }
  },
});

export const { setCurrentOrder } = currentOrderSlice.actions;

export default currentOrderSlice.reducer;