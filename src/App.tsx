import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">V</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">VERITY</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setActiveSection('home')} className="hover:text-cyan-400 transition">Home</button>
              <button onClick={() => setActiveSection('features')} className="hover:text-cyan-400 transition">Features</button>
              <button onClick={() => setActiveSection('about')} className="hover:text-cyan-400 transition">About</button>
              <button onClick={() => setActiveSection('contact')} className="hover:text-cyan-400 transition">Contact</button>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">Powered by AI • Built for GCC</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">The AI Brain Connecting</span>
            <br />
            <span className="text-white">GCC Real Estate</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Revolutionizing how buyers, brokers, banks, and developers connect in the $252B GCC property market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition transform hover:scale-105">Get Early Access</button>
            <button className="border-2 border-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400/10 transition">See How It Works</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">$252B</div>
              <div className="text-slate-400">GCC Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">7.1%</div>
              <div className="text-slate-400">Annual Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">180K+</div>
              <div className="text-slate-400">HNWIs Relocating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">6</div>
              <div className="text-slate-400">GCC Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Intelligent Features</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Four AI-powered engines working together to revolutionize your real estate journey</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition transform hover:scale-105">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">AI Valuation Engine</h3>
              <p className="text-slate-300 text-lg mb-6">Instant, accurate property valuations using ML models trained on 500K+ GCC transactions</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span className="text-slate-300">Real-time market comparables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span className="text-slate-300">Predictive ROI forecasting</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Smart Bank Matching</h3>
              <p className="text-slate-300 text-lg mb-6">Connect with 40+ GCC banks to find optimal mortgage rates instantly</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span className="text-slate-300">60-second pre-qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span className="text-slate-300">Islamic & conventional financing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Join the Revolution</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">Be among the first 1,000 users to experience VERITY</p>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none" />
            <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none" />
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition">Secure My Spot</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">VERITY</span>
          </div>
          <p className="text-slate-400 mb-4">The AI Brain Connecting GCC Real Estate</p>
          <p className="text-slate-500 text-sm">© 2025 VERITY AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;