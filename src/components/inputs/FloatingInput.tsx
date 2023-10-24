import React from "react";

type FloatingInputPropType = {
  type: string;
  id: string;
  name: string;
  // inputRef?: React.ForwardedRef<HTMLInputElement>;
  labeText: string;
  placeHolderText?: string;
  errorMessage?: string;
  value: string;
  backIcon?: React.ReactNode;
  /**
   * action
   */
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickOnIcon?: () => void;
  onKeyDownEnterKey?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const FloatingInput: React.FC<FloatingInputPropType> = (props) => {
  const {
    type,
    id,
    name,
    // inputRef,
    labeText,
    placeHolderText,
    errorMessage,
    value,
    backIcon,
    /**
     * action
     */
    onChangeInput,
    handleClickOnIcon,
    onKeyDownEnterKey,
  } = props;

  return (
    <div className="relative space-y-1">
      <label htmlFor={id} className="secondary-font text-base_dark font-medium">
        {labeText}
      </label>
      <input
        className="secondary-font block bg-transparent py-2.5 px-4 border border-gray-200 shadow-sm shadow-default_light rounded-lg w-full duration-200 outline-none h-auto focus:ring-1 focus:ring-primary"
        type={type}
        id={id}
        name={name}
        placeholder={placeHolderText}
        // ref={inputRef}
        value={value}
        /**
         * action
         */
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e)}
        onKeyDown={onKeyDownEnterKey}
      />
      {backIcon && (
        <div
          className="absolute right-4 top-9 laptop:cursor-pointer"
          /**
           * action
           */
          onClick={handleClickOnIcon}
        >
          {backIcon}
        </div>
      )}
      {errorMessage && (
        <p className="caption-font text-danger px-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default FloatingInput;
