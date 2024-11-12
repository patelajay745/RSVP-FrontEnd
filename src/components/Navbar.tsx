import { Link } from "react-router-dom";
import { NavItem } from "../types/navigation";
import React from "react";

const Navbar: React.FC = () => {
  const NAV_ITEMS: NavItem[] = [
    { name: "Home", slug: "/", active: true },
    { name: "Dashboard", slug: "/dashboard", active: true },
    { name: "Login", slug: "/login", active: true },
    { name: "Signup", slug: "/signup", active: true },
  ];

  return (
    <header className="bg-white shadow h-1/10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <img
            src="./logo.png"
            alt="RSVP"
            loading="lazy"
            className="h-10"
          ></img>
        </Link>

        <nav className="flex items-center space-x-6">
          {NAV_ITEMS.map((item) =>
            item.active ? (
              <Link
                className="text-gray-700 hover:text-gray-900 font-medium"
                key={item.name}
                to={item.slug}
              >
                {item.name}
              </Link>
            ) : null
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
