/* components/Team.tsx */
import { Users } from 'lucide-react';
import React from 'react';

const Team = () => {
    const members = [
      { name: 'Alice Gupta', role: 'CEO & Co‑Founder', color: 'from-purple-400 to-pink-400' },
      { name: 'Ravi Singh', role: 'CTO & Co‑Founder', color: 'from-blue-400 to-cyan-400' },
      { name: 'Komal Bothra', role: 'Head of Product', color: 'from-green-400 to-emerald-400' },
      { name: 'Ganesh Kumar', role: 'Lead Blockchain Engineer', color: 'from-orange-400 to-red-400' },
      { name: 'Dr. Maya Patel', role: 'AI Advisor', color: 'from-indigo-400 to-purple-400' },
    ];

    return (
      <section id="team" className="py-20 bg-black text-white px-4 md:px-8 xl:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-400">
              Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experienced professionals passionate about transforming agriculture through technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map(({ name, role, color }) => (
              <div key={name} className="group cursor-pointer">
                <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-800 hover:border-emerald-500/50">
                  <div className={`h-40 bg-gradient-to-br ${color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 right-4">
                      <Users className="w-8 h-8 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                      {name}
                    </h3>
                    <p className="text-gray-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default Team;
