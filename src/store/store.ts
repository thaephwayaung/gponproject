import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth.slice";
import errorSlice from "./slices/error.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    error: errorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
