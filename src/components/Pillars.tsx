import React from 'react';
import { Users, Heart, Globe, Handshake, MapPin, Cross, Church } from 'lucide-react';

const Pillars = () => {
  const pillars = [
    {
      id: 1,
      title: 'Fellowship',
      icon: Users,
      color: 'from-blue-600 to-blue-700',
      accentColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      description: 'At Lakeview AGC, we proclaim the Gospel of Jesus Christ to all people through preaching the word of God, Prayers, fellowship and communion.',
      features: [
        {
          title: 'Fellowship Gathering',
          description: 'Regular gatherings that strengthen our bonds as a church family'
        },
        {
          title: 'Prayer Groups',
          description: 'Join our weekly prayer meetings and spiritual growth sessions'
        },
        {
          title: 'Community',
          description: 'Connect with fellow believers in our vibrant church community'
        }
      ],
      image: 'https://lakeviewagc.net/static/IMG-20231230-WA0011-6b7dcd064adbf5a15aff332e9f507de0.jpg'
    },
    {
      id: 2,
      title: 'Companionship',
      icon: Heart,
      color: 'from-purple-600 to-purple-700',
      accentColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      description: 'We believe in companionship as a family bound by the body of Jesus Christ. We endeavor, through word and deed, to witness and undertake projects and programmes that lessen and free people from the bondage of sin, poverty and disease and lead a Christian life in a Christian environment that inculcate the fruits of holy spirit as envisaged in Galatians 5:6.',
      features: [
        {
          title: 'Christian Family',
          description: 'United as one body in Christ, supporting each other through life\'s journey'
        },
        {
          title: 'Community Projects',
          description: 'Programs that address sin, poverty, and disease in our community'
        },
        {
          title: 'Fruits of the Spirit',
          description: 'Living out Galatians 5:6 in our daily Christian walk'
        }
      ],
      image: 'https://lakeviewagc.net/static/IMG-20231230-WA0005-dd1eb169af90fd3eedacafd170742f7b.jpg'
    },
    {
      id: 3,
      title: 'Missions & Partnerships',
      icon: Globe,
      color: 'from-green-600 to-green-700',
      accentColor: 'bg-green-100',
      iconColor: 'text-green-600',
      description: 'We were honoured to have Rev Isaac Saoshiro, the founder of Lakeview AGC. We thank God for His blessings and for allowing us to reach the people of Turkana and Kakuma refugee camps.',
      features: [
        {
          title: 'Turkana/Kakuma Mission',
          description: 'Currently partnering with AGC mission station with missionaries Zacceus and Faith Siele'
        },
        {
          title: 'Church Planting',
          description: 'We thank God for our church plant Olive Fellowship AGC'
        },
        {
          title: 'Global Reach',
          description: 'Founded by Rev Isaac Saoshiro, continuing the mission legacy'
        }
      ],
      image: 'https://lakeviewagc.net/static/IMG-20231230-WA0004-3457e491f2c67ca1eb26f03dcbb83707.jpg'
    }
  ];

  return (
    <section id="pillars" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 sm:mb-6 border border-blue-200/50">
            <Church className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
            <span className="text-sm sm:text-base font-medium text-blue-600">Our Foundation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            The Three Pillars of
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Lakeview AGC
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Our church stands strong on these foundational pillars that guide our mission, 
            shape our community, and define our purpose in serving God and others.
          </p>
        </div>

        {/* Pillars */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {pillars.map((pillar, index) => (
            <div key={pillar.id} className={`grid gap-6 sm:gap-8 lg:gap-12 items-center ${
              index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
            }`}>
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-white/50">
                  {/* Pillar Header */}
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`${pillar.accentColor} p-3 sm:p-4 rounded-xl sm:rounded-2xl mr-4 sm:mr-6`}>
                      <pillar.icon className={`h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 ${pillar.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                        Pillar {pillar.id}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 sm:space-y-6">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${pillar.color} mr-3 sm:mr-4 mt-2 flex-shrink-0`}></div>
                        <div>
                          <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Element */}
                  <div className={`mt-6 sm:mt-8 h-1 w-16 sm:w-20 bg-gradient-to-r ${pillar.color} rounded-full`}></div>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  {/* Floating Badge */}
                  <div className={`absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-r ${pillar.color} text-white p-3 sm:p-4 lg:p-6 rounded-full shadow-xl`}>
                    <pillar.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${pillar.color} opacity-20 rounded-full blur-xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Handshake className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600 mr-3 sm:mr-4" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Join Our Mission
              </h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Be part of a community that lives out these pillars daily. Whether through fellowship, 
              companionship, or missions, there's a place for you to grow and serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Involved Today
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 text-sm sm:text-base">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Prayer Request Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center shadow-2xl">
            <Cross className={`h-6 w-6 sm:h-8 sm:w-8  'text-blue-600' : 'text-white text-center'}`} />
            <h3 classNzzzzame="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Let's Continue to Pray
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              "Let's continue to pray for them" - Join us in lifting up our mission partners, 
              church plants, and all those we serve around the world.
            </p>
            <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base">
              Submit Prayer Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;