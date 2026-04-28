import Image from "next/image";

import icLeft from "@/assets/ic-chevronleft.svg";
import icRight from "@/assets/ic-chevronright.svg";

import { InviteButton } from "./InviteButton";
interface MemberHeaderProps {
  children: React.ReactNode;
}

export function MemberHeader({ children }: MemberHeaderProps) {
  const isInvitationSection = children === "초대내역";

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-2.5">
        <span className="text-xl font-bold text-gray-100">{children}</span>
        {isInvitationSection && <InviteButton />}
      </div>
      <div className="flex">
        <span className="font-semibold">1 of 3</span>
        <div className="flex">
          <Image src={icLeft} alt="왼쪽 버튼" height={24} width={24} />
          <Image src={icRight} alt="왼쪽 버튼" height={24} width={24} />
        </div>
      </div>
    </div>
  );
}
