import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-herbarium-green text-herbarium-dark px-4 md:px-8 xl:px-16" style={{ backgroundColor: '#87EEB1'}}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#000'}}>
              Curious about the tech, the token, and the roadmap?
            </h2>
            <p className="text-lg">
              Get our lightpaper for a full breakdown of how Herbarium Labs is built, 
              where we're going, and how you can be part of it.
            </p>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm" style={{ outlineColor: '#888888'}}>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="jane@framer.com" 
                    className="w-full px-4 py-3 bg-white/30 border-0 rounded-md focus:ring-2 focus:ring-herbarium-dark focus:outline-none" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-md transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;