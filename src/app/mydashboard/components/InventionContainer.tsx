import { InventionHeader } from "./InventionHeader";
import { InventionRow } from "./InventionRow";

export interface UserInfo {
  id: number;
  nickname: string;
  email: string;
}

export interface DashboardInfo {
  id: number;
  title: string;
}

export interface InvitedData {
  id: number;
  inviter: UserInfo;
  teamId: string;
  dashboard: DashboardInfo;
  invitee: UserInfo;
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}
interface InventionContainerProps {
  invitedData: InvitedData[];
}
export function InventionContainer({ invitedData }: InventionContainerProps) {
  console.log(invitedData);
  // const { dashboard, inviter } = invitedData;
  return (
    <div>
      <div className="hidden md:block">
        <InventionHeader />
      </div>
      {/* {Array.from({ length: 10 }).map((_, i) => (
        <InventionRow key={i} title={dashbard.title} />
      ))} */}
      {invitedData.map((item) => (
        <InventionRow
          key={item.id}
          title={item.dashboard.title}
          inviter={item.inviter}
        />
      ))}
    </div>
  );
}
