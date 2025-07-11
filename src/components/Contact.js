const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
            <p className="text-slate-600 text-lg">
              If you have any questions, feel free to reach out!
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                Name:
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                Email:
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                Message:
              </label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300 resize-vertical"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg border border-amber-500 hover:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;