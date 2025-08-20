import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, GraduationCap, Building } from 'lucide-react';
import Divisions from '../components/Divisions';
import aboutImage from '../assets/images/about.jpg';
import Footer from '../components/Footer';

const About = () => {
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Side - Team Photo */}
              <div className="lg:w-3/5">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={aboutImage} 
                    alt="ACM DALLAS Team" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Right Side - Text Overlay */}
              <div className="lg:w-2/5">
                <div className=" text-center lg:text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="text-white">The world's </span>
                    <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                      largest
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                      international
                    </span>
                    <br />
                    <span className="text-white">computing society,</span>
                    <br />
                    <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                      here at Dallas
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className=" sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Mission</h2>
              <p className="text-lg text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
                ACM at Dallas is a dynamic organization comprising eight specialized divisions and a dedicated team of over 100 officers. 
                Each division plays a unique role in fostering innovation and engagement, yet we are united by a common mission: 
                to enhance and support the computing community at Dallas.
              </p>
            </div>
          </motion.div>

          {/* Divisions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Divisions</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                acm is comprised of eight divisions — each serving a different topic and mission
              </p>
            </div>
            <Divisions />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

