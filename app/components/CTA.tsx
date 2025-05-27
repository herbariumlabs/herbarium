'use client'
import React, { useState } from 'react';
import { CheckCircle, Mail, Loader2 } from 'lucide-react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate email
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email.trim())) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setEmail('');
    setError('');
  };

  return (
    <section 
      id="cta" 
      className="py-16 px-4 md:px-8 xl:px-16 bg-herbarium-green text-herbarium-dark" 
      style={{ backgroundColor: '#87EEB1', border: '1px solid #000' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Ready to join the green revolution?
          </h2>
          <p className="text-lg mb-6 text-black/80">
            Join our waitlist for an exciting future of agricultural innovation.
          </p>
        </div>
        
        <div className="md:w-2/5">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 bg-white/30 border-2 rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-colors ${
                    error ? 'border-red-500' : 'border-transparent'
                  }`}
                  disabled={isLoading}
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/50" />
              </div>
              
              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-black text-white font-medium rounded-md hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>
          ) : (
            <div className="bg-white/20 rounded-2xl p-8 text-center backdrop-blur-sm border border-white/30">
              <div className="mb-4">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">
                  Welcome to the revolution! 🌱
                </h3>
                <p className="text-black/80 text-lg mb-4">
                  You're now on our waitlist. We'll keep you updated on our journey to transform agriculture.
                </p>
                <div className="bg-white/30 rounded-lg p-4 mb-6">
                  <p className="text-sm text-black/70">
                    <strong>What's next?</strong> You'll receive updates about our progress, early access opportunities, and exclusive insights into sustainable farming technology.
                  </p>
                </div>
              </div>
              
              <button
                onClick={resetForm}
                className="text-black/70 hover:text-black text-sm underline transition-colors"
              >
                Add another email?
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;