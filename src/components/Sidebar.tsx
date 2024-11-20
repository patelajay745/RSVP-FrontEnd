import {
  LayoutDashboard,
  PlusCircle,
  Calendar,
  Users,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SideBarProps {
  isSidebarOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    {
      icon: PlusCircle,
      label: "Create Event",
      path: "/dashboard/create-event",
    },
    { icon: Calendar, label: "My Events", path: "/dashboard/events" },
    { icon: Users, label: "Attendees", path: "/dashboard/attendees" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];
  return (
    <aside
      className={`
        fixed top-[57px] left-0 z-40 h-[calc(100vh-57px)]
        w-64 bg-background border-r border-border/40
        transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-white rounded-lg hover:bg-gray-100 transition-colors"
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
