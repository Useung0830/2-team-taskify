import Image from "next/image";

import { getDashboardList, getMyInfo } from "@/api/data";
import logoImg from "@/assets/common/logo.svg";

import { DashboardAdd } from "./DashboardAdd";
import { SideDashboardList } from "./SideDashboardList";
import { SideHomeButton } from "./SideHomeButton";
import { UserAccount } from "./UserAccount";

export interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

interface SideMenuProps {
  isOpen?: boolean;
}

export async function SideMenu({ isOpen = false }: SideMenuProps) {
  let initialDashboards: Dashboard[] = [];
  let initialTotalCount: number = 0;

  const myInfo = await getMyInfo();

  try {
    const response = await getDashboardList({
      navigationMethod: "pagination",
      page: 1,
      size: 20,
    });

    initialDashboards = response.dashboards;
    initialTotalCount = response.totalCount;
  } catch (error) {
    console.error("대시보드 목록을 불러오는데 실패했습니다:", error);
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`bg-black-900 fixed top-0 left-0 z-30 flex h-screen w-[clamp(220px,20vw,340px)] flex-col pt-2.5 transition-transform duration-300 lg:relative ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} `}
      >
        <div className="flex h-11 items-start px-4 text-2xl text-gray-100">
          <Image src={logoImg} height={40} width={156} alt="로고 이미지" />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden px-6 max-lg:px-2.5">
          <div className="flex min-h-0 flex-1 flex-col">
            <DashboardAdd />
            <SideHomeButton />
            <div className="min-h-0 flex-1 text-gray-100">
              {initialDashboards.length > 0 ? (
                <SideDashboardList
                  initialDashboards={initialDashboards}
                  initialTotalCount={initialTotalCount}
                />
              ) : (
                <p className="px-3 py-4 text-center text-sm text-gray-400">
                  대시보드가 없습니다.
                </p>
              )}
            </div>
          </div>
        </div>
        <UserAccount
          nickname={myInfo.nickname}
          profileImageUrl={myInfo.profileImageUrl}
        />
      </div>
    </>
  );
}
