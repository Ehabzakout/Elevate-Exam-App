"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

//Array to provide nav links

const nav = [
  { title: "Login", href: "/login" },
  { title: "Register", href: "/register" },
];

//Authentication Navigation bar component

export default function Navbar() {
  const pathName = usePathname();

  return (
    <>
      <nav className="mx-auto w-fit pt-20">
        <ul className="flex items-center gap-16 text-xl leading-none">
          {/* select language box*/}

          <select
            defaultValue={"english"}
            name="language"
            className="p-2 outline-none"
          >
            <option value={"arabic"}>Arabic</option>
            <option value={"english"}>English</option>
          </select>

          {/* links for navigation */}

          {nav.map((link) => (
            <li key={link.href}>
              <Link
                href={`/auth${link.href}`}
                className={clsx(
                  pathName.startsWith(`/auth${link.href}`) && "active",
                )}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
