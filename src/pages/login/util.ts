import { InputRefType, InputValueType } from "./__type";

export function validateInputValue(
  inputValue: InputValueType,
  dataRef: InputRefType
) {
  let isValidate: boolean = false;
  let errorMsg: InputValueType = { email: "", password: "" };

  if (!inputValue.email) {
    isValidate = false;
    errorMsg.email = "Please fill out email address!";
    // dataRef.email.current && dataRef.email.current.focus();
  }

  if (!inputValue.password) {
    isValidate = false;
    errorMsg.password = "Please fill out password!";
    // dataRef.password.current && dataRef.password.current.focus();
  }

  return { isValidate, errorMsg, dataRef };
}
