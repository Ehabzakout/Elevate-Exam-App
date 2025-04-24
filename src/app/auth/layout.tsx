import { PropsWithChildren } from "react";
import AuthMainPage from "./_components/auth-main-page";
import Navbar from "./_components/navbar";
import { Poppins } from "next/font/google";

// using Poppins font in authentication page

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "500", "400"],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className={`flex ${poppins.className}`}>
        <aside className="w-1/2">
          <AuthMainPage />
        </aside>
        <main className="w-1/2">
          <Navbar />
          {children}
        </main>
      </div>
    </>
  );
}
