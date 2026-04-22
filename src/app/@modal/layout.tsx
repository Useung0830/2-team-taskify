import { Modal } from "@/components/modal/Modal";

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Modal> {children}</Modal>;
}
