import { Button } from "../Button";

import { DialogLayout } from "./DialogLayout";

interface DialogProps {
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Dialog({
  description,
  isOpen,
  onClose: handleClose,
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <DialogLayout>
      <div className="flex flex-col items-center gap-5 md:mt-5 md:gap-7.5">
        <p className="text-xl text-gray-200">{description}</p>
        <Button onClick={handleClose} size="md" className="w-full">
          확인
        </Button>
      </div>
    </DialogLayout>
  );
}
