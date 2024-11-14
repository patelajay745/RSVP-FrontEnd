import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useAuth } from "@/context/AuthContext";
import { Progress } from "@/components/ui/progress";

const Layout: React.FC = () => {
  const { isLoading } = useAuth();
  if (!isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 flex">
            <Outlet />
          </main>
        </div>
        <Footer />
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

export default Layout;
