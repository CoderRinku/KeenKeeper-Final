"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiClock } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold text-[#111827]">Keen</span>
          <span className="text-2xl font-bold text-[#244D3F]">Keeper</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              isActive("/")
                ? "bg-[#244D3F] text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FiHome className="text-lg" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            href="/timeline"
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              isActive("/timeline")
                ? "bg-[#244D3F] text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FiClock className="text-lg" />
            <span className="hidden sm:inline">Timeline</span>
          </Link>

          <Link
            href="/stats"
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              isActive("/stats")
                ? "bg-[#244D3F] text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            <span className="hidden sm:inline">Stats</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}