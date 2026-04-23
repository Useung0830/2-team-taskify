"use client";
import { useState } from "react";

import { DeleteAlertModal } from "@/components/DeleteAlertModal";

export default function ColumnDelete() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const handleDelete = () => setIsOpen(false);

  return (
    <DeleteAlertModal
      isOpen={isOpen}
      onClose={handleClose}
      onDelete={handleDelete}
      variant="mobile"
    />
  );
}
