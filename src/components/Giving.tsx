import React from 'react';
import { Heart, CreditCard, Building, Smartphone, Gift, Users, Church, Globe } from 'lucide-react';

const Giving = () => {
  const givingOptions = [
    {
      icon: Building,
      title: 'Bank Transfer',
      description: 'Direct bank transfer to our church account',
      details: [
        'Bank: Equity Bank',
        'Account Name: Lakeview Africa Gospel Church',
        'Account Number: 0460291566644',
        'Branch: Nakuru Branch'
      ],
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Money',
      description: 'Give conveniently through M-Pesa',
      details: [
        'Paybill Number: 522522',
        'Account Number: 0460291566644',
        'Or send directly to: 0797438190'
      ],
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
  ];

  const givingAreas = [
    {
      icon: Church,
      title: 'General Fund',
      description: 'Support the overall ministry and operations of our church',
      impact: 'Enables worship services, pastoral care, and facility maintenance'
    },
    {
      icon: Users,
      title: 'Missions & Outreach',
      description: 'Support our mission work in Turkana, Kakuma, and local outreach',
      impact: 'Spreads the gospel and provides aid to communities in need'
    },
    {
      icon: Gift,
      title: 'Building Fund',
      description: 'Help us maintain and improve our church facilities',
      impact: 'Creates better spaces for worship, fellowship, and ministry'
    },
    {
      icon: Globe,
      title: 'Special Projects',
      description: 'Support specific ministry initiatives and community programs',
      impact: 'Funds special events, equipment, and ministry expansions'
    }
  ];

  return (
    <section id="giving" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-purple-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 sm:mb-6 border border-purple-200/50">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-600" />
            <span className="text-sm sm:text-base font-medium text-purple-600">Generous Giving</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Partner With Us in Ministry
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Your generous giving enables us to spread the gospel, serve our community, and support missions. 
            Every gift, no matter the size, makes a difference in advancing God's kingdom.
          </p>
        </div>

        {/* Biblical Foundation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/50 mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              "Give, and it will be given to you"
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 italic">
              "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, 
              will be poured into your lap. For with the measure you use, it will be measured to you." - Luke 6:38
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              At Lakeview AGC, we believe that giving is an act of worship and obedience to God. 
              Your faithful stewardship helps us fulfill our mission to share the gospel and serve others.
            </p>
          </div>
        </div>

        {/* Giving Options */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Ways to Give
          </h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {givingOptions.map((option, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`${option.color} p-3 sm:p-4 rounded-xl mr-4`}>
                    <option.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${option.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">{option.title}</h4>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{option.description}</p>
                
                <div className="space-y-2 sm:space-y-3">
                  {option.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Giving Areas */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Where Your Gifts Go
          </h3>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {givingAreas.map((area, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50">
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className={`${index % 2 === 0 ? 'bg-purple-100' : 'bg-red-100'} p-3 rounded-lg mr-4 flex-shrink-0`}>
                    <area.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${index % 2 === 0 ? 'text-purple-600' : 'text-red-600'}`} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{area.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">{area.description}</p>
                    <p className="text-xs sm:text-sm text-gray-500 italic">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center shadow-2xl">
          <Heart className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto mb-4 sm:mb-6 text-white/80" />
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Thank You for Your Generosity
          </h3>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Your faithful giving enables us to continue our mission of spreading the gospel, 
            supporting our community, and reaching the unreached. May God bless your generous heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Give Now
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
              Learn About Tithing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Giving;