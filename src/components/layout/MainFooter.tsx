import Image from "next/image";
import Link from "next/link";

import iconEmail from "@/assets/ic-email.svg";
import iconFacebook from "@/assets/ic-facebook.svg";
import iconInstagram from "@/assets/ic-instagram.svg";
import logoImg from "@/assets/logo.svg";

export function MainFooter() {
  return (
    <footer className="bg-black-900 border-black-800 w-full border-t">
      <div className="flex h-[151px] flex-col gap-5 px-[30px] pt-[14px] pb-6 md:h-[92px] md:flex-row md:items-center md:justify-between md:gap-0 md:px-10 md:py-6 lg:h-24 lg:px-[120px]">
        <div className="relative h-[34px] w-[130px] md:h-[44px] md:w-[170px] lg:h-12 lg:w-[186px]">
          <Image
            src={logoImg}
            alt="Taskify 로고"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex gap-5 md:gap-6 lg:gap-8">
          <Link
            href="/privacy"
            className="text-sm text-gray-400 transition hover:text-white md:text-[15px] lg:text-base"
          >
            Privacy Policy
          </Link>
          <Link
            href="/faq"
            className="text-sm text-gray-400 transition hover:text-white md:text-[15px] lg:text-base"
          >
            FAQ
          </Link>
        </div>

        <div className="flex h-[22px] w-[92px] items-center gap-[14px]">
          <Link href="mailto:contact@taskify.com">
            <Image src={iconEmail} alt="email" width={22} height={22} />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <Image src={iconFacebook} alt="facebook" width={22} height={22} />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image src={iconInstagram} alt="instagram" width={22} height={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
