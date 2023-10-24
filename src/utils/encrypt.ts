const CryptoJS = require("crypto-js");

export const encrypt = (plainText: string, password: string): string => {
  try {
    const cipher_text = CryptoJS.AES.encrypt(plainText, password);
    return cipher_text.toString();
  } catch (error) {
    console.log(error);
  }
  return "";
};
