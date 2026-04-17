"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Stats() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const savedInteractions = JSON.parse(localStorage.getItem('keenkeeper_timeline')) || [];
    
    let callCount = 0;
    let textCount = 0;
    let videoCount = 0;

    savedInteractions.forEach(item => {
      if (item.type === "Call") callCount++;
      if (item.type === "Text") textCount++;
      if (item.type === "Video") videoCount++;
    });

    const data = [
      { name: "Text", value: textCount, color: "#8b5cf6" },
      { name: "Call", value: callCount, color: "#214D38" },
      { name: "Video", value: videoCount, color: "#22c55e" }
    ];

    setChartData(data.filter(item => item.value > 0));
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 min-h-[70vh]">
      <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8">Friendship Analytics</h1>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
        <h2 className="text-[#214D38] font-medium mb-8">By Interaction Type</h2>
        
        {chartData.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No interactions logged yet. Go interact with your friends to see stats!
          </div>
        ) : (
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={130}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => <span className="text-gray-500 text-sm ml-1">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </main>
  );
}