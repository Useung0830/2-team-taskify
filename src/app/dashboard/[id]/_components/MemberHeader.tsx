import { InviteButton } from "./InviteButton";
import { PaginationButton } from "./PaginationButton";
interface MemberHeaderProps {
  children: string;
  pagination: {
    current: number;
    total: number;
    // 에러 메시지가 요구하는 타입 형식
    setPage: (p: number | ((prev: number) => number)) => void;
  };
}

export function MemberHeader({ children, pagination }: MemberHeaderProps) {
  const isInvitationSection = children === "초대내역";
  const { current, total, setPage } = pagination;

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => prev - 1);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-2.5">
        <span className="text-xl font-bold text-gray-100">{children}</span>
        {isInvitationSection && <InviteButton />}
      </div>

      <PaginationButton
        current={current - 1}
        total={total === 0 ? 1 : total}
        onClickPrev={handlePrev}
        onClickNext={handleNext}
      />
    </div>
  );
}
