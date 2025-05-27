import React from 'react';

const Features = () => (
  <section id="features" className="py-20 px-4 md:px-8 xl:px-16" style={{ backgroundColor: '#87eeb1' }}>
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Core Features
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Cutting-edge technology stack designed for modern agricultural challenges.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: 'Proprietary AI/ML', 
            desc: 'Detect pests before outbreak with 95% accuracy.',
            icon: '🤖'
          },
          { 
            title: 'Voice-first UI', 
            desc: 'Voice alerts & guidance in regional languages.',
            icon: '🎤'
          },
          { 
            title: 'Carbon Credits', 
            desc: 'Earn & trade on-chain carbon tokens.',
            icon: '🌱'
          },
          { 
            title: 'DePIN Oracles', 
            desc: 'Sensor-emitted data fuel $HERB token rewards.',
            icon: '📡'
          },
          { 
            title: 'Prediction Market', 
            desc: 'Play & earn in Herb.Predict — learn as you earn.',
            icon: '🎯'
          },
          { 
            title: 'Community Rewards', 
            desc: 'Stake tokens for governance & revenue share.',
            icon: '💎'
          },
        ].map(({ title, desc, icon }) => (
          <div key={title} className="group cursor-pointer">
            <div className="bg-black rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="h-40 bg-gray-800 relative overflow-hidden flex items-center justify-center" style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 4px,
                  rgba(0,0,0,0.3) 2px,
                  rgba(0,0,0,0.3) 24px
                )`
              }}>
                {/* <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div> */}
              </div>
              <div className="p-6 bg-black">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:opacity-80 transition-opacity">
                  {title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;