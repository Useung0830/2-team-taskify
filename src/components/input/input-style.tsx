import { cva, VariantProps } from "class-variance-authority";

const InputWrapperStyles = cva(
  "group flex relative items-center gap-2 px-5 bg-black-800 w-full text-base outline outline-gray-800 focus-within:text-gray-200 focus-within:outline-[1.5px] focus-within:outline-sky-blue text-gray-300 placeholder:text-gray-400 rounded-2xl",
  {
    variants: {
      inputSize: {
        md: "h-13.5",
        sm: "h-12",
      },
      error: {
        true: "outline-red",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed outline-none bg-gray-900 text-gray-400",
        false: "",
      },
    },
    defaultVariants: {
      inputSize: "md",
      error: false,
      disabled: false,
    },
  }
);

interface InputWrapperStylesProps extends VariantProps<
  typeof InputWrapperStyles
> {}

export { InputWrapperStyles, type InputWrapperStylesProps };
