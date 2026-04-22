interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-modal-background border-stroke relative flex max-w-218.5 overflow-hidden rounded-3xl border p-7.5 shadow-2xl">
        {children}
      </div>
    </div>
  );
}
