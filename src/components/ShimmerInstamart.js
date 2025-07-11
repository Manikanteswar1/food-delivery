const ShimmerInstamart = () => {
  return (
    <div className="bg-white rounded-xl shadow-md animate-pulse p-6 m-52 border border-slate-200 ">
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 w-40 bg-slate-200 rounded"></div>
        <div className="h-8 w-20 bg-slate-300 rounded"></div>
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full bg-slate-200 rounded"></div>
        <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
        <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
        <div className="h-4 w-4/5 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
};

export default ShimmerInstamart;