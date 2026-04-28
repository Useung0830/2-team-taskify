import { Button } from "@/components/Button";

import { UserInfo } from "./InvitionContainer";
import { Profile } from "./Profile";

export function InvitionRow({
  title,
  inviter,
}: {
  title: string;
  inviter: UserInfo;
}) {
  return (
    <div className="flex flex-col justify-between gap-1 px-2.5 pt-4 pb-4.5 md:flex-row">
      <div className="w-75">{title}</div>
      <div className="flex items-center justify-between">
        <div className="w-50">
          {/* 임시 컴포넌트 @TODO 교체 필요*/}
          <Profile name={inviter.nickname} />
        </div>
        <div className="flex w-[130px] gap-3">
          <Button size={"sm"} colorType={"secondary"}>
            거절
          </Button>
          <Button size={"sm"}>수락</Button>
        </div>
      </div>
    </div>
  );
}
