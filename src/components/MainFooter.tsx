"use client";

import Image from "next/image";
import Link from "next/link";
import iconEmail from "@/assets/ic-email.svg";
import iconFacebook from "@/assets/ic-facebook.svg";
import iconInstagram from "@/assets/ic-instagram.svg";
import logoImg from "@/assets/logo.svg";

export function MainFooter() {
  return (
    <footer className="w-full bg-black-900 border-t border-black-800">
      <div
        className="flex flex-col gap-[20px] h-[151px] px-[30px] pt-[14px] pb-[24px] md:flex-row md:items-center md:justify-between md:h-[92px] md:px-[40px] md:py-[24px] md:gap-0 lg:h-[96px] lg:px-[120px]"
      >
        <div className="relative h-[34px] w-[130px] md:h-[44px] md:w-[170px] lg:h-[48px] lg:w-[186px]">
          <Image
            src={logoImg}
            alt="Taskify 로고"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex gap-[20px] md:gap-[24px] lg:gap-[32px]">
          <Link
            href="/privacy"
            className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/faq"
            className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 hover:text-white transition"
          >
            FAQ
          </Link>
        </div>

        <div className="flex items-center w-[92px] h-[22px] gap-[14px]">
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