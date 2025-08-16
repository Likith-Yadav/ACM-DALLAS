import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState('August');

  const pastEvents = [
    {
      title: "ACM Projects Presentation Night Spring 2025",
      location: "ECSW 1.315",
      time: "Thursday, May 1 at 1 AM UTC",
      description: "We invite you to join us for the ACM Projects Presentation Night! Our 11 teams will be presenting the amazing projects they have worked on throughout the semester. Come out to learn more about what we do and show your support!"
    },
    {
      title: "State Farm's Introduction to the Cloud",
      location: "ECSW 1.355", 
      time: "Wednesday, April 30 at 12 AM UTC",
      description: "From campus to cloud, join us for an inside look at State Farm's bold move into the Cloud. Discover the challenges and key lessons from their transformation, and come find out how you can kickstart your own learning journey as a student and young professional!"
    },
    {
      title: "End of Semester Social",
      location: "TI Auditorium",
      time: "Wednesday, April 30 at 12 AM UTC", 
      description: "Celebrating all of the mentors and mentees for their hard work this semester."
    }
  ];

  // Generate calendar days for August
  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = 31;
    const startDay = 4; // August 1st starts on Thursday (0=Sunday, 4=Thursday)
    
    // Add empty cells for days before the 1st
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen pt-16">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
          </motion.div>

          {/* Upcoming Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  upcoming events
                </span>
              </h2>
            </div>

            {/* Calendar */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <h3 className="text-2xl font-bold">{currentMonth}</h3>
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-white/60 font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg border border-white/10 flex items-center justify-center text-sm transition-colors ${
                      day ? 'bg-white/5 hover:bg-white/10 cursor-pointer' : ''
                    } ${day === 15 ? 'bg-green-500/20 border-green-500/40' : ''}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Past Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  past events
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-white/70">
                      <MapPin size={16} className="text-purple-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <Clock size={16} className="text-purple-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm leading-relaxed">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;

