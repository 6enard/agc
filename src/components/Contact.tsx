import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Lakeview Drive', 'Anytown, ST 12345']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', 'Emergency: (555) 987-6543']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@lakeviewagc.org', 'pastor@lakeviewagc.org']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 5:00 PM', 'Sat-Sun: By Appointment']
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, 
            don't hesitate to reach out to our church family.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm sm:text-base">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Prayer Request */}
            <div className="mt-8 bg-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                <h4 className="text-base sm:text-lg font-semibold">Prayer Requests</h4>
              </div>
              <p className="text-blue-100 mb-4 text-sm sm:text-base">
                Submit your prayer requests and our prayer team will lift you up in prayer.
              </p>
              <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Submit Request
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="visit">Planning a Visit</option>
                    <option value="ministry">Ministry Information</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="pastoral">Pastoral Care</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Find Us Here</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Located in the heart of the community, our church is easily accessible with plenty of parking available.
            </p>
          </div>
          <div className="bg-gray-200 h-48 sm:h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2" />
              <p className="text-sm sm:text-base">Interactive Map</p>
              <p className="text-xs sm:text-sm">123 Lakeview Drive, Anytown, ST 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;