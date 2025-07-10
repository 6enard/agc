import React from 'react';
import { GraduationCap, Users, BookOpen, Heart, Star, MapPin, Phone, Mail, Clock, Award, Target, Lightbulb } from 'lucide-react';

const LakeviewAcademy = () => {
  const features = [
    {
      icon: Heart,
      title: 'Christian Values',
      description: 'Education rooted in biblical principles and Christian character development'
    },
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed to prepare students for academic excellence'
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with low student-to-teacher ratios'
    },
    {
      icon: Star,
      title: 'Holistic Development',
      description: 'Nurturing spiritual, academic, social, and physical growth'
    }
  ];

  const programs = [
    {
      level: 'Pre-Primary',
      ages: 'Ages 3-5',
      description: 'Foundation learning through play-based activities and early literacy',
      subjects: ['Early Literacy', 'Numeracy', 'Creative Arts', 'Physical Education', 'Bible Stories']
    },
    {
      level: 'Primary',
      ages: 'Ages 6-13',
      description: 'Comprehensive primary education following the Kenyan curriculum',
      subjects: ['Mathematics', 'English', 'Kiswahili', 'Science', 'Social Studies', 'Religious Education']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in all we do'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building character through honesty and moral uprightness'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Encouraging creativity and critical thinking skills'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fostering a sense of belonging and mutual support'
    }
  ];

  return (
    <section id="academy" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-purple-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 sm:mb-6 border border-purple-200/50">
            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-600" />
            <span className="text-sm sm:text-base font-medium text-purple-600">Christian Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Lakeview Academy
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            A Christian-based academic institution offering quality education for kindergarten students, 
            promoting a God-fearing generation imparted with spiritual values.
          </p>
        </div>

        {/* Hero Image and Overview */}
        <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2 mb-12 sm:mb-16 lg:mb-20">
          <div>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Lakeview Academy students"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1">Nurturing Young Minds</h3>
                <p className="text-sm sm:text-base text-white/80">Building tomorrow's leaders today</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Excellence in Christian Education
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Lakeview Academy is committed to providing quality education that combines academic excellence 
              with Christian values. Our dedicated teachers create a nurturing environment where children 
              can grow spiritually, intellectually, and socially.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Our Programs
          </h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`${index === 0 ? 'bg-purple-100' : 'bg-red-100'} p-3 sm:p-4 rounded-xl mr-4`}>
                    <GraduationCap className={`h-6 w-6 sm:h-8 sm:w-8 ${index === 0 ? 'text-purple-600' : 'text-red-600'}`} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{program.level}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{program.ages}</p>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{program.description}</p>
                
                <div>
                  <h5 className="text-sm sm:text-base font-bold text-gray-900 mb-3">Key Subjects:</h5>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <span 
                        key={idx} 
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          index === 0 ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/50">
                <div className="bg-gradient-to-br from-purple-100 to-red-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="h-6 w-6 sm:h-7 sm:w-7 text-purple-600" />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/50">
          <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Enroll Your Child Today
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
                Give your child the foundation they need for a successful future. Our admissions team 
                is ready to help you through the enrollment process.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">Section 58, Nakuru (Same campus as the church)</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">0797438190</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">academy@lakeviewagc.net</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">Mon-Fri: 7:30 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-red-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Why Choose Lakeview Academy?</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Experienced and dedicated Christian teachers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Safe and nurturing learning environment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Character development through biblical values</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Affordable quality education</span>
                </li>
              </ul>
              
              <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors mt-6 text-sm sm:text-base">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LakeviewAcademy;