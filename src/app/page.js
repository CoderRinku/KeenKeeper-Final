import Link from "next/link";
import Image from "next/image";
import friendsData from "../data/friends.json";

export default function Home() {
  
  const totalFriends = friendsData.length;
  const onTrackCount = friendsData.filter(f => f.status === "On Track").length;
  const needAttentionCount = friendsData.filter(f => f.status !== "On Track").length;

 
  const getStatusColor = (status) => {
    if (status === "Overdue") return "bg-red-500 text-white";
    if (status === "Almost Due") return "bg-yellow-500 text-white";
    return "bg-[#214D38] text-white"; // On Track
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      
      {/*  Hero Section */}
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

      {/* Summary Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
        <div className="bg-white rounded-lg py-8 px-4 w-[140px] md:w-[220px] text-center shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl md:text-4xl font-bold text-[#214D38] mb-2">{totalFriends}</h2>
          <p className="text-gray-500 text-xs md:text-sm">Total Friends</p>
        </div>
        
        <div className="bg-white rounded-lg py-8 px-4 w-[140px] md:w-[220px] text-center shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl md:text-4xl font-bold text-[#214D38] mb-2">{onTrackCount}</h2>
          <p className="text-gray-500 text-xs md:text-sm">On Track</p>
        </div>
        
        <div className="bg-white rounded-lg py-8 px-4 w-[140px] md:w-[220px] text-center shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl md:text-4xl font-bold text-[#214D38] mb-2">{needAttentionCount}</h2>
          <p className="text-gray-500 text-xs md:text-sm">Need Attention</p>
        </div>
        
        <div className="bg-white rounded-lg py-8 px-4 w-[140px] md:w-[220px] text-center shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl md:text-4xl font-bold text-[#214D38] mb-2">12</h2>
          <p className="text-gray-500 text-xs md:text-sm">Interactions This Month</p>
        </div>
      </div>

      {/*Friends List Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Your Friends</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <Link href={`/friend/${friend.id}`} key={friend.id}>
              {/* REMOVED 'border' class here for cleaner look */}
              <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition cursor-pointer h-full">
                
                {/* Profile Picture */}
                <div className="w-20 h-20 relative mb-4">
                  <Image 
                    src={friend.picture} 
                    alt={friend.name} 
                    fill
                    // REMOVED 'border' from image too
                    className="rounded-full object-cover"
                  />
                </div>
                
                {/* Name and Days */}
                <h4 className="font-bold text-gray-900 text-lg">{friend.name}</h4>
                <p className="text-gray-400 text-[11px] mt-1 mb-4 italic">{friend.days_since_contact}d ago</p>
                
               
                <div className="flex flex-wrap justify-center gap-1.5 mb-5 mt-auto">
                  {friend.tags.map((tag, index) => (
                    <span key={index} className="bg-[#bbf7d0] text-green-800 text-[9px] px-2.5 py-1 rounded-full font-bold tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Status Badge */}
                <span className={`text-[10px] px-3 py-1.5 rounded-full font-bold tracking-wide w-full max-w-[120px] ${getStatusColor(friend.status)}`}>
                  {friend.status}
                </span>
                
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}