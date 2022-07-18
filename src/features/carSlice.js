import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToast: false,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setShowToast: (state, action) => {
      state.showToast = action.payload;
    },
  },
});

export const { setShowToast } = carSlice.actions;
export default carSlice.reducer;
