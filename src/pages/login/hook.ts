import { useState } from "react";

import { HookType, InputRefType, InputValueType } from "./__type";
import { emailValidator } from "src/utils/email_helper";
import { validateInputValue } from "./util";
import { useAppDispatch } from "src/store/ReduxProvider";
import { postLogin } from "src/store/actions/auth.action";

export function Hook(): HookType {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState<InputValueType>({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState<InputValueType>({
    email: "",
    password: "",
  });
  const [inputRef, setInputRef] = useState<InputRefType>({
    email: null,
    password: null,
  });

  const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({
      ...inputValue,
      [name]: value,
    });

    if (name === "email" && value && !emailValidator(value)) {
      setInputError({
        ...inputError,
        [name]: "Please enter valid email format!",
      });
      return;
    }

    setInputError({
      ...inputError,
      [name]: "",
    });
  };

  const handleClickOnLogin = () => {
    const { isValidate, errorMsg, dataRef } = validateInputValue(
      inputValue,
      inputRef
    );

    if (!isValidate) {
      setInputError(errorMsg);
      setInputRef(dataRef);
    }

    if (!emailValidator(inputValue.email)) return;

    dispatch(
      postLogin({ email: inputValue.email, password: inputValue.password })
    );
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    handleClickOnLogin();
  };

  return [
    inputValue,
    inputError,
    handleChangeOnInput,
    handleClickOnLogin,
    handleEnterKey,
  ];
}
