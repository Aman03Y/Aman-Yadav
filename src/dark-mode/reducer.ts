import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type DarkMode = {
  isDarkMode: boolean;
};

const initialState: DarkMode = {
  isDarkMode: true,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export const selectIsDarkMode = (state: RootState) => state.darkMode.isDarkMode;

export default darkModeSlice.reducer;
