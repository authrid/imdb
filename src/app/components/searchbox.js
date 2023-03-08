"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e){
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <div className="2xl:px-44">
        <form class="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div class="flex items-center border-b border-gray-500 py-2">
                <input value={search}
                onChange={(e)=>setSearch(e.target.value)}
                class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none flex-1" 
                type="text" 
                placeholder="Search keywords..." />
                <button type="submit"
                class="flex-shrink-0 border-transparent border-4  hover:text-amber-500 text-sm py-1 px-2 rounded disabled:text-gray-500 disabled:pointer-events-none"
                disable={!search}>
                Search
                </button>
            </div>
        </form>
    </div>
  )
}
