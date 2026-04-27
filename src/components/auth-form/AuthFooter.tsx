import Link from "next/link";

import { AUTH_CONTENT } from "./AuthConst";

export interface AuthContentProps {
  type: keyof typeof AUTH_CONTENT;
}

export function AuthFooter({ type }: AuthContentProps) {
  return (
    <p className="text-center text-base text-gray-400">
      {AUTH_CONTENT[type].footerMessage}{" "}
      <Link href={AUTH_CONTENT[type].footerHref} className="text-gray-300">
        {AUTH_CONTENT[type].footerLinkText}
      </Link>
    </p>
  );
}
