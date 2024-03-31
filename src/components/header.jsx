"use client";

import React from "react"
import { Search } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center text-white bg-slate-900 rounded-lg p-2">
      <Search color={"#FFFF"} size={20} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent px-2 outline-none border-none w-full "
      />
    </div>
  );
}

export default Header;
