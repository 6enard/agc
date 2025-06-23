import React from 'react';
import { Heart, Users, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love',
      description: 'We believe in showing Christ\'s love through our actions and words to everyone we meet.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building authentic relationships and supporting one another in faith and life.'
    },
    {
      icon: BookOpen,
      title: 'Truth',
      description: 'Committed to teaching and living according to God\'s Word with integrity and grace.'
    },
    {
      icon: Globe,
      title: 'Mission',
      description: 'Reaching our community and the world with the transformative message of Jesus Christ.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Lakeview Assembly</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            For over 50 years, we've been a beacon of hope and faith in our community, 
            dedicated to helping people discover their purpose and grow in their relationship with God.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Church community"
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 px-4 lg:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Founded in 1970, Lakeview Assembly of God began as a small gathering of believers 
              with a big vision: to create a church where everyone feels welcomed, loved, and 
              empowered to make a difference in the world.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Today, we're a thriving community of families, singles, young adults, and seniors 
              who come together to worship, learn, serve, and support one another. Our doors are 
              open to people from all walks of life, regardless of where they are in their spiritual journey.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center mx-4 sm:mx-0">
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;