import { cva, VariantProps } from "class-variance-authority";

const InputWrapperStyles = cva(
  "group bg-black-800 focus-within:outline-sky-blue relative flex w-full items-center gap-2 rounded-2xl px-5 text-base text-gray-300 outline outline-gray-800 placeholder:text-gray-400 focus-within:text-gray-200 focus-within:outline-[1.5px]",
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
        true: "cursor-not-allowed bg-gray-900 text-gray-400 outline-none",
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

type InputWrapperStylesProps = VariantProps<typeof InputWrapperStyles>;

export { InputWrapperStyles, type InputWrapperStylesProps };
