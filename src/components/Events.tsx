import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      date: 'Nov 15',
      day: 'Sunday',
      title: 'Fall Harvest Festival',
      time: '2:00 PM - 5:00 PM',
      location: 'Church Campus',
      description: 'Join us for a fun-filled afternoon with games, food, and fellowship for the whole family.',
      category: 'Family Event',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      date: 'Nov 22',
      day: 'Sunday',
      title: 'Thanksgiving Service',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      description: 'A special service of gratitude and thanksgiving with inspiring music and message.',
      category: 'Worship',
      image: 'https://images.pexels.com/photos/6646848/pexels-photo-6646848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      date: 'Dec 1',
      day: 'Tuesday',
      title: 'Women\'s Bible Study',
      time: '7:00 PM - 8:30 PM',
      location: 'Fellowship Hall',
      description: 'Weekly Bible study exploring the book of Philippians. All women welcome.',
      category: 'Bible Study',
      image: 'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      date: 'Dec 12',
      day: 'Saturday',
      title: 'Christmas Outreach',
      time: '9:00 AM - 2:00 PM',
      location: 'Community Center',
      description: 'Serving our community with gift distribution and hot meals during the holiday season.',
      category: 'Outreach',
      image: 'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Family Event': return 'bg-green-100 text-green-800';
      case 'Worship': return 'bg-blue-100 text-blue-800';
      case 'Bible Study': return 'bg-purple-100 text-purple-800';
      case 'Outreach': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="events" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Upcoming Events</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Stay connected with our church family through special events, services, and community gatherings. 
            Mark your calendar and join us!
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 lg:grid-cols-2">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white rounded-lg p-2 sm:p-3 text-center shadow-lg">
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-blue-600">{event.date.split(' ')[1]}</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase">{event.date.split(' ')[0]}</div>
                  <div className="text-xs text-gray-500">{event.day}</div>
                </div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{event.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">{event.description}</p>
                
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{event.location}</span>
                  </div>
                </div>
                
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-xs sm:text-sm lg:text-base">
                  Learn More <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Calendar CTA - Mobile Optimized */}
        <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Calendar className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 text-blue-200" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Never Miss an Event</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 mb-4 sm:mb-6 px-2">
              Subscribe to our church calendar and get notifications about upcoming events, services, and special programs.
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Subscribe to Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;