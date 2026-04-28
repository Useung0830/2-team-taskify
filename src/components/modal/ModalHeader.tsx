import { ModalCloseButton } from "./ModalCloseButton";

interface ModalHeaderProps {
  children: string;
}

export function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-300">{children}</h1>
      <ModalCloseButton />
    </div>
  );
}
