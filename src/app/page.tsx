import Link from "next/link";

import { Comment } from "@/components/Comment";
import { CommentForm } from "@/components/CommentForm";

export default function Home() {
  return (
    <>
      <CommentForm />
      <Comment />
      <Link href={"./task-detail"}>알랄랄</Link>
    </>
  );
}
