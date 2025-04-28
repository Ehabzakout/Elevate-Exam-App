"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// Icons and images
import logo from "@assets/images/Final Logo 1.png";
import LogoutDialog from "@/components/common/logout-dialog";
import DeleteAccountDialog from "./delete-account-dialog";

// likens for the sidebar
const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  { title: "User Info", href: "/auth/user" },
  { title: "Change Password", href: "/auth/user/change-password" },
  { title: "Edit Profile", href: "/auth/user/edit-profile" },
];

export default function UserSideBar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="flex flex-col gap-8 text-xl font-semibold leading-none text-[#696F79]">
        {/*  logo */}
        <Link href="/dashboard">
          <Image
            src={logo}
            alt="logo"
            width={151}
            height={29}
            className="mb-6"
          />
        </Link>

        {/* links in sidebar */}

        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={clsx(
              "flex w-64 items-center gap-7 rounded-xl px-3 py-3",
              {
                ["bg-primary text-white"]: pathname === link.href,
                ["hover:bg-blue-100"]: pathname !== link.href,
              },
            )}
          >
            {/*Link title  */}

            {link.title}
          </Link>
        ))}

        {/* Delete Account button */}

        <DeleteAccountDialog />

        {/* Logout  */}

        <LogoutDialog />
      </aside>
    </>
  );
}
