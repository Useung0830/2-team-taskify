import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  editModal: React.ReactNode;
}

export default function EditLayout({ children, editModal }: LayoutProps) {
  return (
    <div>
      {children}
      {editModal}
    </div>
  );
}
