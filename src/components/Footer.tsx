import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Ministries', href: '/#ministries' },
    { name: 'Events', href: '/#events' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Give Online', href: '#' }
  ];

  const ministries = [
    { name: 'Youth Ministry', href: '/ministry/youth' },
    { name: 'Children\'s Ministry', href: '/ministry/childrens' },
    { name: 'Women\'s Ministry', href: '/ministry/womens' },
    { name: 'Worship Ministry', href: '/ministry/worship' },
    { name: 'Small Groups', href: '/ministry/small-groups' },
    { name: 'Community Outreach', href: '/ministry/outreach' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:info@lakeviewagc.net', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Church Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 sm:mb-6">
              <img 
                src="/AGCLOGO.png"
                alt="Lakeview AGC Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold">Lakeview AGC</span>
            </Link>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              A welcoming community where faith grows, families connect, and lives are transformed through God's love.
            </p>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Section 58, Nakuru, Facing Lake Nakuru</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">0797438190</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@lakeviewagc.net</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 lg:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 lg:mb-6">Ministries</h3>
            <ul className="space-y-2 sm:space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <Link 
                    to={ministry.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm lg:text-base"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 lg:mb-6">Service Times</h3>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div>
                <div className="text-blue-400 font-medium text-xs sm:text-sm lg:text-base">Sunday Services</div>
                <div className="text-purple-400 font-medium text-xs sm:text-sm lg:text-base">Sunday Services</div>
                <div className="text-gray-300 text-xs sm:text-sm">8:30 AM - First Service</div>
                <div className="text-gray-300 text-xs sm:text-sm">10:00 AM - Second Service</div>
                <div className="text-gray-300 text-xs sm:text-sm">9:30 AM - Youth & Sunday School</div>
              </div>
              <div>
                <div className="text-red-400 font-medium text-xs sm:text-sm lg:text-base">Weekly Events</div>
                <div className="text-gray-300 text-xs sm:text-sm">Mon-Sat: 5:30 PM - 6:30 PM</div>
              </div>
            </div>

            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-red-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Mobile Optimized */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left">
            © 2024 Lakeview Africa Gospel Church. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-3 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;