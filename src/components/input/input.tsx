"use client";

import {
  ComponentPropsWithRef,
  createContext,
  useContext,
  useState,
} from "react";
import { cn } from "@/util/cn";
import SearchIcon from "../icons/search-icon";
import EyeCloseIcon from "../icons/eye-close-icon";
import EyeOpenIcon from "../icons/eye-open-icon";
import InputRoot from "./input-root";
import InputWrapper from "./input-wrapper";
import InputField from "./input-textfield";
import { InputSearchIcon, InputPasswordToggle } from "./input-icons";
import InputError from "./input-error";

export const Input = Object.assign(InputRoot, {
  Box: InputWrapper,
  Field: InputField,
  SearchIcon: InputSearchIcon,
  PasswordToggle: InputPasswordToggle,
  Error: InputError,
});

export default Input;
