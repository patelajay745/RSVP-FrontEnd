import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
