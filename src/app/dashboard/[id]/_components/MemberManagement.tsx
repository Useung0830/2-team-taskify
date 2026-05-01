import { MemberHeader } from "./MemberHeader";
import { MemberList } from "./MemberList";

interface Member {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
}

interface Invitation {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface MemberManagementProps {
  members: Member[];
  invitations: Invitation[];
  memberPagination: {
    current: number;
    total: number;
    setPage: (p: number | ((prev: number) => number)) => void;
  };
  invitePagination: {
    current: number;
    total: number;
    setPage: (p: number | ((prev: number) => number)) => void;
  };
}

export function MemberManagement({
  members,
  invitations,
  memberPagination,
  invitePagination,
}: MemberManagementProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. 구성원 섹션 */}
      <div className="flex flex-1 flex-col gap-2.5">
        <MemberHeader pagination={memberPagination}>구성원</MemberHeader>
        <div className="flex-1 rounded-lg">
          {members.map((member) => (
            <MemberList key={member.id} type="member" data={member} />
          ))}
        </div>
      </div>

      {/* 2. 초대 내역 섹션 */}
      <div className="flex flex-1 flex-col gap-2.5">
        <MemberHeader pagination={invitePagination}>초대내역</MemberHeader>
        <div className="flex-1 overflow-y-auto rounded-lg">
          {invitations.map((invite) => (
            <MemberList key={invite.id} type="invite" data={invite} />
          ))}
        </div>
      </div>
    </div>
  );
}
