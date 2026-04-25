interface MyProps {
  children: React.ReactNode; // children의 올바른 타입
}

export function EditSideButton({ children }: MyProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl px-3.5 py-4">
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 z-0 m-auto h-0 w-0 bg-[#2C2B30] opacity-0 transition-all duration-500 ease-out group-hover:h-[300%] group-hover:w-[300%] group-hover:opacity-100" />
    </div>
  );
}
