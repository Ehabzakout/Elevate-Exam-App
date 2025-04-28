import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default async function UserInfoMenu() {
  const session = await getServerSession(authOptions);
  const image = session?.user?.image;
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex size-16 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-2xl font-semibold text-primary">
            {session && image ? (
              <Image src={image} alt="photo" height={64} width={64} />
            ) : (
              session?.user?.firstName[0].toUpperCase()
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/auth/user">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth/user/change-password">Change Password</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth/user/edit-profile">Edit Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
