import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HeaderContent } from "../types";

interface HeaderState {
  backButton: boolean;
  content: HeaderContent[];
}

const initialState: HeaderState = {
  backButton: false,
  content: [],
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setBackButton: (state, action: PayloadAction<boolean>) => {
      state.backButton = action.payload;
    },
    setContent: (state, action: PayloadAction<HeaderContent[]>) => {
      state.content = action.payload;
    },
    clearContent: (state) => {
      state.content = [];
    },
  },
});

export const { setBackButton, setContent, clearContent } = headerSlice.actions;
export default headerSlice.reducer;
