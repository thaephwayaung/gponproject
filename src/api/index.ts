import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";

import { instanceForJSON, instanceForMultipart } from "./instance";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/storage";
import { getCookie, setCookie } from "src/utils/storage";
import AuthService from "src/services/auth.service";

type UserInformationType = {
  userId: number;
  fullName: string;
  email: string;
  deptId: number;
  roleId: number;
  iat: number;
  exp: number;
};

const onRequest = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const accessToken = getCookie(ACCESS_TOKEN);

  const refreshToken = getCookie(REFRESH_TOKEN);

  /** For public api call - no need token to fetch - wJR */
  if (!accessToken || !refreshToken) {
    return config;
  }

  const user: UserInformationType = jwtDecode(accessToken);

  const isExpired = user.exp * 1000 < new Date().getTime();

  /** when access token expired - wJR */
  if (isExpired) {
    let response = await AuthService.refreshingToken(user.userId, refreshToken);

    let accessToken = response?.data?.data.accessToken;

    setCookie(ACCESS_TOKEN, accessToken);

    config.headers!.Authorization = `Bearer ${accessToken}`;

    return config;
  }
  config.headers!.Authorization = `Bearer ${accessToken}`;

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  return res;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export const getApiInstanceForJSON = () => {
  instanceForJSON.interceptors.request.use(onRequest, onRequestError);
  instanceForJSON.interceptors.response.use(onResponse, onResponseError);

  return instanceForJSON;
};

export const getApiInstanceForMultipart = () => {
  instanceForMultipart.interceptors.request.use(onRequest, onRequestError);
  instanceForMultipart.interceptors.response.use(onResponse, onResponseError);

  return instanceForMultipart;
};
