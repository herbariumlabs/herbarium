import React from 'react';

const HowItWorks = () => {
    const steps = [
      'Data Capture via satellites, drones, ground sensors & manual tests.',
      'AI Detection flags possible infestations.',
      'Voice & WhatsApp Alerts delivered in local languages.',
      'Farmer Confirmation through app or voice interface.',
      'Action Guidance with organic & conventional methods.',
      'Immutable Logging on blockchain.',
      'Rewards & Credits issuance & marketplace trading.',
    ];

    return (
      <section id="how-it-works" className="py-20 px-4 md:px-8 xl:px-16 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How It Works
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#87eeb1' }}>
              Our streamlined process from detection to reward, powered by cutting-edge technology.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start mb-8 group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#87eeb1' }}>
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-lg text-white group-hover:opacity-80 transition-opacity duration-300">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default HowItWorks;