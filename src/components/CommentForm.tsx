function CommentForm() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div>정은</div>
      <input
        name="content"
        className="focus:border-brand-600 h-10 flex-1 rounded-4xl border border-gray-400 px-5 py-2.5 text-gray-100 transition-colors focus:outline-none"
        placeholder="댓글을 남겨보세요 "
      />
    </div>
  );
}

export default CommentForm;
