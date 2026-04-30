import Image from "next/image";

import logoImg from "@/assets/common/logo.svg";

import { DashboardAdd } from "./DashboardAdd";
import { SideButton } from "./SideButton";
import { SideHomeButton } from "./SideHomeButton";
import { UserAccount } from "./UserAccount";

export function SideMenu() {
  return (
    <div className="bg-black-900 flex h-screen w-85 flex-col pt-2.5">
      <div className="flex h-11 items-start px-4 text-2xl text-gray-100">
        <Image src={logoImg} height={40} width={156} alt="로고 이미지" />
      </div>
      <div className="flex w-85 flex-1 flex-col justify-start px-6">
        <div className="flex flex-col">
          <DashboardAdd />
          <SideHomeButton />
          <div className="flex flex-col overflow-y-auto text-gray-100">
            <SideButton />
          </div>
        </div>
      </div>
      <UserAccount />
    </div>
  );
}
