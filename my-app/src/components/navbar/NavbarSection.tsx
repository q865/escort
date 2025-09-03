import { ReactNode } from "react";

type NavbarSectionProps = {
  children: ReactNode;
};

export function NavbarSection({ children }: NavbarSectionProps) {
  return <div className="flex gap-6">{children}</div>;
}
