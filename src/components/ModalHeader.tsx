import Image from "next/image";
import icX from "../assets/ic-x.svg";

interface ModalHeaderProps {
  children: string;
  onClose: () => void;
}

function ModalHeader({ children, onClose }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-300">{children}</h1>
      <button
        onClick={onClose}
        className="relative h-6 w-6 transition-transform hover:scale-110 active:opacity-70"
      >
        <Image src={icX} alt="닫기 버튼" fill className="object-contain" />
      </button>
    </div>
  );
}

export default ModalHeader;
