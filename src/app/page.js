import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      
      {/* 1. Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-[#214D38] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#163828] transition">
          + Add a Friend
        </button>
      </div>

    </main>
  );
}