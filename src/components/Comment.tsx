function Comment() {
  return (
    <div className="flex gap-3">
      <div className="text-gray-100">정은</div>
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex items-center justify-start gap-1">
          <span className="text-base font-medium text-gray-100">이름</span>
          <span className="text-sm font-medium text-gray-400">
            2025년 4월 21일 오전 9:00
          </span>
        </div>
        <span className="flex-1 text-base font-medium text-gray-100">
          Comment Text
        </span>
      </div>
    </div>
  );
}

export default Comment;
