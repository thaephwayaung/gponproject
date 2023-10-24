import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

import {
  ACCESS_TOKEN,
  DEPT_ID,
  REFRESH_TOKEN,
  ROLE_ID,
  SITE_URL,
  USER_ID,
} from "src/constants/storage";
import AuthService from "src/services/auth.service";
import error_helper from "src/utils/error_helper";
import { setCookie, setLocalStorage } from "src/utils/storage";

type PostLoginType = {
  email: string;
  password: string;
};

export const postLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }: PostLoginType, { rejectWithValue }) => {
    try {
      let response = await AuthService.loginService(email, password);

      const access_token: string = response.data.data.accessToken;
      const refresh_token: string = response.data.data.refreshToken;

      const user: any = jwtDecode(access_token);
      let protocol: string = window.location.protocol;
      let host: string = window.location.host;

      setLocalStorage(SITE_URL, `${protocol}/${host}`);
      setLocalStorage(DEPT_ID, user?.deptId);
      setLocalStorage(ROLE_ID, user?.roleId);
      setLocalStorage(USER_ID, user?.userId);

      setCookie(ACCESS_TOKEN, access_token);
      setCookie(REFRESH_TOKEN, refresh_token);

      window.location.reload();

      return response;
    } catch (error: unknown) {
      return rejectWithValue(error_helper.check(error));
    }
  }
);
