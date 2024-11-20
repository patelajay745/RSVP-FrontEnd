import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Progress } from "@/components/ui/progress";
import ProfileNavbar from "@/components/ProfileNavbar";
import SideBar from "@/components/Sidebar";

const DashBoardLayout: React.FC = () => {
  const { isLoading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <div className="flex flex-col flex-1">
          <ProfileNavbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <SideBar isSidebarOpen={isSidebarOpen} />
          <main className="flex-1 flex">
            <Outlet />
          </main>
        </div>
      </div>
    );
  } else {
    return (
      <Progress
        className="flex items-center justify-center w-auto bg-blue-500"
        value={33}
      />
    );
  }
};

export default DashBoardLayout;
