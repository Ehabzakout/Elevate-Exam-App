"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// Icons and images
import logo from "@assets/images/Final Logo 1.png";
import { RiLayout2Fill } from "react-icons/ri";
import LogoutDialog from "@/components/common/logout-dialog";
import AddDiplomaButton from "./add-subject/add-diploma-button";

// likns for the sidebar
const links = [
  {
    title: "Dashboard",
    icon: <RiLayout2Fill className="h-full w-full" />,
    href: "/admin/dashboard",
  },
];

// sidebar component
export default function AdminDashboardSidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="flex w-72 flex-col gap-8 text-xl font-semibold leading-none text-[#696F79]">
        {/*  logo */}

        <Image src={logo} alt="logo" width={151} height={29} className="mb-6" />

        {/* links in sidebar */}

        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={clsx("flex items-center gap-7 rounded-xl px-2 py-3", {
              ["bg-primary text-white"]: pathname === link.href,
              ["hover:bg-blue-100"]: pathname !== link.href,
            })}
          >
            <span
              className={clsx("h-6 w-6 text-primary", {
                ["text-white"]: pathname === link.href,
              })}
            >
              {link.icon}
            </span>
            {link.title}
          </Link>
        ))}

        {/* Add diploma button */}
        <AddDiplomaButton />
        <LogoutDialog />
      </aside>
    </>
  );
}
