'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleLogoClick = () => {
    // Scroll to top or navigate to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <div className="flex justify-center w-full py-4 sm:py-6 px-4">
        <header className="bg-black rounded-full py-3 px-4 sm:py-4 sm:px-6 lg:px-10 w-full max-w-7xl relative">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center min-w-0 relative z-10">
              <div 
                className="relative flex items-center cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleLogoClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleLogoClick();
                  }
                }}
              >
                <div 
                  className={`transition-transform duration-500 ease-in-out flex-shrink-0 ${isHovered ? 'transform -rotate-90 scale-130' : ''}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32"
                    className="sm:w-18 sm:h-18"
                    fill="none"
                    viewBox="0 0 78 78"
                  >
                    <path 
                      d="M 63.97 55.143 C 57.05 60.104 49.619 61.814 43.91 62.328 C 46.348 62.443 48.854 62.953 49.553 64.525 C 50.926 67.621 45.182 74.564 38.923 75.276 C 31.407 76.126 25.395 67.739 22.664 63.925 C 17.714 57.014 16.004 49.603 15.494 43.901 C 15.378 46.326 14.861 48.819 13.293 49.514 C 10.197 50.891 3.25 45.15 2.535 38.895 C 1.676 31.381 10.065 25.37 13.88 22.636 C 20.813 17.665 28.254 15.962 33.969 15.452 C 31.522 15.34 28.999 14.826 28.297 13.245 C 26.924 10.149 32.671 3.208 38.93 2.497 C 46.45 1.644 52.461 10.037 55.195 13.844 C 60.149 20.758 61.859 28.179 62.373 33.885 C 62.488 31.457 63.002 28.963 64.57 28.265 C 67.666 26.888 74.603 32.626 75.318 38.878 C 76.181 46.395 67.785 52.413 63.97 55.143 Z M 62.926 52.746 C 64.843 48.345 62.455 41.912 59.889 41.638 C 58.585 41.503 57.29 42.959 56.289 44.524 C 58.124 40.561 59.826 35.011 59.187 28.555 C 58.838 24.998 58.068 17.171 52.781 14.875 C 48.387 12.968 41.957 15.36 41.69 17.926 C 41.549 19.227 42.998 20.518 44.556 21.516 C 40.6 19.681 35.053 17.982 28.607 18.621 C 25.053 18.97 17.226 19.74 14.927 25.024 C 13.013 29.421 15.401 35.858 17.967 36.131 C 19.275 36.269 20.576 34.8 21.581 33.236 C 19.746 37.195 18.037 42.755 18.672 49.218 C 19.025 52.778 19.795 60.602 25.076 62.897 C 29.476 64.808 35.909 62.413 36.179 59.844 C 36.314 58.543 34.868 57.258 33.310 56.254 C 37.266 58.085 42.807 59.781 49.25 59.149 C 52.804 58.796 60.624 58.029 62.923 52.746 Z M 56.215 39.793 C 54.179 44.286 50.951 47.293 48.237 49.204 C 49.492 48.562 50.892 48.097 51.699 48.683 C 53.286 49.84 52.42 54.998 49.482 57.169 C 45.957 59.777 40.506 57.307 38.026 56.184 C 33.52 54.141 30.506 50.897 28.592 48.176 C 29.244 49.434 29.718 50.851 29.129 51.661 C 27.973 53.249 22.818 52.376 20.647 49.438 C 18.035 45.907 20.509 40.455 21.629 37.975 C 23.667 33.482 26.899 30.471 29.613 28.561 C 28.358 29.203 26.958 29.668 26.151 29.081 C 24.567 27.928 25.433 22.777 28.368 20.606 C 31.889 17.994 37.347 20.464 39.827 21.588 C 44.33 23.623 47.344 26.861 49.255 29.579 C 48.609 28.324 48.141 26.914 48.728 26.107 C 49.884 24.519 55.035 25.395 57.209 28.30 C 59.818 31.861 57.344 37.31 56.221 39.79 Z M 41.115 49.234 C 43.642 49.01 46.926 48.252 49.989 46.058 C 51.679 44.853 55.381 42.194 55.003 38.877 C 54.686 36.111 51.616 33.574 50.249 34.184 C 49.554 34.487 49.327 35.59 49.278 36.661 C 49.054 34.144 48.296 30.867 46.109 27.813 C 44.9 26.13 42.248 22.424 38.925 22.803 C 36.161 23.116 33.625 26.186 34.231 27.553 C 34.537 28.248 35.647 28.475 36.721 28.525 C 34.201 28.749 30.917 29.506 27.861 31.7 C 26.181 32.902 22.468 35.564 22.851 38.884 C 23.167 41.644 26.233 44.181 27.6 43.571 C 28.292 43.268 28.523 42.162 28.572 41.091 C 28.799 43.611 29.554 46.888 31.744 49.945 C 32.946 51.628 35.605 55.337 38.928 54.958 C 41.692 54.645 44.231 51.579 43.625 50.209 C 43.312 49.514 42.199 49.286 41.119 49.237 Z M 49.531 45.009 C 48.51 47.345 45.055 47.684 43.483 47.839 C 40.637 48.119 38.187 47.368 36.438 46.558 C 37.129 47.002 37.768 47.572 37.709 48.145 C 37.587 49.282 34.748 50.336 32.808 49.492 C 30.472 48.478 30.133 45.023 29.978 43.451 C 29.695 40.599 30.449 38.145 31.256 36.396 C 30.815 37.088 30.242 37.73 29.669 37.671 C 28.532 37.549 27.478 34.709 28.325 32.763 C 29.343 30.431 32.795 30.091 34.366 29.936 C 37.215 29.653 39.662 30.404 41.408 31.214 C 40.723 30.773 40.081 30.203 40.143 29.630 C 40.265 28.494 43.108 27.436 45.051 28.28 C 47.383 29.297 47.723 32.753 47.877 34.324 C 48.157 37.176 47.4 39.634 46.59 41.383 C 47.034 40.691 47.611 40.042 48.187 40.105 C 49.32 40.223 50.374 43.066 49.531 45.009 Z" 
                      fill={isHovered ? "#87eeb1" : "#e6fafc"}
                    />
                  </svg>
                </div>
                <div 
                  className={`ml-2 sm:ml-4 text-base sm:text-lg lg:text-xl font-medium text-white whitespace-nowrap transition-all duration-500 ease-in-out absolute left-full ${
                    isHovered ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-4'
                  }`}
                  style={{ color: '#87eeb1' }}
                >
                  Herbarium Labs
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation - Only visible on large screens */}
            <nav className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-12 absolute left-1/2 transform -translate-x-1/2">
              <Link 
                href="#problem" 
                className="text-white hover:text-gray-300 transition-colors text-base xl:text-xl font-medium hover:scale-105 transform transition-transform duration-200"
              >
                About
              </Link>
              <Link 
                href="#features" 
                className="text-white hover:text-gray-300 transition-colors text-base xl:text-lg font-medium hover:scale-105 transform transition-transform duration-200"
              >
                Features
              </Link>
              <Link 
                href="#ecosystem" 
                className="text-white hover:text-gray-300 transition-colors text-base xl:text-lg font-medium hover:scale-105 transform transition-transform duration-200"
              >
                Ecosystem
              </Link>
              <Link 
                href="#roadmap" 
                className="text-white hover:text-gray-300 transition-colors text-base xl:text-lg font-medium hover:scale-105 transform transition-transform duration-200"
              >
                Roadmap
              </Link>
            </nav>
            
            {/* Right side button - Only visible on large screens */}
            {/* <div className="hidden lg:flex items-center">
              <Link 
                href="#waitlist" 
                className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm xl:text-base hover:scale-105 transform transition-transform duration-200"
              >
                Join waitlist
              </Link>
            </div> */}
            
            {/* Mobile menu button - Only visible on smaller screens */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu - Only visible when opened on smaller screens */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="#about" 
                  className="text-white hover:text-gray-300 transition-colors text-base font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#features" 
                  className="text-white hover:text-gray-300 transition-colors text-base font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="#ecosystem" 
                  className="text-white hover:text-gray-300 transition-colors text-base font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ecosystem
                </Link>
                <Link 
                  href="#community" 
                  className="text-white hover:text-gray-300 transition-colors text-base font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </Link>
                {/* <Link 
                  href="#waitlist" 
                  className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors text-base mt-2 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join waitlist
                </Link> */}
              </nav>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;