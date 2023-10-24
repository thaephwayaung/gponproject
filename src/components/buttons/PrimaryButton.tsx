import React from "react";

import Loading from "src/components/loading";

type PrimaryButtonPropType = {
  labelText?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  /**
   * action
   */
  handleClickOn?: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton: React.FC<PrimaryButtonPropType> = ({
  labelText,
  isLoading,
  icon,
  isDisabled,
  /**
   * action
   */
  handleClickOn,
}) => {
  return (
    <button
      className={` ${
        isLoading && "pointer-events-none"
      } desktop4k:py-2.5 flex h-auto w-full items-center justify-center space-x-2 rounded-md border border-primary bg-primary px-4 py-2.5 text-default duration-300 hover:shadow-xl ${
        !isLoading && "laptop:hover:shadow-lg"
      } laptop:hover:text-primary`}
      disabled={isLoading || isDisabled}
      /**
       * action
       */
      onClick={handleClickOn}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-1">
          <Loading />
          <p className="caption-font text-default"> Loading </p>
        </div>
      ) : (
        <>
          {icon && icon}
          {labelText && (
            <p className="secondary-font font-medium ">{labelText}</p>
          )}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
