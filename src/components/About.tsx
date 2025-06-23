import React, { useState } from 'react';
import { Heart, Users, BookOpen, Globe, ChevronUp, MapPin, Phone, Mail, Calendar, Clock } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('who-we-are');
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'pastoral-staff', label: 'Pastoral Staff' },
    { id: 'history', label: 'History' }
  ];

  const weeklyEvents = [
    { day: 'Monday', event: 'Church Visitation', time: '5:30 PM - 6:30 PM' },
    { day: 'Tuesday', event: 'YP BS @ Bontana Hotel', time: '5:30 PM - 6:30 PM' },
    { day: 'Wednesday', event: 'Home Fellowship', time: '5:30 PM - 6:30 PM' },
    { day: 'Thursday', event: 'Choir Practice', time: '5:30 PM - 6:30 PM' },
    { day: 'Friday', event: 'Prayer Service', time: '5:30 PM - 6:30 PM' },
    { day: 'Saturday', event: 'Choir Practice', time: '5:30 PM - 6:30 PM' }
  ];

  const departmentPrayers = [
    { day: 'Monday', department: 'Compassion & Children' },
    { day: 'Tuesday', department: 'Ladies & Men' },
    { day: 'Wednesday', department: 'Missions & Evangelism' },
    { day: 'Thursday', department: 'Youth Department & Academy' },
    { day: 'Friday', department: 'Worship and Development' }
  ];

  const contacts = [
    { name: 'Rev. Delton Orgeness', phone: '0726907931' },
    { name: 'Pastor Rachel Ng\'etich', phone: '0721406155' },
    { name: 'Harry Yegon', phone: '0726216029' },
    { name: 'Samuel Maina', phone: '0724754423' },
    { name: 'Oswald Midamba', phone: '072358870' }
  ];

  const milestones = [
    {
      date: 'March 26th, 1978',
      title: 'First Service',
      description: 'First service conducted in a rented room in Afraha Social Hall, initially called Nakuru Town Church.'
    },
    {
      date: '21st July, 1985',
      title: 'New Sanctuary',
      description: 'Relocated to first owned sanctuary in Section 58 facing Lake Nakuru, christened as \'Lakeview Africa Gospel Church\'. Unveiled by President Daniel Arap Moi.'
    },
    {
      date: '6th October, 2002',
      title: 'Expanded Sanctuary',
      description: 'Launched larger sanctuary to accommodate growing congregation, again inaugurated by President Daniel Arap Moi.'
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">About Lakeview Africa Gospel Church</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Section 58, Nakuru - A house of prayer for all people, spreading the gospel of Jesus Christ across Nakuru County and beyond.
          </p>
        </div>

        {/* Tab Navigation - Mobile Optimized */}
        <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12 px-2">
          <div className="bg-white rounded-full p-1 shadow-lg w-full max-w-2xl">
            <div className="grid grid-cols-3 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-xs sm:text-sm lg:text-base ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          {/* Who We Are Tab */}
          {activeTab === 'who-we-are' && (
            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Who We Are</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Lakeview Africa Gospel Church is a christian based church situated in Nakuru, a house of prayer for all people, 
                    with a mission of spreading the gospel of Jesus Christ to all people across Nakuru County and beyond. 
                    We are part of a large and diverse Africa Gospel Church congregation in Kenya.
                  </p>

                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      To fulfill the Great commandment of the Lord Jesus Christ according to the Great Plan.
                    </p>
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-blue-800 font-medium text-xs sm:text-sm">
                        Mark 12:30-31 • Matthew 28:19-20 • Acts 1:8
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Purpose</h4>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-0.5 flex-shrink-0">1</div>
                        <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                          To proclaim the Gospel of Jesus Christ to all who are and who are saved.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-0.5 flex-shrink-0">2</div>
                        <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                          To nurture the spiritual, physical and mental life of its members through preaching the word of God, Prayers, fellowship and communion.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-0.5 flex-shrink-0">3</div>
                        <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                          To enable its members to identify, develop and use their spiritual gifts to serve both in and out of church.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-0.5 flex-shrink-0">4</div>
                        <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                          To witness through word and deed, undertake projects and programmes that lessen and free the people from the bondage of sin, poverty and disease.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <img 
                    src="https://lakeviewagc.net/static/IMG-20231230-WA0006-d350447fd3a9565252ea7b39c4adf3ea.jpg"
                    alt="Church community"
                    className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover mb-6 sm:mb-8"
                  />

                  {/* Weekly Events */}
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                      Weekly Events (5:30 PM - 6:30 PM)
                    </h4>
                    <div className="space-y-1 sm:space-y-2">
                      {weeklyEvents.map((event, index) => (
                        <div key={index} className="flex justify-between items-center py-1">
                          <span className="font-medium text-gray-900 text-xs sm:text-sm">{event.day}</span>
                          <span className="text-gray-600 text-xs sm:text-sm text-right">{event.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Prayer Days & Contacts - Mobile Stacked */}
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Department Prayer Days</h4>
                  <div className="space-y-1 sm:space-y-2">
                    {departmentPrayers.map((prayer, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="font-medium text-blue-900 text-xs sm:text-sm">{prayer.day}</span>
                        <span className="text-blue-700 text-xs sm:text-sm text-right">{prayer.department}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-600" />
                    Quick Contacts
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {contacts.map((contact, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">{contact.name}</span>
                        <a href={`tel:${contact.phone}`} className="text-green-600 hover:text-green-700 text-xs sm:text-sm">
                          {contact.phone}
                        </a>
                      </div>
                    ))}
                    <div className="border-t border-green-200 pt-2 sm:pt-3 mt-2 sm:mt-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-2">
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">Church Office</span>
                        <a href="tel:0797438190" className="text-green-600 hover:text-green-700 text-xs sm:text-sm">
                          0797438190
                        </a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">Email</span>
                        <a href="mailto:info@lakeviewagc.net" className="text-green-600 hover:text-green-700 text-xs sm:text-sm break-all">
                          info@lakeviewagc.net
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pastoral Staff Tab */}
          {activeTab === 'pastoral-staff' && (
            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Pastorate</h3>
              
              <div className="grid gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Rev. Delton Orgeness"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Rev. Delton Orgeness</h4>
                  <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Senior Pastor</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                    Rev. Delton has been faithfully serving our congregation with wisdom, compassion, and dedication. 
                    His heart for ministry and pastoral care has been instrumental in the growth and spiritual development of our church family.
                  </p>
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <a href="tel:0726907931" className="hover:text-blue-600 transition-colors text-xs sm:text-sm">
                      0726907931
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Pastor Rachel Ngetich"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Pastor Rachel Ngetich</h4>
                  <p className="text-pink-600 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Pastor</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">(Children, Missions, Evangelism and Compassion)</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                    Pastor Rachel brings passion and energy to her ministry with children and missions. 
                    Her heart for evangelism and compassion has touched countless lives both within our congregation and in the broader community.
                  </p>
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <a href="tel:0721406155" className="hover:text-pink-600 transition-colors text-xs sm:text-sm">
                      0721406155
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional pastoral team info */}
              <div className="mt-8 sm:mt-12 bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Pastoral Team</h4>
                <p className="text-sm sm:text-base text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
                  Our pastoral team is committed to shepherding our congregation with love, wisdom, and biblical truth. 
                  They are available for pastoral care, counseling, prayer, and spiritual guidance. Whether you're facing 
                  challenges, celebrating victories, or seeking spiritual direction, our pastors are here to walk alongside you.
                </p>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Brief History of Lakeview AGC</h3>
              
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Journey</h4>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Lakeview Africa Gospel Church has been in existence for the last 47 years with the sole purpose of 
                    sharing the light of the gospel of the Lord Jesus in Nakuru and beyond. It is one of the 1,600 
                    congregations of Africa Gospel Church in Kenya.
                  </p>

                  <div className="mb-6 sm:mb-8">
                    <h5 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Leadership</h5>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                      Planted by Isaac and Susana Saoshiro missionaries with IGM (Immanuel General Mission) from Japan, 
                      Lakeview AGC is now run fully by local leadership, giving members a sense of ownership through 
                      the Local church council (LCC).
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Education</h5>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      The church has established Lakeview Academy, a Christian based academic institution, offering 
                      quality education for kindergarten students and promoting God fearing generation imparted with 
                      spiritual values.
                    </p>
                  </div>
                </div>

                <div>
                  <img 
                    src="https://lakeviewagc.net/static/IMG-20220112-WA0004-280c4ea100c5acf58e3144c857632db3.jpg"
                    alt="Church history"
                    className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-48 sm:h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>

              {/* Timeline - Mobile Optimized */}
              <div className="mb-8 sm:mb-12">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Key Milestones</h4>
                <div className="space-y-6 sm:space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                          <div className="text-blue-600 font-bold text-xs sm:text-sm mb-1 sm:mb-2">{milestone.date}</div>
                          <h5 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{milestone.title}</h5>
                          <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center">
                <Globe className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 text-blue-200" />
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium">
                  The church continues to evangelize the gospel of Jesus Christ all over Nakuru County both as a whole church 
                  and outside through our devoted missions and evangelism ministries. The church has ministries committed to 
                  spreading the gospel through fellowship and companionship.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Map Section - Mobile Optimized */}
        <div className="mt-8 sm:mt-12 lg:mt-16 bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-600" />
              Find Us Here
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
              Located in Section 58, Nakuru, facing Lake Nakuru. Our church is easily accessible with ample parking available.
            </p>
          </div>
          <div className="w-full h-48 sm:h-64 lg:h-80 xl:h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.767972921741!2d36.091611674040266!3d-0.2878393353479355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18299274ae85cb9f%3A0x371b0a1059a0ea54!2sLakeview%20Africa%20Gospel%20Church!5e0!3m2!1sen!2ske!4v1750641375712!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Mobile Optimized */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}
    </section>
  );
};

export default About;