"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";


export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e: any) {
      e.preventDefault();
      if (!search) return;
      router.push(`/search/${search}`);
    }
  return (
    <form
    onSubmit={handleSubmit}
    className="flex max-w-6xl mx-auto justify-between items-center px-5"
  >
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Search keywords..."
      className="w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1"
    />
    <Button
      disabled={!search}
      type="submit"
      className="text-white-900 disabled:text-gray-400"
    >
      Search
    </Button>
  </form>
  )
}
