"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
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
  const extraCount = totalCount > MAX_VISIBLE_MEMBERS ? totalCount - MAX_VISIBLE_MEMBERS : 0;

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
    return <header className="fixed top-0 right-0 z-30 w-full h-[50px] md:h-[60px] bg-black-900 border-b-2 border-black-800" />;
  }

  return (
    <header
      className={`
        fixed top-0 right-0 z-30 flex items-center bg-black-900 font-pretendard border-black-800 border-b-2
        w-full h-[50px] px-[12px] justify-between
        md:left-[220px] md:w-[calc(100%-220px)] md:h-[60px] md:px-[24px] md:justify-end
        lg:left-[340px] lg:w-[calc(100%-340px)]
      `}
    >
      <div className="md:hidden flex-1" />

      <div className={`flex items-center gap-[30px] md:gap-[34px] lg:gap-[50px]`}>
        
        <div className="flex items-center w-[79px] md:w-auto h-[24px] md:h-[34px]">
          {membersWithColors.map((member, index) => (
            <div
              key={member.id}
              style={{ backgroundColor: `var(--color-${member.colorKey})` }}
              className={`
                relative flex items-center justify-center rounded-full border-2 border-black-900 flex-shrink-0 transition-all
                h-[24px] w-[24px] ${index !== 0 ? "-ml-[8px]" : ""}
                md:h-[34px] md:w-[34px] md:${index !== 0 ? "-ml-[13px]" : ""}
                hover:-translate-y-1 hover:z-20 hover:border-white cursor-pointer
              `}
            >
              {member.profileImageUrl ? (
                <Image src={member.profileImageUrl} alt="p" fill className="rounded-full object-cover" />
              ) : (
                <span className="text-[8px] md:text-[11px] font-medium text-white">
                  {member.nickname.slice(0, 2)}
                </span>
              )}
            </div>
          ))}

          {extraCount > 0 && (
            <div className={`
              -ml-[8px] md:-ml-[13px] flex items-center justify-center rounded-full border-2 border-black-900 bg-pink-100 font-bold text-pink-500 z-10
              flex-shrink-0
              h-[24px] w-[24px] text-[10px] 
              md:h-[34px] md:w-[34px] md:text-[12px]
            `}>
              +{extraCount}
            </div>
          )}
        </div>

        <div className="h-6 w-[1px] bg-black-700 flex-shrink-0" />

        <div className="flex items-center w-[70px] h-[30px] gap-[10px] md:w-auto md:h-auto md:gap-4 flex-shrink-0">
          <button 
            onClick={handleEditClick}
            className="group flex items-center justify-center cursor-pointer transition text-gray-300 hover:text-white w-[30px] h-[30px] md:w-auto md:h-auto md:py-1.5 md:gap-2 flex-shrink-0"
          >
            <Image src={iconSettings} alt="setting" width={16} height={16} className="opacity-70 group-hover:opacity-100" />
            <span className="hidden md:inline text-sm font-medium">관리</span>
          </button>
          
          <button className="group flex items-center justify-center cursor-pointer transition text-gray-300 hover:text-white w-[30px] h-[30px] md:w-auto md:h-auto md:py-1.5 md:gap-2 flex-shrink-0">
            <Image src={iconShare} alt="share" width={16} height={16} className="opacity-70 group-hover:opacity-100" />
            <span className="hidden md:inline text-sm font-medium">공유</span>
          </button>
        </div>
      </div>
    </header>
  );
}