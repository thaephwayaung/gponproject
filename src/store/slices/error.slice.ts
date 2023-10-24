import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { postLogin } from "../actions/auth.action";

type DefaultInitialStateType = {
  isError: boolean;
  statusCode: number;
  errorMessage: string;
};

const DEFAULT_INITIAL_STATE: DefaultInitialStateType = {
  isError: false,
  statusCode: 0,
  errorMessage: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState: DEFAULT_INITIAL_STATE,
  reducers: {
    resetError: (state) => {
      state.isError = DEFAULT_INITIAL_STATE.isError;
      state.statusCode = DEFAULT_INITIAL_STATE.statusCode;
      state.errorMessage = DEFAULT_INITIAL_STATE.errorMessage;
    },
  },
  extraReducers: (builder) => {
    // Auth
    builder.addCase(postLogin.rejected, (state, action: PayloadAction<any>) => {
      state.isError = true;
      state.statusCode = action.payload.status;
      state.errorMessage = action.payload?.data.message;
    });
  },
});

export const { resetError } = errorSlice.actions;
export default errorSlice;
