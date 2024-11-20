export interface NavItem {
  name: string;
  slug: string;
  active: boolean;
}

export interface ProfileNavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}
