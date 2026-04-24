"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

import iconSettings from "@/assets/ic-setting.svg";
import iconShare from "@/assets/ic-user-plus.svg";

const PROFILE_COLOR_KEYS = [
  "profile-green",
  "profile-violet",
  "profile-cyan",
  "profile-rose",
  "profile-cobalt",
  "profile-yellow",
  "profile-orange",
];

interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}

interface DashboardHeaderProps {
  members: Member[];
  totalCount: number;
}

export function DashboardHeader({ members, totalCount }: DashboardHeaderProps) {
  const router = useRouter();
  const params = useParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const dashboardId = params?.dashboardId;

  const MAX_VISIBLE_MEMBERS = 6;
  const visibleMembers = members.slice(0, MAX_VISIBLE_MEMBERS);
  const extraCount =
    totalCount > MAX_VISIBLE_MEMBERS ? totalCount - MAX_VISIBLE_MEMBERS : 0;

  const membersWithColors = useMemo(() => {
    return visibleMembers.map((member) => ({
      ...member,
      colorKey: PROFILE_COLOR_KEYS[member.id % PROFILE_COLOR_KEYS.length],
    }));
  }, [visibleMembers]);

  const handleEditClick = () => {
    if (dashboardId) router.push(`/dashboard/${dashboardId}/edit`);
  };

  if (!isMounted) {
    return (
      <header className="bg-black-900 border-black-800 fixed top-0 right-0 z-30 h-[50px] w-full border-b-2 md:h-[60px]" />
    );
  }

  return (
    <header
      className={`bg-black-900 font-pretendard border-black-800 fixed top-0 right-0 z-30 flex h-12.5 w-full items-center justify-between border-b-2 px-[12px] md:left-[220px] md:h-[60px] md:w-[calc(100%-220px)] md:justify-end md:px-[24px] lg:left-[340px] lg:w-[calc(100%-340px)]`}
    >
      <div className="flex-1 md:hidden" />

      <div
        className={`flex items-center gap-[30px] md:gap-[34px] lg:gap-[50px]`}
      >
        <div className="flex h-[24px] w-[79px] items-center md:h-[34px] md:w-auto">
          {membersWithColors.map((member, index) => (
            <div
              key={member.id}
              style={{ backgroundColor: `var(--color-${member.colorKey})` }}
              className={`border-black-900 relative flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${index !== 0 ? "-ml-[8px]" : ""} md:h-[34px] md:w-[34px] md:${index !== 0 ? "-ml-[13px]" : ""} cursor-pointer hover:z-20 hover:-translate-y-1 hover:border-white`}
            >
              {member.profileImageUrl ? (
                <Image
                  src={member.profileImageUrl}
                  alt="p"
                  fill
                  className="rounded-full object-cover"
                />
              ) : (
                <span className="text-[8px] font-medium text-white md:text-[11px]">
                  {member.nickname.slice(0, 2)}
                </span>
              )}
            </div>
          ))}

          {extraCount > 0 && (
            <div
              className={`border-black-900 z-10 -ml-[8px] flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center rounded-full border-2 bg-pink-100 text-[10px] font-bold text-pink-500 md:-ml-[13px] md:h-[34px] md:w-[34px] md:text-[12px]`}
            >
              +{extraCount}
            </div>
          )}
        </div>

        <div className="bg-black-700 h-6 w-[1px] flex-shrink-0" />

        <div className="flex h-[30px] w-[70px] flex-shrink-0 items-center gap-[10px] md:h-auto md:w-auto md:gap-4">
          <button
            onClick={handleEditClick}
            className="group flex h-[30px] w-[30px] flex-shrink-0 cursor-pointer items-center justify-center text-gray-300 transition hover:text-white md:h-auto md:w-auto md:gap-2 md:py-1.5"
          >
            <Image
              src={iconSettings}
              alt="setting"
              width={16}
              height={16}
              className="opacity-70 group-hover:opacity-100"
            />
            <span className="hidden text-sm font-medium md:inline">관리</span>
          </button>

          <button className="group flex h-7.5 w-7.5 shrink-0 cursor-pointer items-center justify-center text-gray-300 transition hover:text-white md:h-auto md:w-auto md:gap-2 md:py-1.5">
            <Image
              src={iconShare}
              alt="share"
              width={16}
              height={16}
              className="opacity-70 group-hover:opacity-100"
            />
            <span className="hidden text-sm font-medium md:inline">공유</span>
          </button>
        </div>
      </div>
    </header>
  );
}
