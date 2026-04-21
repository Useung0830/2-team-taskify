interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-modal-background border-stroke relative w-full max-w-md overflow-hidden rounded-3xl border p-7.5 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export default Modal;
