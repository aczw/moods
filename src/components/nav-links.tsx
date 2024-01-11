"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { name: string; url: string }[] = [
  { name: "/ (root)", url: "/" },
  { name: "/dashboard", url: "/dashboard" },
  { name: "/test", url: "/test" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-100">
      navigation:
      <span className="inline-flex gap-2">
        {links.map(({ name, url }) => (
          <Link
            key={name}
            href={url}
            className={clsx({
              "font-bold": pathname === url,
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
