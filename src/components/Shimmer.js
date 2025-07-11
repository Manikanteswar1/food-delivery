const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="container mx-6 px-4">
        <div className="flex flex-wrap gap-6 justify-center m-4">
          {Array(20).fill("").map((e, index) => (
            <div 
              key={index} 
              className="w-80 bg-white rounded-xl shadow-lg border border-slate-200 p-6 animate-pulse mt-12"
            >
              {/* Image placeholder */}
              <div className="w-full h-36 bg-slate-300 rounded-lg mb-4"></div>
              
              {/* Title placeholder */}
              <div className="h-6 bg-slate-300 rounded mb-3"></div>
              
              {/* Description placeholder */}
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;