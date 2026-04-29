"use client";

import { useParams } from "next/navigation";

import { deleteInvitation, deleteMember } from "@/api/data";
import { Button } from "@/components/Button";
import { Profile } from "@/components/profile/Profile";

interface Member {
  id: number;
  userId: number;
  nickname: string;
  email: string;
  profileImageUrl?: string | null;
  isOwner: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Invitation {
  id: number;
  invitee: {
    email: string;
    nickname: string;
  };
}

interface MemberListProps {
  type: "member" | "invite";
  data: Member | Invitation;
  onDelete: () => void;
}

export function MemberList({ type, data, onDelete }: MemberListProps) {
  const params = useParams();
  const dashboardId = Number(params.id);

  const displayName =
    type === "member"
      ? (data as Member).nickname
      : (data as Invitation).invitee.email;

  // 삭제/취소 핸들러
  const handleAction = async () => {
    const confirmMessage =
      type === "member"
        ? "해당 멤버를 삭제하시겠습니까?"
        : "초대를 취소하시겠습니까?";

    if (!confirm(confirmMessage)) return;

    try {
      if (type === "member") {
        await deleteMember(data.id);
      } else {
        await deleteInvitation(dashboardId, data.id);
      }
      onDelete();
      alert("성공적으로 처리되었습니다.");
    } catch (error) {
      console.error("처리 중 오류 발생:", error);
      alert("요청을 처리하는 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-[#383A42] py-3.5 text-gray-100 max-md:py-3">
      <div className="flex items-center gap-3">
        <Profile
          name={displayName}
          type={type}
          imageUrl={
            type === "member" ? (data as Member).profileImageUrl : undefined
          }
        />
      </div>
      <div className="w-14">
        <Button colorType="secondary" size="xs" onClick={handleAction}>
          {type === "member" ? "제외" : "취소"}
        </Button>
      </div>
    </div>
  );
}
