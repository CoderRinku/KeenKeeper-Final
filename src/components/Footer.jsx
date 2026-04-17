import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#214D38] text-white pt-16 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        
        <Image src="/assets/logo-xl.png" alt="KeenKeeper" width={220} height={50} className="mb-4" />
        
        <p className="text-gray-300 text-sm max-w-lg mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="text-sm font-semibold mb-4 text-gray-200">Social Links</p>
        
        {/* social icons from your assets */}
        <div className="flex gap-4 mb-16">
          <Link href="#">
            <Image src="/assets/instagram.png" alt="Instagram" width={35} height={35} />
          </Link>
          <Link href="#">
            <Image src="/assets/facebook.png" alt="Facebook" width={35} height={35} />
          </Link>
          <Link href="#">
            <Image src="/assets/twitter.png" alt="Twitter" width={35} height={35} />
          </Link>
        </div>

        {/* bottom text */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pt-6 border-t border-gray-600">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}