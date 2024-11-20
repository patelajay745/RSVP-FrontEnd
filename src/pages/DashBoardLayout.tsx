import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Progress } from "@/components/ui/progress";
import ProfileNavbar from "@/components/ProfileNavbar";
import SideBar from "@/components/Sidebar";
import { useLayout } from "@/context/LayoutContext";
import { useWindowsSize } from "@/hooks/useWindowsSize";

const DashBoardLayout: React.FC = () => {
  const { isLoading } = useAuth();
  const { isSidebarOpen, closeSidebar, openSidebar } = useLayout();
  const windowWidth = useWindowsSize();

  useEffect(() => {
    if (windowWidth < 1024) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }, [windowWidth]);

  if (!isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <div className="flex flex-col flex-1">
          <div>
            <ProfileNavbar />
          </div>
          <div className="flex flex-1">
            {isSidebarOpen && <SideBar />}
            <main
              className={`flex-1  p-4 transition-all duration-200 ease-in-out`}
            >
              <Outlet />
            </main>
          </div>
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
