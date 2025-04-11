// Layout.jsx
import React from "react";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { FooterComponent } from "./components/Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import "./style/styles.css";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Area: Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SidebarComponent />

        {/* Main content */}
        <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
          <HeaderComponent />

          <main className="flex-1 p-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};
