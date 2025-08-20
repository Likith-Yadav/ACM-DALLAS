import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Linkedin,
  Instagram,
  MessageCircle,
  Github,
  Youtube,
} from "lucide-react";
import Divisions from "../components/Divisions";
import Footer from "../components/Footer";

const Home = () => {
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className=" backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-16 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Association for </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  Computing
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  Machinery
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                we're a team of students with one goal: building a greater, more
                collaborative computing community at Dallas.
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mb-12">
                <SocialIcon
                  icon={<Linkedin size={20} />}
                  href="https://www.linkedin.com/company/acmutd"
                  label="LinkedIn"
                />
                <SocialIcon
                  icon={<Instagram size={20} />}
                  href="https://www.instagram.com/acmutd/"
                  label="Instagram"
                />
                <SocialIcon
                  icon={<MessageCircle size={20} />}
                  href="https://discord.gg/ttB9HuaKsA"
                  label="Discord"
                />
                <SocialIcon
                  icon={<Github size={20} />}
                  href="https://github.com/acmutd/"
                  label="GitHub"
                />
                <SocialIcon
                  icon={<Youtube size={20} />}
                  href="https://www.youtube.com/@acmutdallas4256"
                  label="YouTube"
                />
              </div>

              {/* Scroll Down Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronDown size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join ACM Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Join ACM?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Unlock opportunities for growth, learning, and professional
              development in computing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Meet Other Developers",
                description:
                  "Connect with like-minded students passionate about technology and computing.",
              },
              {
                title: "Learn by Doing",
                description:
                  "Gain hands-on experience through projects, workshops, and real-world applications.",
              },
              {
                title: "Get Career Ready",
                description:
                  "Prepare for your future with industry connections and professional development.",
              },
              {
                title: "Research Opportunities",
                description:
                  "Participate in cutting-edge research projects and academic initiatives.",
              },
              {
                title: "Mentorship Access",
                description:
                  "Get guidance from experienced students and industry professionals.",
              },
              {
                title: "Make Connections",
                description:
                  "Build lasting relationships and expand your professional network.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              our divisions
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              acm dallas is comprised of eight divisions — each serving a different topic and mission
            </p>
          </motion.div>

          <Divisions />
        </div>
      </section>

      {/* Ready to Join Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ready to join acm?
            </h2>
            <p className="text-white/80 text-lg mb-4">
              take the first step towards advancing your career in computing
            </p>
            <p className="text-white/80 text-lg mb-8">
              join our community of passionate technologists today
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto space-x-2">
              <span>start your journey</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const SocialIcon = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer group"
  >
    <div className="text-white group-hover:text-purple-300 transition-colors duration-300">
      {icon}
    </div>
  </a>
);

export default Home;
