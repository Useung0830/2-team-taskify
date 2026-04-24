import { ComponentPropsWithRef } from "react";

import { Label } from "@/components/label/label";
import { cn } from "@/lib/cn";

interface TextareaProps extends ComponentPropsWithRef<"textarea"> {
  label: string;
}

export function Textarea({ label, id, className, ...props }: TextareaProps) {
  return (
    <div className="flex w-full flex-col gap-y-2.5 md:gap-y-3">
      <Label htmlFor={id ?? label}>{label}</Label>
      <textarea
        id={id ?? label}
        className={cn(
          "bg-black-800 focus:outline-sky-blue h-30 w-full rounded-2xl px-5 py-4 text-base text-gray-300 outline outline-gray-800 placeholder:text-gray-400 focus:text-gray-200 focus:outline-[1.5px] md:h-35 md:py-5",
          className
        )}
        {...props}
      />
    </div>
  );
}
