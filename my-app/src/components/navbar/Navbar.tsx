import { ReactNode } from "react";

type NavbarProps = {
  children: ReactNode;
};

export function Navbar({ children }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-900 text-white">
      {children}
    </nav>
  );
}
