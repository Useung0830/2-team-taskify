"use client";

import InputError from "./input-error";
import InputField from "./input-field";
import { InputPasswordToggle, InputSearchIcon } from "./input-icons";
import { InputRoot } from "./input-root";
import { InputWrapper } from "./input-wrapper";

export const Input = Object.assign(InputRoot, {
  Wrapper: InputWrapper,
  Field: InputField,
  SearchIcon: InputSearchIcon,
  PasswordToggle: InputPasswordToggle,
  Error: InputError,
});
