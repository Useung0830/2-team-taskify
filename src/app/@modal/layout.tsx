import Modal from "@/components/Modal";

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Modal>{children}</Modal>;
}
