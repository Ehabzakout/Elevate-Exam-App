import { PropsWithChildren } from "react";

import SearchBar from "../../components/features/user/search-bar";
import { Poppins } from "next/font/google";
import AdminDashboardSidebar from "./_components/admin-dashboard-sidebar";
import UserInfoMenu from "@/components/features/user/user-info-menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "500", "400"],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div
        className={`flex min-h-screen w-full gap-20 bg-[#FBF9F9] pl-8 pr-20 pt-10 ${poppins.className}`}
      >
        <AdminDashboardSidebar />
        <div className="flex w-full flex-col gap-10">
          <header>
            <SearchBar admin={true}>
              <UserInfoMenu />
            </SearchBar>
          </header>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
