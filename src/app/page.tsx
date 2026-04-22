import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <CommentForm />
      <Comment />
      <Link href={"./task-detail"}>알랄랄</Link>
    </>
  );
}
