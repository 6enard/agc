import React from 'react';
import { Cross, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
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
    { icon: Mail, href: 'mailto:info@lakeviewagc.org', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Church Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Cross className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-xl sm:text-2xl font-bold">Lakeview AGC</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              A welcoming community where faith grows, families connect, and lives are transformed through God's love.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Lakeview Drive, Anytown, ST 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@lakeviewagc.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-6">Ministries</h3>
            <ul className="space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <Link 
                    to={ministry.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-6">Service Times</h3>
            <div className="space-y-3 mb-6">
              <div>
                <div className="text-blue-400 font-medium text-sm sm:text-base">Sunday Services</div>
                <div className="text-gray-300 text-xs sm:text-sm">9:00 AM - Traditional</div>
                <div className="text-gray-300 text-xs sm:text-sm">11:00 AM - Contemporary</div>
              </div>
              <div>
                <div className="text-blue-400 font-medium text-sm sm:text-base">Wednesday</div>
                <div className="text-gray-300 text-xs sm:text-sm">7:00 PM - Bible Study</div>
              </div>
            </div>

            <h4 className="text-base sm:text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2024 Lakeview Assembly of God. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;