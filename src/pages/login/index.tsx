import React, { useState } from "react";

import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { VscRadioTower } from "react-icons/vsc";

import { Hook } from "./hook";
import PrimaryButton from "src/components/buttons/PrimaryButton";
import FloatingInput from "src/components/inputs/FloatingInput";
import { useAppSelector } from "src/store/ReduxProvider";

const Login: React.FC = () => {
  const [
    inputValue,
    // inputRef,
    inputError,
    /**
     * action
     */
    handleChangeOnInput,
    handleClickOnLogin,
    handleEnterKey,
  ] = Hook();

  const { isLoading } = useAppSelector((state) => state.auth);

  const [isShownPass, setIsShownPass] = useState<boolean>(false);

  return (
    <section className="w-full h-screen bg-default_light relative">
      <div className="w-[95%] laptop:w-[85%] desktop:w-[1000px] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] rounded-3xl shadow-none laptop:shadow-md tablet:border">
        <div className="w-full h-full grid grid-cols-7">
          <div className="col-span-7 laptop:col-span-4">
            <div className="bg-transparent laptop:bg-gradient-to-tr from-primary to-primary_dark w-full h-full rounded-tl-3xl rounded-bl-3xl flex justify-center items-center">
              <div className="space-y-8 flex flex-row laptop:flex-col items-center justify-center space-x-4 laptop:space-x-0 w-full bg-transparent laptop:py-0 rounded-2xl laptop:rounded-none">
                <VscRadioTower className="hidden laptop:block w-16 h-auto text-default" />
                <div className="space-y-0 laptop:space-y-1">
                  <p className="heading-font text-primary laptop:text-default text-center">
                    GPON
                  </p>
                  <p className="sub-heading-font text-primary laptop:text-default_light text-center">
                    Management
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-7 laptop:col-span-3 py-14 laptop:py-24 px-4 laptop:px-7 space-y-7">
            <p className="sub-heading-font text-primary text-center font-semibold">
              LOGIN
            </p>
            <div className="space-y-2">
              <FloatingInput
                type="text"
                id="email"
                name="email"
                labeText="Email"
                placeHolderText="Enter Email Address"
                errorMessage={inputError.email}
                value={inputValue.email}
                /**
                 * action
                 */
                onChangeInput={handleChangeOnInput}
              />
              <FloatingInput
                type={isShownPass ? "text" : "password"}
                id="password"
                name="password"
                labeText="Password"
                placeHolderText="Enter password"
                errorMessage={inputError.password}
                value={inputValue.password}
                backIcon={
                  isShownPass ? (
                    <BsEyeFill className="h-auto w-4 text-primary_dark" />
                  ) : (
                    <BsEyeSlashFill className="h-auto w-4 text-default_dark" />
                  )
                }
                /**
                 * action
                 */
                onChangeInput={handleChangeOnInput}
                handleClickOnIcon={() => setIsShownPass((prev) => !prev)}
                onKeyDownEnterKey={handleEnterKey}
              />
            </div>
            <PrimaryButton
              isLoading={isLoading}
              labelText="LOGIN"
              /**
               * action
               */
              handleClickOn={handleClickOnLogin}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
