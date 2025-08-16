import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Users, FileText, Star, DollarSign, GraduationCap, Code, Lightbulb, Wrench, Pencil } from 'lucide-react';
import Footer from '../components/Footer';

const Officers = () => {
  const boardMembers = [
    { 
      name: "Milankumar Rana", 
      role: "Chair", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Leading the organization with vision and strategic direction."
    },
    { 
      name: "Sakhita sree gadde", 
      role: "Vice Chair", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Supporting leadership and coordinating between divisions."
    },
    { 
      name: "Monika Malik", 
      role: "Secretary", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "Managing documentation and organizational communications."
    },
    { 
      name: "Nandita Giri", 
      role: "Chair member", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "Contributing to strategic decisions and organizational growth."
    },
    { 
      name: "Vivek", 
      role: "Treasurer", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "Managing finances and budget allocation for all activities."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Right Side Background Glows - Positioned to mix with content */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Blue glow from bottom-right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        {/* Purple/pink glow from top-right */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Meet the Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left Side - Text */}
              <div className="lg:w-1/2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  meet the team
                </h1>
                <p className="text-2xl sm:text-3xl text-white/80 mb-4">8 divisions. One goal.</p>
                <p className="text-lg text-white/60">here are the students keeping ACM in motion.</p>
              </div>
              
              {/* Right Side - Decorative Elements */}
              <div className="lg:w-1/2 relative">
                {/* Gradient Circle */}
                <div className="w-64 h-64 bg-gradient-to-b from-pink-400 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            
              </div>
            </div>
          </motion.div>

          {/* The Board Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-left mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                the board
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-white/70">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Officers;

