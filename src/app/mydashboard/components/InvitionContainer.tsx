import { InvitionHeader } from "./InvitionHeader";
import { InvitionRow } from "./InvitionRow";

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
interface InvitionContainerProps {
  invitedData: InvitedData[];
}
export function InvitionContainer({ invitedData }: InvitionContainerProps) {
  console.log(invitedData);
  // const { dashboard, inviter } = invitedData;
  return (
    <div>
      <div className="hidden md:block">
        <InvitionHeader />
      </div>
      {/* {Array.from({ length: 10 }).map((_, i) => (
        <InventionRow key={i} title={dashbard.title} />
      ))} */}
      {invitedData.map((item) => (
        <InvitionRow
          key={item.id}
          title={item.dashboard.title}
          inviter={item.inviter}
        />
      ))}
    </div>
  );
}
