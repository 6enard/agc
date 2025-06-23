import React from 'react';
import { ChevronDown, Heart, Globe, Calendar, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay - Full image display */}
      <div className="absolute inset-0">
        <img 
          src="https://lakeviewagc.net/static/IMG-20231230-WA0003-dc2e7611634f3b2be3a3549e4f2fd69f.jpg"
          alt="Church background"
          className="w-full h-full object-contain object-center bg-gray-900"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Welcome Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
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

        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl mb-6 text-blue-100 font-light leading-relaxed">
            We are delighted to have you in our church; 
            <span className="block mt-2 text-white font-medium italic">
              "a house of prayer for all people" - Isaiah 56:7
            </span>
          </p>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-4">
            We are bound by our vision of sharing the light of the gospel of the Lord Jesus in Nakuru and beyond.
          </p>
          
          <div className="flex items-center justify-center text-pink-300 text-lg sm:text-xl font-medium mb-8">
            <Globe className="h-5 w-5 mr-2" />
            Celebrating and sharing the love of God
          </div>
        </div>

        {/* Theme of the Year 2025 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              Theme of the Year - 2025
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide">
              GATHER GROW TRANSFORM
            </h2>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
              <p className="text-blue-200 font-medium text-lg sm:text-xl mb-2">Scripture of the Year - 2025</p>
              <p className="text-white font-bold text-xl sm:text-2xl">Acts 2:42-47</p>
            </div>
          </div>
        </div>

        {/* Service Times */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center justify-center">
            <Clock className="h-6 w-6 mr-3" />
            Sunday Service Times
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20 text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-300 mb-2">8:30 - 9:45 AM</div>
              <div className="text-sm sm:text-base text-gray-200 font-medium">First Service</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20 text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-300 mb-2">10:00 - 11:30 AM</div>
              <div className="text-sm sm:text-base text-gray-200 font-medium">Second Service</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20 text-center">
              <div className="text-xl sm:text-2xl font-bold text-pink-300 mb-2">9:30 - 11:30 AM</div>
              <div className="text-sm sm:text-base text-gray-200 font-medium">Youth Service &</div>
              <div className="text-sm sm:text-base text-gray-200 font-medium">Sunday School</div>
            </div>
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