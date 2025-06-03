import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HeaderContent } from "../types";

interface HeaderState {
  backButton: boolean;
  content: HeaderContent[];
  title?: string;
}

const initialState: HeaderState = {
  backButton: false,
  content: [],
  title: undefined,
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
    setTitle: (state, action: PayloadAction<string | undefined>) => {
      state.title = action.payload;
    },
  },
});

export const { setBackButton, setContent, clearContent, setTitle } =
  headerSlice.actions;
export default headerSlice.reducer;
