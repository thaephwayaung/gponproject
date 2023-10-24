import axios from "axios";

import { getApiInstanceForJSON } from "src/api";
import { encrypt } from "src/utils/encrypt";

const loginService = async (email: string, password: string) => {
  const EmailAndPassword = `email=${email}&password=${password}`;

  const encryptedKey = encrypt(
    EmailAndPassword,
    process.env.REACT_APP_ENCRYPTION_KEY || "error"
    // authKey || "error"
  );

  return await getApiInstanceForJSON().post("/user/login", {
    request: encryptedKey,
  });
};

const refreshingToken = async (
  user_id: number,
  refresh_token: string
): Promise<any> => {
  return await axios.post("/user/request_refresh_token", {
    userId: user_id,
    refreshToken: refresh_token,
  });
};

const AuthService = {
  loginService,
  refreshingToken,
};

export default AuthService;
