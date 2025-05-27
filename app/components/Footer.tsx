import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-herbarium-dark text-white px-4 md:px-8 xl:px-16" style={{ backgroundColor: '#87EEB1'}}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="w-10 h-10 bg-herbarium-green rounded-full flex items-center justify-center">
              <div className="w-7 h-7 bg-herbarium-dark rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-end">
            <Link href="#about" className="text-gray-300 hover:text-herbarium-green transition-colors">
              About
            </Link>
            <Link href="#features" className="text-gray-300 hover:text-herbarium-green transition-colors">
              Features
            </Link>
            <Link href="#ecosystem" className="text-gray-300 hover:text-herbarium-green transition-colors">
              Ecosystem
            </Link>
            <Link href="#community" className="text-gray-300 hover:text-herbarium-green transition-colors">
              Community
            </Link>
            <Link href="#terms" className="text-gray-300 hover:text-herbarium-green transition-colors">
              Terms
            </Link>
            <Link href="#privacy" className="text-gray-300 hover:text-herbarium-green transition-colors">
              Privacy
            </Link>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Herbarium Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;