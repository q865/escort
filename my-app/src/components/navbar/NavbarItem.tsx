import { ReactNode } from "react";
import clsx from "clsx";

type NavbarItemProps = {
  children: ReactNode;
  href: string;
  current?: boolean;
};

export function NavbarItem({ children, href, current }: NavbarItemProps) {
  return (
    <a
      href={href}
      className={clsx(
        "px-3 py-2 rounded-md hover:bg-gray-700 transition",
        current && "bg-gray-800 font-bold"
      )}
    >
      {children}
    </a>
  );
}
