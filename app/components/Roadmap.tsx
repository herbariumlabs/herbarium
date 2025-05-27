import React from 'react';
import { Leaf, Globe } from 'lucide-react';

type RoadmapItem = {
  quarter: string;
  items: string[];
  status: 'current' | 'upcoming' | 'future';
};

type RoadmapSectionProps = {
  title: string;
  roadmap: RoadmapItem[];
  icon: React.ElementType;
  isWeb3?: boolean;
};

const Roadmap = () => {
  const web2Roadmap: RoadmapItem[] = [
    { 
      quarter: 'Q2 2025', 
      items: [
        'Field research',
        'FPC partnerships',
        'Baseline studies',
        'Sensor prototypes and third party data integration'
      ],
      status: 'current'
    },
    { 
      quarter: 'Q3 2025', 
      items: [
        'Voice AI and interface development',
        'Model training',
        'Farm profile building',
        'Integrate with carbon/offset credit issuers'
      ],
      status: 'upcoming'
    },
    { 
      quarter: 'Q4 2025', 
      items: [
        'Platform MVP',
        'B2B partnerships',
        'Consumer interface'
      ],
      status: 'future'
    },
    { 
      quarter: 'Q1 2026', 
      items: [
        'Expand to more pests and crops'
      ],
      status: 'future'
    },
  ];

  const web3Roadmap: RoadmapItem[] = [
    { 
      quarter: 'Q2 2025', 
      items: [
        'Field research',
        'FPC partnerships',
        'Baseline studies',
        'Sensor prototypes and third party data integration',
        'Waitlisting'
      ],
      status: 'current'
    },
    { 
      quarter: 'Q3 2025', 
      items: [
        'Voice AI and interface development',
        'Model training',
        'Farm profile building',
        'Presales of Sensor kits',
        'Integrate with carbon/offset credit issuers'
      ],
      status: 'upcoming'
    },
    { 
      quarter: 'Q4 2025', 
      items: [
        'Platform MVP',
        'B2B partnerships',
        'Consumer interface',
        'TGE (Token Generation Event)'
      ],
      status: 'future'
    },
    { 
      quarter: 'Q1 2026', 
      items: [
        'Expand to more pests and crops',
        'Launch Herb.Predict - agri based, gamified prediction market using $HERB'
      ],
      status: 'future'
    },
  ];

  const RoadmapSection: React.FC<RoadmapSectionProps> = ({ title, roadmap, icon: Icon }) => (
    <div className="flex-1">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-black mr-3" />
          <h3 className="text-2xl md:text-3xl font-bold text-black">{title}</h3>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-black opacity-20"></div>
        
        {roadmap.map(({ quarter, items, status }) => (
          <div key={quarter} className="relative mb-8">
            <div className={`absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
              status === 'current' ? 'bg-black border-white shadow-lg' : 
              status === 'upcoming' ? 'bg-white border-black' : 
              'bg-gray-400 border-white'
            }`}></div>
            
            <div className="ml-12">
              <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-3">{quarter}</h4>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {items.join(', ')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="roadmap" className="py-16 md:py-20 px-4 md:px-8 xl:px-16" style={{ backgroundColor: '#87eeb1' }}>
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black">
            Roadmap
          </h2>
          <p className="text-lg md:text-xl text-black opacity-80 max-w-3xl mx-auto">
            Our dual-track approach towards revolutionizing agriculture through Web2 and Web3 innovation.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:flex space-x-8">
            <RoadmapSection 
              title="Web2 Roadmap" 
              roadmap={web2Roadmap} 
              icon={Globe}
            />
            <RoadmapSection 
              title="Web3 Roadmap" 
              roadmap={web3Roadmap} 
              icon={Leaf}
              isWeb3={true}
            />
          </div>
          
          <div className="lg:hidden space-y-12">
            <RoadmapSection 
              title="Web2 Roadmap" 
              roadmap={web2Roadmap} 
              icon={Globe}
            />
            <div className="border-t border-black opacity-20 mx-8"></div>
            <RoadmapSection 
              title="Web3 Roadmap" 
              roadmap={web3Roadmap} 
              icon={Leaf}
              isWeb3={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;