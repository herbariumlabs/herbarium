/* components/Metrics.tsx */
import React from 'react';

const Metrics = () => {
    const metrics = [
      { label: 'Pilot Farms', value: '5', suffix: '' },
      { label: 'Sensor Nodes', value: '120', suffix: '' },
      { label: 'CO₂e Sequestered', value: '8.4', suffix: ' t' },
      { label: 'Active Users', value: '350', suffix: '+' },
    ];

    return (
      <section id="metrics" className="py-20 bg-gradient-to-r from-emerald-400 to-green-500 text-black px-4 md:px-8 xl:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Metrics
          </h2>
          <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto">
            Real impact, measurable results. See how we&apos;re transforming agriculture today.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map(({ label, value, suffix }) => (
              <div key={label} className="group">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <p className="text-4xl md:text-5xl font-bold mb-2 text-black group-hover:text-black/80 transition-colors">
                    {value}{suffix}
                  </p>
                  <p className="text-lg text-black/80 font-medium">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default Metrics;