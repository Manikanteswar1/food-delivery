const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-auto border-t-2 border-amber-500">
      <div className="container mx-auto px-4">
        <div className="border-t border-slate-700 pt-6">
          <div className="text-center">
            <p className="text-sm">
              This website is developed by{" "}
              <a 
                className="text-amber-400 hover:text-amber-300 underline hover:no-underline font-semibold transition-all duration-300" 
                href="https://github.com/Manikanteswar1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Manikanta
              </a>
            </p>
            <p className="text-xs text-slate-500 mt-2">
              © 2025 Food Delivery App. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;