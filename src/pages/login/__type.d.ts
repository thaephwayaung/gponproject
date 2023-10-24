import { KeyboardEvent } from "react";

type HookType = [
  InputValueType,
  // InputRefType,
  InputValueType,
  // React.ForwardedRef<HTMLInputElement>,
  // React.ForwardedRef<HTMLInputElement>,
  /**
   * action
   */
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
  // (e: KeyboardEvent<HTMLImageElement>) => void
];

type InputValueType = {
  email: string;
  password: string;
};

type InputRefType = {
  email: createRef<HTMLInputElement>;
  password: createRef<HTMLInputElement>;
};

export { HookType, InputValueType, InputRefType };
