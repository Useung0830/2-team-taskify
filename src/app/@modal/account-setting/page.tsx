import { getMyInfo } from "@/api/data";

import { AccountSetting } from "./_components/AccountSetting";

export default async function AccountSettingModal() {
  const userData = await getMyInfo();

  if (!userData) {
    return <div>데이터를 불러오는 중입니다... (또는 로그인 필요)</div>;
  }

  return <AccountSetting initialData={userData} />;
}
