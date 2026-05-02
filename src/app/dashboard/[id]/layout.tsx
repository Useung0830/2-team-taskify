import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  dashboardModal: React.ReactNode;
}

export default function EditLayout({ children, dashboardModal }: LayoutProps) {
  return (
    <div>
      {children}
      {dashboardModal}
    </div>
  );
}
