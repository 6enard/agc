import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Globe, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselImages = [
    {
      url: 'https://lakeviewagc.net/static/IMG-20231230-WA0003-dc2e7611634f3b2be3a3549e4f2fd69f.jpg',
      alt: 'Church congregation worship'
    },
    {
      url: 'https://lakeviewagc.net/static/IMG-20231230-WA0006-d350447fd3a9565252ea7b39c4adf3ea.jpg',
      alt: 'Church community gathering'
    },
    {
      url: 'https://lakeviewagc.net/static/IMG-20231230-WA0011-6b7dcd064adbf5a15aff332e9f507de0.jpg',
      alt: 'Church fellowship'
    },
    {
      url: 'https://lakeviewagc.net/static/IMG-20231230-WA0005-dd1eb169af90fd3eedacafd170742f7b.jpg',
      alt: 'Church ministry'
    },
    {
      url: 'https://lakeviewagc.net/static/IMG-20231230-WA0004-3457e491f2c67ca1eb26f03dcbb83707.jpg',
      alt: 'Church outreach'
    },
    {
      url: 'https://lakeviewagc.net/static/IMG-20220112-WA0004-280c4ea100c5acf58e3144c857632db3.jpg',
      alt: 'Church history'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover object-center bg-gray-900"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements - Hidden on mobile for cleaner look */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl hidden md:block"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl hidden md:block"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Welcome Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 border border-white/20">
          <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-pink-300" />
          <span className="text-xs sm:text-sm font-medium">Welcome to our family</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
          <span className="block mb-1">Welcome to</span>
          <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Lakeview Africa
          </span>
          <span className="block text-blue-200">Gospel Church</span>
        </h1>

        <div className="max-w-4xl mx-auto mb-4 sm:mb-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-blue-100 font-light leading-relaxed px-2">
            We are delighted to have you in our church; 
            <span className="block mt-1 text-white font-medium italic text-sm sm:text-base md:text-lg lg:text-xl">
              "a house of prayer for all people" - Isaiah 56:7
            </span>
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-2 sm:mb-3 px-2">
            We are bound by our vision of sharing the light of the gospel of the Lord Jesus in Nakuru and beyond.
          </p>
          
          <div className="flex items-center justify-center text-pink-300 text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6">
            <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            <span className="text-center">Celebrating and sharing the love of God</span>
          </div>
        </div>

        {/* Theme of the Year 2025 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 border border-white/20 shadow-2xl max-w-3xl mx-auto">
          <div className="text-center mb-3 sm:mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Theme of the Year - 2025
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-wide">
              GATHER GROW TRANSFORM
            </h2>
            <div className="bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20">
              <p className="text-blue-200 font-medium text-xs sm:text-sm md:text-base mb-1">Scripture of the Year - 2025</p>
              <p className="text-white font-bold text-sm sm:text-base md:text-lg">Acts 2:42-47</p>
            </div>
          </div>
        </div>

        {/* Service Times - Compact */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 border border-white/20 shadow-2xl max-w-3xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white flex items-center justify-center">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Sunday Service Times
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20 text-center">
              <div className="text-sm sm:text-base md:text-lg font-bold text-blue-300 mb-1">8:30 - 9:45 AM</div>
              <div className="text-xs sm:text-sm text-gray-200 font-medium">First Service</div>
            </div>
            <div className="bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20 text-center">
              <div className="text-sm sm:text-base md:text-lg font-bold text-purple-300 mb-1">10:00 - 11:30 AM</div>
              <div className="text-xs sm:text-sm text-gray-200 font-medium">Second Service</div>
            </div>
            <div className="bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20 text-center">
              <div className="text-sm sm:text-base md:text-lg font-bold text-pink-300 mb-1">9:30 - 11:30 AM</div>
              <div className="text-xs sm:text-sm text-gray-200 font-medium">Youth & Sunday School</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          <button className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <span className="flex items-center justify-center">
              Plan Your Visit
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button className="w-full border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:border-white/50">
            Watch Online
          </button>
        </div>

        {/* Carousel Control Info */}
        <div className="text-center mb-3 sm:mb-4">
          <p className="text-white/70 text-xs sm:text-sm">
            {currentSlide + 1} of {carouselImages.length} • {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors group hidden sm:block z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Discover More</span>
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;