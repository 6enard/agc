import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Section 58, Nakuru', 'Facing Lake Nakuru']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['0797438190', 'Emergency: 0726907931']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@lakeviewagc.net', 'pastor@lakeviewagc.net']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 5:00 PM', 'Sat-Sun: By Appointment']
    }
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, 
            don't hesitate to reach out to our church family.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <info.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-xs sm:text-sm lg:text-base">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Prayer Request - Mobile Optimized */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-600 to-red-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold">Prayer Requests</h4>
              </div>
              <p className="text-white/80 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                Submit your prayer requests and our prayer team will lift you up in prayer.
              </p>
              <button className="bg-white text-purple-600 px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-xs sm:text-sm lg:text-base">
                Submit Request
              </button>
            </div>
          </div>

          {/* Contact Form - Mobile Optimized */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="0700 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
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
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:from-purple-700 hover:to-red-700 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section - Mobile Optimized */}
        <div className="mt-8 sm:mt-12 lg:mt-16 bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Find Us Here</h3>
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
    </section>
  );
};

export default Contact;