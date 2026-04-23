interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  handleClose?: () => void;
}

export function Modal({ children, isOpen = true, handleClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleClose}
    >
      <div
        className="bg-modal-background border-stroke relative w-fit max-w-[95vw] overflow-hidden rounded-3xl border p-7.5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
