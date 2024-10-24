import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Banner Section */}
      <div className="bg-blue-100 text-blue-700 p-4 rounded-md flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Welcome to Product Hunt! 👋</h2>
          <p className="text-sm">The place to launch and discover new tech products. <a href="#" className="text-blue-500 underline">Take a tour.</a></p>
        </div>
        <button className="text-gray-600 font-bold text-lg">×</button>
      </div>

      {/* Top Products Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Top Products Launching Today</h2>
        <hr className="mt-2" />

        {/* Products List */}
        <div className="mt-4 space-y-6">
          {/* Product Item */}
          <div className="flex items-center justify-between">
            <div className="flex items-start space-x-3">
              <img src="https://ph-files.imgix.net/d637a716-2ca1-4771-83b0-06a064f28b06.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1" alt="Product Logo" className="w-10 h-10 rounded-md" />
              <div>
                <h3 className="font-semibold">My Good Week — Track goals and habits automatically with Google Calendar</h3>
                <div className="text-sm text-gray-500 space-x-2">
                  <span>31</span>
                  <span className="text-gray-400">•</span>
                  <span>Productivity</span>
                  <span className="text-gray-400">•</span>
                  <span>Time Tracking</span>
                  <span className="text-gray-400">•</span>
                  <span>Calendar</span>
                </div>
              </div>
            </div>
            <button className="bg-gray-200 p-2 rounded-md text-gray-700">
              <span>361</span> ▲
            </button>
          </div>

          {/* Repeat Product Items in similar structure */}
          {/* Add as many product items as needed */}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Product Landscapes</h3>
        <div className="space-y-4 mt-4">
          {/* Sidebar Item */}
          <div>
            <h4 className="text-sm font-semibold">Security & compliance tools ›</h4>
            <p className="text-xs text-gray-500">Before I founded Vanta in 2018, very few startups had a SOC 2, the most commonly accepted standard for demonstrating...</p>
            <p className="text-xs text-gray-700 mt-2">Christina Cacioppo CEO & Co-founder, Vanta</p>
          </div>

          {/* Repeat Sidebar Items in similar structure */}
          {/* Add more sidebar items as needed */}
        </div>

        <button className="mt-4 text-blue-500 underline">View more articles</button>
      </div>
    </div>

  );
}
