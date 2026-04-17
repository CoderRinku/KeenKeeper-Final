"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FiBell, FiArchive, FiTrash2, FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";
import friendsData from "../../../data/friends.json";

export default function FriendDetails() {
  const params = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (params?.id) {
      const foundFriend = friendsData?.find((f) => f.id?.toString() === params.id.toString());
      setFriend(foundFriend);
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return <div className="text-center py-20 text-xl font-bold mt-20">Loading friend details...</div>;
  }

  if (!friend) {
    return (
      <div className="text-center py-20 mt-20">
        <h1 className="text-3xl font-bold text-red-500">Friend not found!</h1>
        <Link href="/" className="text-blue-500 mt-4 inline-block underline">Go Back Home</Link>
      </div>
    );
  }

  
  const handleInteract = (type) => {
    const newInteraction = {
      id: Date.now(),
      type: type,
      name: friend.name,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      icon: type === 'Call' ? '📞' : type === 'Text' ? '💬' : '📹'
    };

    
    const existing = JSON.parse(localStorage.getItem('keenkeeper_timeline')) || [];
    localStorage.setItem('keenkeeper_timeline', JSON.stringify([newInteraction, ...existing]));

    
    toast.success(`${type} interaction logged with ${friend.name}!`);
  };

  const statusColor = friend.status === "Overdue" ? "bg-red-500" : 
                      friend.status === "Almost Due" ? "bg-yellow-500" : "bg-[#214D38]";

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 bg-white min-h-screen">
      <Toaster position="top-center" />
      
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Column */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center mb-4 border border-gray-100">
            <div className="w-24 h-24 relative mb-4">
              <Image src={friend.picture} alt={friend.name} fill className="rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{friend.name}</h2>
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className={`text-[10px] px-3 py-1 rounded-full font-bold tracking-wide text-white ${statusColor}`}>
                {friend.status}
              </span>
              <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                {friend.tags?.map((tag, index) => (
                  <span key={index} className="bg-[#bbf7d0] text-green-800 text-[9px] px-2.5 py-1 rounded-full font-bold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-sm italic mb-2">"{friend.bio || "Former colleague, great mentor"}"</p>
            <p className="text-gray-400 text-xs">Preferred: {friend.email || "email"}</p>
          </div>

          <button className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center gap-2 text-gray-700 font-medium hover:bg-gray-50 transition mb-3">
            <FiBell className="text-lg" /> Snooze 2 Weeks
          </button>
          <button className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center gap-2 text-gray-700 font-medium hover:bg-gray-50 transition mb-3">
            <FiArchive className="text-lg" /> Archive
          </button>
          <button className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center gap-2 text-red-500 font-medium hover:bg-red-50 transition">
            <FiTrash2 className="text-lg" /> Delete
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-[#214D38] mb-2">{friend.days_since_contact}</h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-[#214D38] mb-2">{friend.goal || 30}</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-[#214D38] mb-2">{friend.next_due_date || "Feb 27, 2026"}</h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6 flex justify-between items-center">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Relationship Goal</h4>
              <p className="text-gray-600">Connect every <span className="font-bold">{friend.goal || 30} days</span></p>
            </div>
            <button className="border border-gray-200 px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h4 className="text-lg font-medium text-gray-800 mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={() => handleInteract('Call')} className="border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-md hover:border-[#214D38] transition text-gray-700">
                <FiPhone className="text-2xl" />
                <span className="font-medium">Call</span>
              </button>
              <button onClick={() => handleInteract('Text')} className="border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-md hover:border-[#214D38] transition text-gray-700">
                <FiMessageSquare className="text-2xl" />
                <span className="font-medium">Text</span>
              </button>
              <button onClick={() => handleInteract('Video')} className="border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-md hover:border-[#214D38] transition text-gray-700">
                <FiVideo className="text-2xl" />
                <span className="font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}