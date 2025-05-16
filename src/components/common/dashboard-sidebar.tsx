"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// Icons and images
import logo from "@assets/images/Final Logo 1.png";
import { History } from "lucide-react";
import { RiLayout2Fill } from "react-icons/ri";
import LogoutDialog from "@/components/features/user/logout-dialog";

// likens for the sidebar
const links = [
  {
    title: "Dashboard",
    icon: <RiLayout2Fill className="h-full w-full" />,
    href: "/dashboard",
  },
  { title: "Quiz History", icon: <History />, href: "/quiz-history" },
];

// sidebar component
export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-8 text-xl font-semibold leading-none text-[#696F79]">
      {/*  logo */}
      <Link href="/dashboard">
        <Image src={logo} alt="logo" width={151} height={29} className="mb-6" />
      </Link>

      {/* Navigation */}
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={clsx("flex w-48 items-center gap-7 rounded-xl px-2 py-3", {
            ["bg-primary text-white"]: pathname === link.href,
            ["hover:bg-blue-100"]: pathname !== link.href,
          })}
        >
          {/* Icon */}
          <span
            className={clsx("h-6 w-6 text-primary", {
              ["text-white"]: pathname === link.href,
            })}
          >
            {link.icon}
          </span>

          {/* Title  */}
          {link.title}
        </Link>
      ))}

      {/* Logout */}
      <LogoutDialog />
    </aside>
  );
}
