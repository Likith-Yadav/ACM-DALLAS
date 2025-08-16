import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import peechiImage from '../assets/images/peechi.jpg';
import Footer from '../components/Footer';

// Import division icons
import projectsIcon from '../assets/about/projects.svg';
import researchIcon from '../assets/about/research.svg';
import educationIcon from '../assets/about/education.svg';

// Import background images for highlight cards
import projectsBg from '../assets/images/projects.jpg';
import researchBg from '../assets/images/research.jpg';
import techBg from '../assets/images/tech.jpg';
import mentorBg from '../assets/images/mentor.jpg';

const Apply = () => {
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
          {/* Apply Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-black/95 rounded-2xl p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side - Text Content */}
                <div className="lg:w-1/2">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                    apply
                  </h1>
                  <p className="text-lg sm:text-xl text-white/80 mb-4 leading-relaxed">
                    become a part of ACM today by applying to one of our semester long programs or to be an officer!
                  </p>
                  <p className="text-lg text-white/80">
                    all open applications can be found in our member portal at{' '}
                    <a 
                      href="https://portal.acmutd.co/opportunities" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white-400 hover:text-white-300 underline"
                    >
                      portal.acmutd.co/opportunities
                    </a>
                  </p>
                </div>
                
                {/* Right Side - Peechi Illustration */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-80 h-80">
                    <img 
                      src={peechiImage} 
                      alt="Peechi Character" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* ACM Projects Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                {/* Background Image */}
                <img src={projectsBg} alt="ACM Projects Background" className="absolute inset-0 w-full h-full object-cover" />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Logo - Top Left */}
                  <div className="flex items-center space-x-2">
                    <img src={projectsIcon} alt="ACM Projects" className="w-6 h-6" />
                    <span className="text-white font-bold text-lg">acm</span>
                    <span className="text-blue-400 font-bold text-lg">projects.</span>
                  </div>
                  
                  {/* Title - Centered */}
                  <div className="flex-1 flex items-center justify-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
                      ACM Projects
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* ACM Research Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                {/* Background Image */}
                <img src={researchBg} alt="ACM Research Background" className="absolute inset-0 w-full h-full object-cover" />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Logo - Top Left */}
                  <div className="flex items-center space-x-2">
                    <img src={researchIcon} alt="ACM Research" className="w-6 h-6" />
                    <span className="text-white font-bold text-lg">acm</span>
                    <span className="text-orange-400 font-bold text-lg">research.</span>
                  </div>
                  
                  {/* Title - Centered */}
                  <div className="flex-1 flex items-center justify-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
                      ACM Research
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* Technical Interview Prep Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                {/* Background Image */}
                <img src={techBg} alt="Technical Interview Prep Background" className="absolute inset-0 w-full h-full object-cover" />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Logo - Top Left */}
                  <div className="flex items-center space-x-2">
                    <img src={educationIcon} alt="ACM Education" className="w-6 h-6" />
                    <span className="text-white font-bold text-lg">acm</span>
                    <span className="text-green-400 font-bold text-lg">education.</span>
                  </div>
                  
                  {/* Title - Centered */}
                  <div className="flex-1 flex items-center justify-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
                      Technical Interview Prep
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* Mentor Program Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                {/* Background Image */}
                <img src={mentorBg} alt="Mentor Program Background" className="absolute inset-0 w-full h-full object-cover" />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Logo - Top Left */}
                  <div className="flex items-center space-x-2">
                    <img src={educationIcon} alt="ACM Education" className="w-6 h-6" />
                    <span className="text-white font-bold text-lg">acm</span>
                    <span className="text-green-400 font-bold text-lg">education.</span>
                  </div>
                  
                  {/* Title - Centered */}
                  <div className="flex-1 flex items-center justify-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
                      Mentor Program
                    </h2>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Apply;

