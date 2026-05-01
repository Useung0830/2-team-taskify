import { getMemberList } from "@/api/data";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { SideMenu } from "@/components/SideMenu";

// interface Member {
//   id: number;
//   userId: number;
//   email: string;
//   nickname: string;
//   profileImageUrl: string;
//   createdAt: string;
//   updatedAt: string;
//   isOwner: boolean;
// }

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dashboardId = Number(id);

  //대시보드 아이디로 속해 있는 맴버 조회하는 함수
  const getDashboardMembers = async (id: number) => {
    const response = await getMemberList({ dashboardId: id });
    return response;
  };

  const dashboardMembers = getDashboardMembers(dashboardId);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#181818] text-white">
      <aside className="w-75 shrink-0">
        <SideMenu />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-17.5 shrink-0 items-center justify-between px-8">
          {dashboardMembers && (
            <DashboardHeader
              members={(await dashboardMembers).members}
              totalCount={(await dashboardMembers).totalCount}
            />
          )}
        </header>
        <main className="flex-1 overflow-y-auto bg-[#181818] p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
