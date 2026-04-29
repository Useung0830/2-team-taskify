interface DialogLayoutProps {
  children: React.ReactNode;
}

export function DialogLayout({ children }: DialogLayoutProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-modal-background border-stroke relative w-full max-w-114.5 overflow-hidden rounded-3xl border p-8.5 shadow-2xl">
        {children}
      </div>
    </div>
  );
}
