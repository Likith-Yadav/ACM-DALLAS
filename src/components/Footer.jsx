import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, MessageCircle, Github, Youtube } from 'lucide-react';
import chapterLogo from '../assets/images/chapter-logo.png';

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-white/10">
      {/* Rainbow Line */}
      <div className="w-full h-1 bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 via-red-400 via-purple-400 via-blue-400 to-cyan-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo Section */}
          <div className="flex flex-col items-start">
          <div className="w-58 h-16 rounded-2xl overflow-hidden group-hover:border-white/50 transition-all duration-300 shadow-lg">
              <img 
                src={chapterLogo} 
                alt="ACM DALLAS Chapter Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ACM at UTD Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold text-lg mb-4">acm at utd</h3>
            <div className="space-y-2">
              <Link to="/about" className="text-white/80 hover:text-white transition-colors block">about</Link>
              <Link to="/officers" className="text-white/80 hover:text-white transition-colors block">officers</Link>
              <Link to="/connect" className="text-white/80 hover:text-white transition-colors block">connect</Link>
              <Link to="/events" className="text-white/80 hover:text-white transition-colors block">events</Link>
              <Link to="/apply" className="text-white/80 hover:text-white transition-colors block">apply</Link>
            </div>
          </div>

          {/* Reach Us At Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold text-lg mb-4">reach us at</h3>
            <a 
              href="mailto:contact@acmutd.co" 
              className="text-white/80 hover:text-white transition-colors"
            >
              contact@acmutd.co
            </a>
          </div>

          {/* Connect With Us Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold text-lg mb-4">connect with us</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Top Row */}
              <a href="https://linkedin.com/company/acmutd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com/acmutd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://discord.gg/acmutd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              
              {/* Bottom Row */}
              <a href="https://github.com/acmutd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://youtube.com/@acmutd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <div className="w-10 h-10"></div> {/* Empty space for grid alignment */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 