import { createSlice } from "@reduxjs/toolkit";

import { postLogin } from "src/store/actions/auth.action";
import { DefaultInitialStateType } from "src/types/auth";

const DEFAULT_INITIAL_STATE_VALUE: DefaultInitialStateType = {
  data: {},
  isLoading: false,
  isSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: DEFAULT_INITIAL_STATE_VALUE,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.isLoading = true;
      state.data = {};
      state.isSuccess = false;
    });
    builder.addCase(postLogin.fulfilled, (state) => {
      state.isSuccess = true;
      state.isLoading = false;
    });
    builder.addCase(postLogin.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice;
