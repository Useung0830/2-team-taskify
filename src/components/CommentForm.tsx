"use client";

import { useState } from "react";

function CommentForm() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex w-full items-start justify-center gap-3">
      {isExpanded ? null : <div className="pt-2 text-gray-100">정은</div>}

      {isExpanded ? (
        <div className="relative flex flex-1 flex-col gap-2">
          <div className="focus-within:border-sky-blue min-h-30 w-full overflow-y-auto rounded-2xl border border-gray-400 px-5 py-5 pr-3 pb-12 transition-colors">
            <textarea
              autoFocus
              name="content"
              className="max-h-39 min-h-6.5 w-full resize-none overflow-y-auto bg-transparent text-white [scrollbar-gutter:stable] focus:outline-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-transparent"
              placeholder="댓글을 남겨보세요"
              onChange={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
          </div>
          <div className="absolute right-6 bottom-4 flex justify-end gap-3.5">
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="rounded-full bg-gray-900 px-4 py-1.5 text-sm text-gray-100 transition-colors duration-300 hover:bg-gray-700"
            >
              취소
            </button>
            <button
              type="submit"
              className="bg-brand-600 hover:bg-brand-800 rounded-full px-4 py-1.5 text-sm text-white transition-colors duration-300"
            >
              등록
            </button>
          </div>
        </div>
      ) : (
        <input
          readOnly
          onClick={() => setIsExpanded(true)}
          className="focus:border-brand-600 hover:border-sky-blue h-10 flex-1 cursor-pointer rounded-4xl border border-gray-400 px-5 py-2.5 text-gray-900 transition-colors focus:outline-none"
          placeholder="댓글을 남겨보세요"
        />
      )}
    </div>
  );
}

export default CommentForm;
