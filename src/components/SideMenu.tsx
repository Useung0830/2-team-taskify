import { DashboardAdd } from "./DashboardAdd";
import { SideButton } from "./SideButton";
import { SideHomeButton } from "./SideHomeButton";
import { UserAccount } from "./UserAccount";

export function SideMenu() {
  return (
    <div className="bg-black-900 flex h-screen w-85 flex-col pt-2.5">
      <div className="flex h-11 items-start px-4 text-2xl text-gray-100">
        Logo
      </div>
      <div className="flex w-85 flex-1 flex-col justify-start px-6">
        <div className="flex flex-col">
          <DashboardAdd />
          <SideHomeButton />
          <div className="flex flex-col text-gray-100">
            <SideButton />
            <div>사이드 버튼</div>
            <div>사이드 버튼</div>
            <div>사이드 버튼</div>
            <div>사이드 버튼</div>
          </div>
        </div>
      </div>
      <UserAccount />
    </div>
  );
}
