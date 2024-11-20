import React from "react";

import { useAuth } from "@/context/AuthContext";
import { DefaultDashboard } from "@/components/DefaultDashboard";
import { VerifiedDashBoard } from "@/components/VerifiedDashBoard";

export const DashBoardPage: React.FC = () => {
  const { user } = useAuth();
  const verifiedEmail = user?.confirmed;

  return verifiedEmail ? <VerifiedDashBoard /> : <DefaultDashboard />;
};
