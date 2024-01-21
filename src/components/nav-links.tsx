"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { name: string; href: string }[] = [
  { name: "/ (root)", href: "/" },
  { name: "/create", href: "/create" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-100">
      navigation:
      <span className="inline-flex gap-2">
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={clsx({
              "font-bold": pathname === href,
            })}
          >
            {name}
          </Link>
        ))}
      </span>
    </nav>
  );
};

export { NavLinks };
