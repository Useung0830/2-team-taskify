"use client";

import { logout } from "@/actions/auth";

const page = () => {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex h-screen justify-center align-middle">
      <button
        className="bg-brand-500 rounded-lg px-6 py-2 text-white"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  );
};

export default page;
