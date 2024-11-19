import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Progress } from "@/components/ui/progress";
import ProfileNavbar from "@/components/ProfileNavbar";

const DashBoardLayout: React.FC = () => {
  const { isLoading } = useAuth();

  if (!isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <div className="flex flex-col flex-1">
          <ProfileNavbar />

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

      // <PageSpinner />
    );
  }
};

export default DashBoardLayout;
