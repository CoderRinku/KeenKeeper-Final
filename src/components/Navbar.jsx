"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiHome, FiClock, FiPieChart } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        
        {/* logo */}
        <Link href="/">
          <Image src="/assets/logo.png" alt="KeenKeeper" width={150} height={40} />
        </Link>

        {/* right side links */}
        <div className="flex gap-4 md:gap-6 items-center text-sm md:text-base">
          <Link
            href="/"
            className={pathname === "/" ? "flex items-center gap-2 bg-[#214D38] text-white px-4 py-2 rounded-md font-medium" : "flex items-center gap-2 text-gray-600 hover:text-[#214D38] font-medium"}
          >
            <FiHome /> Home
          </Link>
          
          <Link
            href="/timeline"
            className={pathname === "/timeline" ? "flex items-center gap-2 bg-[#214D38] text-white px-4 py-2 rounded-md font-medium" : "flex items-center gap-2 text-gray-600 hover:text-[#214D38] font-medium"}
          >
            <FiClock /> Timeline
          </Link>
          
          <Link
            href="/stats"
            className={pathname === "/stats" ? "flex items-center gap-2 bg-[#214D38] text-white px-4 py-2 rounded-md font-medium" : "flex items-center gap-2 text-gray-600 hover:text-[#214D38] font-medium"}
          >
            <FiPieChart /> Stats
          </Link>
        </div>

      </div>
    </nav>
  );
}