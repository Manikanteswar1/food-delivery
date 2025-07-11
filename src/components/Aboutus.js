const Aboutus = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container">
        <div className="bg-slate-300 rounded-xl shadow-md p-8 border border-slate-200">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">About Us</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              This project is part of my React learning journey, showcasing modern web development skills and best practices.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-800 text-center mb-6">My Portfolio Website</h2>

            {/* Portfolio Frame */}
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="bg-slate-700 rounded-t-xl p-2 flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="bg-slate-600 text-slate-200 text-xs px-3 py-0.5 rounded-md">
                    manikanteswar1.github.io/Portfolio
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-md border border-slate-600">
                <iframe
                  src="https://manikanteswar1.github.io/Portfolio/"
                  title="Mani's Portfolio"
                  width="100%"
                  height="600"
                  className="w-full"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center bg-slate-200 p-6 rounded-xl border border-slate-200">
            <p className="text-slate-700 text-base font-medium mb-4">
              Built with passion for learning React and modern web development.
            </p>
            <div className="flex justify-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                React.js
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Tailwind CSS
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Modern Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
