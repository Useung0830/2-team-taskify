import { Modal } from "@/components/modal/Modal";

export default function EditModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Modal> {children}</Modal>;
}
