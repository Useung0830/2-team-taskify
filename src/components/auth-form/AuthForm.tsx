import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

import Logo from "@/assets/logo.svg";

import { Button } from "../Button";

import { AUTH_CONTENT } from "./AuthConst";
import { AuthFooter, type AuthContentProps } from "./AuthFooter";

interface AuthFormProps
  extends AuthContentProps, ComponentPropsWithRef<"form"> {}

export function AuthForm({ type, children, ...props }: AuthFormProps) {
  return (
    <form className="flex w-full max-w-130 flex-col gap-6 md:gap-8" {...props}>
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          width={300}
          height={77}
          className="mx-auto"
          priority
        />
      </Link>

      <div className="flex flex-col gap-y-4">{children}</div>

      <div className="flex w-full flex-col gap-y-4">
        <Button type="submit" className="w-full">
          {AUTH_CONTENT[type].buttonText}
        </Button>
        <AuthFooter type={type} />
      </div>
    </form>
  );
}
