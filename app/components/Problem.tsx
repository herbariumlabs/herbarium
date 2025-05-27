import React from 'react';
import { Target, Shield } from 'lucide-react'

const Problem = () => (
  <section id="problem" className="py-20 px-4 md:px-8 xl:px-16 relative" style={{ backgroundColor: '#87EEB1' }}>
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">The Challenge We Face</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Modern agriculture faces critical challenges that threaten food security and environmental sustainability.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-xl" style={{ backgroundColor: '#000' }}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#87EEB1' }}>
              <Target className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white">The Pest Crisis</h3>
          </div>
          <div className="space-y-3">
            <p className="text-gray-300">10–40% annual crop loss due to undetected infestations</p>
            <p className="text-gray-300">Indiscriminate pesticide use harms environment & health</p>
            <p className="text-gray-300">Rising costs for farmers and degraded soil quality</p>
          </div>
        </div>
        
        <div className="p-8 rounded-xl" style={{ backgroundColor: '#000' }}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#87EEB1' }}>
              <Shield className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white">Trust & Transparency</h3>
          </div>
          <div className="space-y-3">
            <p className="text-gray-300">Lack of transparent origin data leads to unfair pricing</p>
            <p className="text-gray-300">Unverifiable &quot;organic&quot; claims undermine trust</p>
            <p className="text-gray-300">Farmers miss out on premium due to poor brand identity</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Problem;