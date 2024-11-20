import { useLayout } from "@/context/LayoutContext";
import {
  LayoutDashboard,
  PlusCircle,
  Calendar,
  Users,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  const { isSidebarOpen } = useLayout();
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
        flex flex-col h-[calc(100vh-57px)]
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
            className="flex items-center space-x-3 px-4 py-3  w-full 
        text-gray-700 dark:text-gray-200 
        rounded-lg 
        hover:bg-gray-200 hover:text-gray-900
        dark:hover:bg-gray-800 dark:hover:text-white 
        transition-all duration-200"
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
