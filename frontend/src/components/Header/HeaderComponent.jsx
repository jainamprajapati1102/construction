import React, { useState } from "react";
import { Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
  const [userName] = useState("jainam");
  const navigate = useNavigate();

  const onLogout = () => {
    // Clear auth & redirect
    alert("Logged out!");
    // Add redirect logic here if needed, e.g., navigate('/login')
  };

  return (
    <header className="w-full bg-white shadow-sm px-4 py-2 flex justify-end items-center">
      {/* Right: Notification, Username, Logout */}
      <div className="flex items-center gap-2">
        {/* Notification Icon */}
        <button className="relative" title="Notifications">
          <Bell className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Name */}
        <span className="text-gray-800 text-sm font-medium capitalize">
          {userName}
        </span>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="text-red-500 hover:text-red-600 transition-colors"
          title="Logout"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
