import React from 'react';
import { Users, Heart, GraduationCap, Music, Utensils, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ministries = () => {
  const ministries = [
    {
      id: 'youth',
      icon: Users,
      title: 'Youth Ministry',
      description: 'Engaging programs for teens to grow in faith, build friendships, and discover their purpose.',
      age: 'Ages 13-18',
      color: 'bg-purple-500'
    },
    {
      id: 'womens',
      icon: Heart,
      title: 'Women\'s Ministry',
      description: 'Empowering women through Bible study, fellowship, and service opportunities.',
      age: 'All Ages',
      color: 'bg-pink-500'
    },
    {
      id: 'childrens',
      icon: GraduationCap,
      title: 'Children\'s Ministry',
      description: 'Fun, safe, and educational programs that help kids learn about God\'s love.',
      age: 'Ages 0-12',
      color: 'bg-green-500'
    },
    {
      id: 'worship',
      icon: Music,
      title: 'Worship Ministry',
      description: 'Using music and arts to lead others in worship and glorify God.',
      age: 'All Ages',
      color: 'bg-blue-500'
    },
    {
      id: 'outreach',
      icon: Utensils,
      title: 'Community Outreach',
      description: 'Serving our neighbors through food programs, community events, and support services.',
      age: 'All Ages',
      color: 'bg-orange-500'
    },
    {
      id: 'small-groups',
      icon: Handshake,
      title: 'Small Groups',
      description: 'Intimate gatherings for deeper relationships, prayer, and Bible study.',
      age: 'All Ages',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section id="ministries" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Ministries</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover meaningful ways to connect, grow, and serve through our various ministry programs. 
            There's a place for everyone to belong and make a difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className={`${ministry.color} p-6 text-white`}>
                <ministry.icon className="h-10 w-10 sm:h-12 sm:w-12 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{ministry.title}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {ministry.age}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-4">{ministry.description}</p>
                <Link 
                  to={`/ministry/${ministry.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm sm:text-base"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Get Involved?</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Whether you're looking to serve, learn, or connect with others, we have opportunities 
              that match your interests and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Volunteer Today
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-colors">
                View All Ministries
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;