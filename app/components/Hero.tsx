import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 xl:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-opacity-100" style={{ color: '#87EEB1' }}>
              Let The Soil Speak.<br />
              Soil First Farmers.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300" style={{ color: '#B7F3D7' }}>
              Integrated Agricultural Solution Provider leveraging IoT, blockchain, and AI technologies 
              to increase yields and value for crops through early pest detection and transparent food traceability.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#cta" className="bg-herbarium-green text-herbarium-dark font-medium px-6 py-3 hover:opacity-90 transition-opacity text-center border rounded-full" style={{ backgroundColor: '#87EEB1', color: '#000' }}>
                Join Waitlist
              </Link>
              {/* <Link href="https://www.canva.com/design/DAGnmtRkm4E/Tt9caosSsnU3tBp5BXZwIQ/edit" target='_blank' className="bg-transparent border text-white font-medium px-6 py-3 border rounded-full hover:bg-herbarium-green hover:text-herbarium-dark transition-colors text-center" style={{ color: '#B7F4D7', backgroundColor: '#000000', borderColor: '#87EEB1'}}>
                View Lightpaper
              </Link> */}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400/30 to-transparent border border-green-400/20 shadow-lg shadow-green-400/20 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tl from-green-400/20 to-transparent border border-green-400/30 flex items-center justify-center">
                  <div className="text-green-400 text-center">
                    <div className="text-4xl mb-2">🌱</div>
                    <div className="text-sm">3D Model Here</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;