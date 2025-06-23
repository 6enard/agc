import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Welcome to
          <span className="block text-blue-400">Lakeview Assembly</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-4">
          A place where faith grows, community thrives, and lives are transformed through God's love.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-colors shadow-lg">
            Plan Your Visit
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-colors">
            Watch Online
          </button>
        </div>

        {/* Service Times */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 inline-block mx-4 max-w-sm sm:max-w-none">
          <h3 className="text-base sm:text-lg font-semibold mb-3">Sunday Services</h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-center">
            <div className="flex-1">
              <div className="text-xl sm:text-2xl font-bold">9:00 AM</div>
              <div className="text-xs sm:text-sm text-gray-300">Traditional Service</div>
            </div>
            <div className="hidden sm:block w-px bg-white/30"></div>
            <div className="flex-1">
              <div className="text-xl sm:text-2xl font-bold">11:00 AM</div>
              <div className="text-xs sm:text-sm text-gray-300">Contemporary Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-400 transition-colors"
      >
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>
    </section>
  );
};

export default Hero;