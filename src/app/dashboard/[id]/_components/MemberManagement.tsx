"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getMemberList, getInvitationList } from "@/api/data";

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

export function MemberManagement() {
  const [members, setMembers] = useState<Member[]>([]);
  const [invitations, setInvitations] = useState<Invitation[]>([]);

  const params = useParams();
  const searchParams = useSearchParams();
  const dashboardId = Number(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 병렬로 두 데이터를 모두 가져옵니다.
        const [memberRes, inviteRes] = await Promise.all([
          getMemberList({ dashboardId, page: 1, size: 6 }),
          getInvitationList(dashboardId, { page: 1, size: 6 }),
        ]);

        setMembers(memberRes.members);
        setInvitations(inviteRes.invitations);
      } catch (error) {
        console.error("데이터 로딩 중 오류 발생:", error);
      }
    };

    if (dashboardId) {
      fetchData();
    }
  }, [dashboardId, searchParams]);

  return (
    <div className="flex flex-col gap-6">
      {/* 1. 구성원 섹션 */}
      <div className="flex flex-1 flex-col gap-2.5">
        <MemberHeader>구성원</MemberHeader>
        <div className="flex-1 rounded-lg">
          {members.map((member) => (
            <MemberList key={member.id} type="member" data={member} />
          ))}
        </div>
      </div>

      {/* 2. 초대 내역 섹션 */}
      <div className="flex flex-1 flex-col gap-2.5">
        <MemberHeader>초대내역</MemberHeader>
        <div className="flex-1 overflow-y-auto rounded-lg">
          {invitations.map((invite) => (
            <MemberList key={invite.id} type="invite" data={invite} />
          ))}
        </div>
      </div>
    </div>
  );
}
