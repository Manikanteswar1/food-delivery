import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 animate-pulse">
      <div className="container mx-auto px-4 max-w-6xl space-y-10">
        {/* Restaurant header shimmer */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-48 h-48 bg-slate-200 rounded-xl" />
            <div className="flex flex-col space-y-4">
              <div className="w-64 h-6 bg-slate-200 rounded-md" />
              <div className="w-40 h-5 bg-slate-200 rounded-md" />
              <div className="w-52 h-5 bg-slate-200 rounded-md" />
            </div>
          </div>
        </div>

        {/* Shimmer for multiple categories */}
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 space-y-6"
          >
            <div className="w-48 h-6 bg-slate-200 rounded-md mb-4" />
            {/* Menu item shimmer cards */}
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex justify-between items-start gap-6 p-6 border border-slate-200 bg-slate-50 rounded-lg shadow-sm"
              >
                <div className="flex flex-col flex-1 space-y-3">
                  <div className="w-40 h-5 bg-slate-200 rounded" />
                  <div className="w-3/4 h-4 bg-slate-200 rounded" />
                  <div className="w-24 h-5 bg-slate-200 rounded" />
                </div>
                <div className="flex flex-col items-center justify-between min-w-[140px]">
                  <div className="w-[120px] h-[120px] bg-slate-200 rounded-lg mb-4" />
                  <div className="w-20 h-8 bg-slate-300 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
