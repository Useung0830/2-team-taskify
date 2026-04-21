import Profile from "./Profile";

export default function InventionRow() {
  return (
    <div className="flex h-16 items-center justify-between px-7.5 py-3.5 text-[18px]">
      <div className="w-75">프로덕트 디자인</div>
      <div className="flex items-center gap-25">
        <span className="w-50">
          {/* 임시 컴포넌트 @TODO 교체 필요*/}
          <Profile name="김정은" />
        </span>
        <div className="flex gap-3">
          <button className="rounded-[100px] bg-gray-900 px-3.5 py-1.5">
            거절
          </button>
          <button className="rounded-[100px] bg-green-500 px-3.5 py-1.5">
            수락
          </button>
        </div>
      </div>
    </div>
  );
}
