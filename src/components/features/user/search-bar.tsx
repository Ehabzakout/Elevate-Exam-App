"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

// Search bar component
export default function SearchBar({
  admin,
  children,
}: {
  admin?: boolean;
  children: React.ReactNode;
}) {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();

  // State
  const [searchValue, setSearchValue] = useState(""); // Should be pre-filled with the current search param value initially

  // Functions
  function handleSearchQuiz() {
    if (!searchValue && !pathname.includes("all-exams")) return;

    router.push(
      `${admin ? "/admin" : ""}/dashboard/all-exams?search-exam=${searchValue.toLocaleLowerCase()}`,
    );
  }

  return (
    <div className="flex items-center gap-6">
      {/* Search input */}
      <div className="relative flex h-16 flex-1">
        <IoSearchOutline className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1935CA]" />
        <input
          name="searchQuizInput"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Quiz"
          value={searchValue}
          className="size-full rounded-3xl pl-16 shadow-[0_15px_40px_0_#0000001A] outline-primary"
        />
      </div>

      {/* Submit search button */}
      <Button
        onClick={handleSearchQuiz}
        type="submit"
        className="h-16 w-48 rounded-3xl px-8 py-4 text-xl font-semibold leading-none"
      >
        Search Quiz
      </Button>

      {/* User info menu bar */}
      {children}
    </div>
  );
}
