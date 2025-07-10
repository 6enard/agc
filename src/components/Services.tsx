import React from 'react';
import { Clock, Music, Baby, Coffee } from 'lucide-react';

const Services = () => {
  const services = [
    {
      time: '8:30 - 9:45 AM',
      title: 'First Service',
      description: 'Join us for our first service with inspiring worship, biblical teaching, and fellowship.',
      features: ['Live Worship', 'Biblical Teaching', 'All Ages Welcome']
    },
    {
      time: '10:00 - 11:30 AM',
      title: 'Second Service',
      description: 'Our second service offers the same inspiring worship and teaching in a welcoming environment.',
      features: ['Live Worship', 'Biblical Teaching', 'Family Friendly']
    }
  ];

  const features = [
    {
      icon: Music,
      title: 'Live Worship',
      description: 'Experience powerful worship with our talented music ministry team.'
    },
    {
      icon: Baby,
      title: 'Kids Ministry',
      description: 'Safe, fun, and age-appropriate programs for children during all services.'
    },
    {
      icon: Coffee,
      title: 'Fellowship Time',
      description: 'Connect with others over coffee and refreshments after each service.'
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Sunday Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Join us every Sunday for inspiring worship, practical teaching, and meaningful fellowship. 
            Choose the service style that best fits your preference.
          </p>
        </div>

        {/* Service Times - Mobile Optimized */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className={`bg-gradient-to-br ${index === 0 ? 'from-purple-600 to-purple-700' : 'from-red-600 to-red-700'} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10 sm:-translate-y-12 sm:translate-x-12 lg:-translate-y-16 lg:translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold">{service.time}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">{service.description}</p>
                <div className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-white/80 text-xs sm:text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Features - Mobile Optimized */}
        <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-2">
              <div className="bg-purple-100 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-purple-600" />
              </div>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h4>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">First Time Visiting?</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 px-2">
              We'd love to meet you! Come as you are and experience the warmth of our community. 
              No need to dress up or bring anything - just bring yourself.
            </p>
            <button className="bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors text-sm sm:text-base">
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;