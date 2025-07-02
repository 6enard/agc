import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Ministries', href: isHomePage ? '#ministries' : '/#ministries' },
    { name: 'Events', href: isHomePage ? '#events' : '/#events' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#') && isHomePage) {
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50 relative">
            <img 
              src="/AGCLOGO.png"
              alt="Lakeview AGC Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
            />
            <span className={`text-lg sm:text-xl font-bold ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              Lakeview AGC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-blue-600 text-sm xl:text-base ${
                    isScrolled || !isHomePage ? 'text-gray-900' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#') && isHomePage) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className={`font-medium transition-colors hover:text-blue-600 text-sm xl:text-base ${
                    isScrolled || !isHomePage ? 'text-gray-900' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </a>
              )
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 xl:px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm xl:text-base shadow-lg">
              Give
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-md z-50 relative transition-colors ${
              isScrolled || !isHomePage || isMenuOpen ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 top-14 sm:top-16 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className={`relative bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
            <div className="h-screen overflow-y-auto">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-gray-900 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg text-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-900 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg text-lg transition-colors"
                      onClick={(e) => {
                        if (item.href.startsWith('#') && isHomePage) {
                          e.preventDefault();
                          handleNavClick(item.href);
                        } else {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Give
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;