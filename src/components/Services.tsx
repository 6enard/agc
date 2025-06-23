import React from 'react';
import { Clock, Music, Baby, Coffee } from 'lucide-react';

const Services = () => {
  const services = [
    {
      time: '9:00 AM',
      title: 'Traditional Service',
      description: 'Classic hymns, thoughtful liturgy, and timeless worship in a reverent atmosphere.',
      features: ['Traditional Music', 'Formal Liturgy', 'All Ages Welcome']
    },
    {
      time: '11:00 AM',
      title: 'Contemporary Service',
      description: 'Modern worship music, casual atmosphere, and engaging messages for the whole family.',
      features: ['Contemporary Music', 'Casual Dress', 'Interactive Worship']
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sunday Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join us every Sunday for inspiring worship, practical teaching, and meaningful fellowship. 
            Choose the service style that best fits your preference.
          </p>
        </div>

        {/* Service Times */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden mx-4 lg:mx-0">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  <span className="text-xl sm:text-2xl font-bold">{service.time}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-blue-100 mb-6 text-base sm:text-lg">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-blue-100 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">First Time Visiting?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              We'd love to meet you! Come as you are and experience the warmth of our community. 
              No need to dress up or bring anything - just bring yourself.
            </p>
            <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;