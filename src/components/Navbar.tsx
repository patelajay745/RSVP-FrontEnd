import { Link } from "react-router-dom";
import { NavItem } from "../types/navigation";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { LogoutBtn } from "./LogoutBtn";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { setTheme, theme } = useTheme();

  const NAV_ITEMS: NavItem[] = [
    { name: "Home", slug: "/", active: true },
    { name: "Dashboard", slug: "/dashboard", active: isAuthenticated },
    { name: "Login", slug: "/login", active: !isAuthenticated },
    { name: "Signup", slug: "/signup", active: !isAuthenticated },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border">
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="./logo.png"
              alt="RSVP"
              loading="lazy"
              className="h-10 dark:invert"
            />
          </Link>

          <nav className="flex items-center space-x-6">
            {NAV_ITEMS.map((item) =>
              item.active ? (
                <Link
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  key={item.name}
                  to={item.slug}
                >
                  {item.name}
                </Link>
              ) : null
            )}

            {isAuthenticated && <LogoutBtn />}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative"
            >
              <Sun
                className={`h-[1.2rem] w-[1.2rem] transition-all ${
                  theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                }`}
              />
              <Moon
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                  theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
                }`}
              />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
