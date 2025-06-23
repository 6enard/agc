import React from 'react';
import { ChevronDown, Heart, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://lakeviewagc.net/static/theme-343febd46ce711e65729ad21a3e85cc0.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-blue-800/70"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Welcome Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
          <Heart className="h-4 w-4 mr-2 text-pink-300" />
          <span className="text-sm font-medium">Welcome to our family</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block mb-2">Welcome to</span>
          <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Lakeview Africa
          </span>
          <span className="block text-blue-200">Gospel Church</span>
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl mb-6 text-blue-100 font-light leading-relaxed">
            We are delighted to have you in our church; 
            <span className="block mt-2 text-white font-medium italic">
              "a house of prayer for all people" - Isaiah 56:7
            </span>
          </p>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-4">
            We are bound by our vision of sharing the light of the gospel of the Lord Jesus in Nakuru and beyond.
          </p>
          
          <div className="flex items-center justify-center text-pink-300 text-lg sm:text-xl font-medium">
            <Globe className="h-5 w-5 mr-2" />
            Celebrating and sharing the love of God
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4">
          <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <span className="flex items-center justify-center">
              Plan Your Visit
              <ChevronDown className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:border-white/50">
            Watch Online
          </button>
        </div>

        {/* Service Times Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 inline-block mx-4 max-w-md sm:max-w-2xl border border-white/20 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Sunday Services</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-center">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300 mb-1">9:00 AM</div>
              <div className="text-sm sm:text-base text-gray-200">Traditional Service</div>
              <div className="text-xs text-gray-300 mt-1">English & Swahili</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-purple-300 mb-1">11:00 AM</div>
              <div className="text-sm sm:text-base text-gray-200">Contemporary Service</div>
              <div className="text-xs text-gray-300 mt-1">Modern Worship</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-300">
              Wednesday Bible Study • 7:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors group"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Discover More</span>
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8" />
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;