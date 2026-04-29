export function InvitionHeader() {
  return (
    <div className="flex h-11.75 justify-between text-[16px]">
      <div className="w-75">이름</div>
      <div className="flex gap-25">
        <span className="w-28">초대자</span>
        <span className="w-31">수락 여부</span>
      </div>
    </div>
  );
}
