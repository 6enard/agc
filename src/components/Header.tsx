import React, { useState, useEffect } from 'react';
import { Menu, X, Cross } from 'lucide-react';
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
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Cross className={`h-8 w-8 ${isScrolled || !isHomePage ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              Lakeview AGC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
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
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled || !isHomePage ? 'text-gray-900' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </a>
              )
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm lg:px-6">
              Give
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-gray-900 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-900 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md"
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
              <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Give
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;