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
}

export function MemberList({ type, data }: MemberListProps) {
  const displayName =
    type === "member"
      ? (data as Member).nickname
      : (data as Invitation).invitee.email;

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
        <Button colortype="secondary" size="xs">
          {type === "member" ? "삭제" : "취소"}
        </Button>
      </div>
    </div>
  );
}
