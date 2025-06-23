import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, MapPin, Clock, Mail, Phone } from 'lucide-react';

const MinistryDetail = () => {
  const { ministryId } = useParams();

  const ministryData = {
    youth: {
      title: 'Youth Ministry',
      subtitle: 'Empowering the Next Generation',
      description: 'Our Youth Ministry is designed to help teenagers navigate life\'s challenges while growing in their faith. We provide a safe, fun environment where young people can build lasting friendships, discover their purpose, and develop a personal relationship with Jesus Christ.',
      age: 'Ages 13-18',
      meetingTime: 'Sundays 6:00 PM - 8:00 PM',
      location: 'Youth Center',
      leader: 'Pastor Mike Johnson',
      contact: 'youth@lakeviewagc.org',
      phone: '(555) 123-4567 ext. 102',
      color: 'bg-purple-500',
      heroImage: 'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646848/pexels-photo-6646848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      programs: [
        {
          name: 'Sunday Night Youth',
          description: 'Weekly gathering with worship, games, and relevant Bible teaching',
          time: 'Sundays 6:00 PM'
        },
        {
          name: 'Youth Small Groups',
          description: 'Intimate groups for deeper relationships and Bible study',
          time: 'Wednesdays 7:00 PM'
        },
        {
          name: 'Summer Camp',
          description: 'Annual week-long camp experience with outdoor activities and spiritual growth',
          time: 'July (Annual)'
        },
        {
          name: 'Mission Trips',
          description: 'Local and international service opportunities',
          time: 'Various Times'
        }
      ],
      upcomingEvents: [
        {
          title: 'Youth Game Night',
          date: 'Nov 20, 2024',
          time: '6:00 PM - 9:00 PM',
          description: 'Fun evening of games, pizza, and fellowship'
        },
        {
          title: 'Winter Retreat',
          date: 'Dec 15-17, 2024',
          time: 'Weekend',
          description: 'Three-day retreat focused on spiritual growth and community building'
        }
      ]
    },
    womens: {
      title: 'Women\'s Ministry',
      subtitle: 'Growing Together in Faith',
      description: 'Our Women\'s Ministry creates opportunities for women of all ages to connect, grow spiritually, and support one another through life\'s journey. We offer Bible studies, fellowship events, and service opportunities that strengthen our faith and friendships.',
      age: 'All Ages',
      meetingTime: 'Tuesdays 7:00 PM - 8:30 PM',
      location: 'Fellowship Hall',
      leader: 'Sarah Williams',
      contact: 'women@lakeviewagc.org',
      phone: '(555) 123-4567 ext. 103',
      color: 'bg-pink-500',
      heroImage: 'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646848/pexels-photo-6646848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      programs: [
        {
          name: 'Tuesday Bible Study',
          description: 'Weekly in-depth Bible study with discussion and prayer',
          time: 'Tuesdays 7:00 PM'
        },
        {
          name: 'Women\'s Retreat',
          description: 'Annual weekend retreat for spiritual renewal and fellowship',
          time: 'Spring (Annual)'
        },
        {
          name: 'Mom\'s Group',
          description: 'Support group for mothers with childcare provided',
          time: 'Thursdays 10:00 AM'
        },
        {
          name: 'Service Projects',
          description: 'Community service opportunities throughout the year',
          time: 'Monthly'
        }
      ],
      upcomingEvents: [
        {
          title: 'Women\'s Christmas Tea',
          date: 'Dec 10, 2024',
          time: '2:00 PM - 4:00 PM',
          description: 'Festive afternoon of fellowship, refreshments, and celebration'
        },
        {
          title: 'New Year Prayer Breakfast',
          date: 'Jan 7, 2025',
          time: '9:00 AM - 11:00 AM',
          description: 'Start the new year with prayer, breakfast, and encouragement'
        }
      ]
    },
    childrens: {
      title: 'Children\'s Ministry',
      subtitle: 'Building Faith from the Ground Up',
      description: 'Our Children\'s Ministry provides a safe, fun, and nurturing environment where kids can learn about God\'s love through age-appropriate activities, Bible stories, and interactive lessons. We partner with parents to help children develop a strong foundation of faith.',
      age: 'Ages 0-12',
      meetingTime: 'Sundays during both services',
      location: 'Children\'s Wing',
      leader: 'Jennifer Martinez',
      contact: 'kids@lakeviewagc.org',
      phone: '(555) 123-4567 ext. 104',
      color: 'bg-green-500',
      heroImage: 'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646848/pexels-photo-6646848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      programs: [
        {
          name: 'Sunday School',
          description: 'Age-appropriate Bible lessons during both Sunday services',
          time: 'Sundays 9:00 AM & 11:00 AM'
        },
        {
          name: 'Vacation Bible School',
          description: 'Week-long summer program with crafts, games, and Bible stories',
          time: 'Summer (Annual)'
        },
        {
          name: 'Kids Club',
          description: 'Midweek program with activities and Bible learning',
          time: 'Wednesdays 6:30 PM'
        },
        {
          name: 'Family Events',
          description: 'Special events designed for the whole family',
          time: 'Monthly'
        }
      ],
      upcomingEvents: [
        {
          title: 'Christmas Program',
          date: 'Dec 22, 2024',
          time: '6:00 PM',
          description: 'Children\'s Christmas presentation for families and friends'
        },
        {
          title: 'Kids New Year Party',
          date: 'Dec 31, 2024',
          time: '6:00 PM - 8:00 PM',
          description: 'Fun New Year celebration for kids and families'
        }
      ]
    },
    worship: {
      title: 'Worship Ministry',
      subtitle: 'Leading Hearts to Heaven',
      description: 'Our Worship Ministry is dedicated to creating an atmosphere where people can encounter God through music and the arts. We welcome musicians, singers, and artists of all skill levels to join us in leading our congregation in meaningful worship.',
      age: 'All Ages',
      meetingTime: 'Thursdays 7:00 PM - 9:00 PM',
      location: 'Main Sanctuary',
      leader: 'David Chen',
      contact: 'worship@lakeviewagc.org',
      phone: '(555) 123-4567 ext. 105',
      color: 'bg-blue-500',
      heroImage: 'https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/6646848/pexels-photo-6646848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      programs: [
        {
          name: 'Worship Team Practice',
          description: 'Weekly rehearsal for Sunday worship services',
          time: 'Thursdays 7:00 PM'
        },
        {
          name: 'Choir',
          description: 'Traditional choir for special services and events',
          time: 'Sundays 8:00 AM'
        },
        {
          name: 'Youth Worship',
          description: 'Training young musicians and vocalists',
          time: 'Saturdays 10:00 AM'
        },
        {
          name: 'Special Events',
          description: 'Concerts and worship nights throughout the year',
          time: 'Various'
        }
      ],
      upcomingEvents: [
        {
          title: 'Christmas Concert',
          date: 'Dec 15, 2024',
          time: '7:00 PM',
          description: 'Special Christmas concert featuring choir and worship team'
        },
        {
          title: 'Worship Night',
          date: 'Jan 12, 2025',
          time: '7:00 PM - 9:00 PM',
          description: 'Evening of extended worship and prayer'
        }
      ]
    },
    outreach: {
      title: 'Community Outreach',
      subtitle: 'Serving Our Neighbors',
      description: 'Our Community Outreach Ministry is committed to showing God\'s love through practical service to our community. We organize food drives, community events, and support programs to meet the needs of those around us.',
      age: 'All Ages',
      meetingTime: 'Saturdays 9:00 AM - 12:00 PM',
      location: 'Community Center',
      leader: 'Maria Rodriguez',
      contact: 'outreach@lakeviewagc.org',
      phone: '(555) 123-4567 ext. 106',
      color: 'bg-orange-500',
      heroImage: 'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646848/pexels-photo-6646848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      programs: [
        {
          name: 'Food Pantry',
          description: 'Weekly food distribution to families in need',
          time: 'Saturdays 9:00 AM'
        },
        {
          name: 'Community Garden',
          description: 'Growing fresh produce for local food programs',
          time: 'Ongoing'
        },
        {
          name: 'Homeless Ministry',
          description: 'Monthly outreach to homeless community',
          time: 'First Saturday'
        },
        {
          name: 'Senior Support',
          description: 'Assistance and companionship for elderly community members',
          time: 'Weekly'
        }
      ],
      upcomingEvents: [
        {
          title: 'Thanksgiving Food Drive',
          date: 'Nov 25, 2024',
          time: '10:00 AM - 2:00 PM',
          description: 'Community-wide food distribution for Thanksgiving'
        },
        {
          title: 'Christmas Toy Drive',
          date: 'Dec 20, 2024',
          time: '9:00 AM - 3:00 PM',
          description: 'Toy distribution for children in need'
        }
      ]
    },
    'small-groups': {
      title: 'Small Groups',
      subtitle: 'Growing Together in Community',
      description: 'Our Small Groups provide intimate settings for deeper relationships, Bible study, and mutual support. These groups meet in homes and at the church, offering opportunities for people to connect on a personal level and grow in their faith together.',
      age: 'All Ages',
      meetingTime: 'Various times throughout the week',
      location: 'Various Locations',
      leader: 'Pastor Tom Anderson',
      contact: 'smallgroups@lakeviewagc.org',
      phone: '(555) 123-4567 ext. 107',
      color: 'bg-teal-500',
      heroImage: 'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646848/pexels-photo-6646848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/8468525/pexels-photo-8468525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      programs: [
        {
          name: 'Adult Bible Study',
          description: 'In-depth Bible study for adults of all ages',
          time: 'Wednesdays 7:00 PM'
        },
        {
          name: 'Young Adults Group',
          description: 'Fellowship and study for young adults (20s-30s)',
          time: 'Fridays 7:30 PM'
        },
        {
          name: 'Couples Groups',
          description: 'Support and study groups for married couples',
          time: 'Various Times'
        },
        {
          name: 'Home Groups',
          description: 'Small groups meeting in members\' homes',
          time: 'Various Times'
        }
      ],
      upcomingEvents: [
        {
          title: 'Small Groups Launch',
          date: 'Jan 15, 2025',
          time: '7:00 PM',
          description: 'Kickoff event for new small group season'
        },
        {
          title: 'Group Leaders Training',
          date: 'Jan 8, 2025',
          time: '6:00 PM - 8:00 PM',
          description: 'Training session for small group leaders'
        }
      ]
    }
  };

  const ministry = ministryData[ministryId as keyof typeof ministryData];

  if (!ministry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ministry Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ministry.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/#ministries"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-4 text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Back to Ministries
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              {ministry.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-200">
              {ministry.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Ministry Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About Our Ministry</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                {ministry.description}
              </p>

              {/* Programs */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Our Programs</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {ministry.programs.map((program, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{program.name}</h4>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base">{program.description}</p>
                    <div className="flex items-center text-blue-600 text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.time}
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo Gallery */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                {ministry.gallery.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${ministry.title} photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ministry Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Age Group</div>
                      <div className="text-gray-600 text-sm sm:text-base">{ministry.age}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Meeting Time</div>
                      <div className="text-gray-600 text-sm sm:text-base">{ministry.meetingTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Location</div>
                      <div className="text-gray-600 text-sm sm:text-base">{ministry.location}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">Ministry Leader</h4>
                  <div className="space-y-3">
                    <div className="text-gray-900 font-medium text-sm sm:text-base">{ministry.leader}</div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a href={`mailto:${ministry.contact}`} className="hover:text-blue-600 transition-colors">
                        {ministry.contact}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a href={`tel:${ministry.phone}`} className="hover:text-blue-600 transition-colors">
                        {ministry.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Get Involved
                </button>
              </div>

              {/* Upcoming Events */}
              {ministry.upcomingEvents.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
                  <div className="space-y-6">
                    {ministry.upcomingEvents.map((event, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{event.title}</h4>
                        <div className="flex items-center text-blue-600 mb-2 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date} • {event.time}
                        </div>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinistryDetail;