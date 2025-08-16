import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react';
import contactImage from '../assets/images/contact.jpg';
import peechiImage from '../assets/images/peechi.jpg';
import Footer from '../components/Footer';

const Connect = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Right Side Background Glows - Positioned to mix with panel */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Blue glow from bottom-right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        {/* Purple/pink glow from top-right */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                {/* Main Illustration Container */}
                <div className="w-96 h-96 relative">
                  <img 
                    src={contactImage} 
                    alt="Contact Illustration" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Connect with us! Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 lg:pr-8 lg:ml-auto"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/30 rounded-2xl p-8 sm:p-12 shadow-2xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center lg:text-left">
                  connect with us!
                </h1>
                
                <div className="space-y-6">
                  {/* LinkedIn */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300"
                  >
                    <a href="https://linkedin.com/company/acmutd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-all duration-300">
                      <Linkedin className="w-6 h-6 text-black" />
                    </a>
                    <span className="text-white text-lg font-medium">LinkedIn</span>
                  </motion.div>

                  {/* Instagram */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300"
                  >
                    <a href="https://instagram.com/acmutd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-all duration-300">
                      <Instagram className="w-6 h-6 text-black" />
                    </a>
                    <span className="text-white text-lg font-medium">Instagram</span>
                  </motion.div>

                  {/* Discord */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300"
                  >
                    <a href="https://discord.gg/acmutd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-all duration-300">
                      <MessageCircle className="w-6 h-6 text-black" />
                    </a>
                    <span className="text-white text-lg font-medium">Discord</span>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300"
                  >
                    <a href="mailto:contact@acmutd.co" className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-all duration-300">
                      <Mail className="w-6 h-6 text-black" />
                    </a>
                    <span className="text-white text-lg font-medium">contact@acmutd.co</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Connect;

