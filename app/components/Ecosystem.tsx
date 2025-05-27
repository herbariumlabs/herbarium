import React from 'react';

const Ecosystem: React.FC = () => (
  <section id="ecosystem" className="py-20 bg-black text-white px-4 md:px-8 xl:px-16 relative">
    <div className="container mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Our Solution Ecosystem
        </h2>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#87eeb1' }}>
          A comprehensive platform combining AI, blockchain, and IoT for intelligent agriculture.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Early Detection',
            copy: '4‑tier AI: satellites, drones, on‑ground sensors & farmer verification.',
          },
          {
            title: 'Transparent Provenance',
            copy: 'Immutable on‑chain farm profiles & batch QR codes for end‑to‑end trust.',
          },
          {
            title: 'Decentralized Marketplace',
            copy: 'Trade plant NFTs, earn $HERB and carbon credits in Herb.Predict.',
          },
        ].map(({ title, copy }) => (
          <div key={title} className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: '#87eeb1' }}>
              <div className="h-48 relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#87eeb1',
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 4px,
                  rgba(0,0,0,0.1) 2px,
                  rgba(0,0,0,0.1) 24px
                )`
              }}>
                {/* <div className="text-black" >
                  {icon}
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:opacity-80 transition-opacity">
                  {title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#000' }}>
                  {copy}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ecosystem;