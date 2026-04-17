"use client";

import React, { useState, useEffect } from "react";

export default function Timeline() {
  const [timelineData, setTimelineData] = useState([]);
  const [filter, setFilter] = useState("All");


  useEffect(() => {
    const savedInteractions = JSON.parse(localStorage.getItem('keenkeeper_timeline')) || [];
    setTimelineData(savedInteractions);
  }, []);

  // Challenge C2: Timeline Filter
  const filteredData = filter === "All" 
    ? timelineData 
    : timelineData.filter(item => item.type === filter);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 min-h-[70vh]">
      <h1 className="text-4xl font-bold text-[#111827] mb-6">Timeline</h1>

      <div className="mb-8">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-200 rounded-md px-4 py-2.5 text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-[#214D38] w-48 text-sm cursor-pointer shadow-sm"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        {filteredData.length === 0 ? (
          <div className="text-center py-10 bg-white border border-gray-100 rounded-lg">
            <p className="text-gray-500">No interactions yet. Go to a friend's profile to log Call/Text/Video!</p>
          </div>
        ) : (
          filteredData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-100 rounded-lg p-5 flex items-center gap-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-2xl w-8 flex justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-[#111827] text-lg">
                  <span className="font-bold">{item.type}</span> <span className="text-gray-500 font-normal">with {item.name}</span>
                </p>
                <p className="text-sm text-gray-400 mt-0.5">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}