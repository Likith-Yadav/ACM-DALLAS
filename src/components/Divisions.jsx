import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Import division images
import mediaIcon from "../assets/about/media.svg";
import researchIcon from "../assets/about/research.svg";
import developmentIcon from "../assets/about/development.svg";
import projectsIcon from "../assets/about/projects.svg";
import educationIcon from "../assets/about/education.svg";
import communityIcon from "../assets/about/community.svg";
import hackIcon from "../assets/about/hackutd.svg";
import industryIcon from "../assets/about/industry.svg";

const Divisions = () => {
  const divisions = [
    {
      name: "media",
      title: "Media",
      icon: mediaIcon,
      href: "/media",
      hasDropdown: true,
      gradient: "bg-media-gradient",
    },
    {
      name: "research",
      title: "Research",
      icon: researchIcon,
      href: "/research",
      hasDropdown: false,
      gradient: "bg-research-gradient",
    },
    {
      name: "development",
      title: "Development",
      icon: developmentIcon,
      href: "/development",
      hasDropdown: true,
      gradient: "bg-development-gradient",
    },
    {
      name: "projects",
      title: "Projects",
      icon: projectsIcon,
      href: "/projects",
      hasDropdown: false,
      gradient: "bg-projects-gradient",
    },
    {
      name: "education",
      title: "Education",
      icon: educationIcon,
      href: "/education",
      hasDropdown: true,
      gradient: "bg-education-gradient",
    },
    {
      name: "community",
      title: "Community",
      icon: communityIcon,
      href: "/community",
      hasDropdown: false,
      gradient: "bg-community-gradient",
    },
    {
      name: "Hack",
      title: "Hack",
      icon: hackIcon,
      href: "/hack",
      hasDropdown: true,
      gradient: "bg-hack-gradient",
    },
    {
      name: "industry",
      title: "Industry",
      icon: industryIcon,
      href: "/industry",
      hasDropdown: false,
      gradient: "bg-industry-gradient",
    },
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="mx-auto w-full max-w-[120rem]">
        {/* First 6 cards in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-4">
          {divisions.slice(0, 6).map((division, index) => (
            <motion.div
              key={division.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex min-w-[250px] sm:min-w-[280px] md:min-w-[300px] w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] flex-col rounded-3xl bg-white/5 p-4"
            >
              <div className="relative h-[100px] sm:h-[120px] w-full">
                <img
                  alt={division.name}
                  loading="lazy"
                  decoding="async"
                  className="object-contain w-full h-full"
                  src={division.icon}
                />
              </div>

              {/* Division Name */}
              <div className="mt-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  <span className="text-white">ACM </span>
                  <span
                    className={`${division.gradient} bg-clip-text text-transparent`}
                  >
                    {division.name === "Hack"
                      ? "Hack"
                      : division.name === "industry"
                      ? "Industry"
                      : division.title}
                  </span>
                </h3>
              </div>

              <div className="mt-4 flex-grow">
                <div className="m-5 flex flex-col items-center gap-2">
                  <div
                    className={`flex items-center rounded-lg ${division.gradient} p-[1px]`}
                  >
                    {division.href ? (
                      <a
                        className="flex w-[10rem] sm:w-[11rem] md:w-[13rem] items-center justify-center rounded-l-lg bg-gray-300/10 px-3 sm:px-4 py-2 font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-sm sm:text-base text-white"
                        href={division.href}
                        target="_self"
                      >
                        Learn more
                      </a>
                    ) : (
                      <div className="flex w-[10rem] sm:w-[11rem] md:w-[13rem] items-center justify-center rounded-l-lg bg-gray-300/10 px-3 sm:px-4 py-2 font-bold text-sm sm:text-base text-white">
                        Learn more
                      </div>
                    )}

                    {division.hasDropdown && (
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        className="flex w-[36px] sm:w-[40px] md:w-[42px] rounded-r-lg h-[36px] sm:h-[40px] md:h-[42px] items-center justify-center bg-gray-300/10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
                      >
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5] text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last two cards in a separate centered flex container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {divisions.slice(6, 8).map((division, index) => (
            <motion.div
              key={division.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 6) * 0.1 }}
              className="relative flex min-w-[250px] sm:min-w-[280px] md:min-w-[300px] w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] flex-col rounded-3xl bg-white/5 p-4"
            >
              <div className="relative h-[100px] sm:h-[120px] w-full">
                <img
                  alt={division.name}
                  loading="lazy"
                  decoding="async"
                  className="object-contain w-full h-full"
                  src={division.icon}
                />
              </div>

              {/* Division Name */}
              <div className="mt-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  <span className="text-white">ACM </span>
                  <span
                    className={`${division.gradient} bg-clip-text text-transparent`}
                  >
                    {division.name === "Hack"
                      ? "Hack"
                      : division.name === "industry"
                      ? "Industry"
                      : division.title}
                  </span>
                </h3>
              </div>

              <div className="mt-4 flex-grow">
                <div className="m-5 flex flex-col items-center gap-2">
                  <div
                    className={`flex items-center rounded-lg ${division.gradient} p-[1px]`}
                  >
                    {division.href ? (
                      <a
                        className="flex w-[10rem] sm:w-[11rem] md:w-[13rem] items-center justify-center rounded-l-lg bg-gray-300/10 px-3 sm:px-4 py-2 font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-sm sm:text-base text-white"
                        href={division.href}
                        target="_self"
                      >
                        Learn more
                      </a>
                    ) : (
                      <div className="flex w-[10rem] sm:w-[11rem] md:w-[13rem] items-center justify-center rounded-l-lg bg-gray-300/10 px-3 sm:px-4 py-2 font-bold text-sm sm:text-base text-white">
                        Learn more
                      </div>
                    )}

                    {division.hasDropdown && (
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        className="flex w-[36px] sm:w-[40px] md:w-[42px] rounded-r-lg h-[36px] sm:h-[40px] md:h-[42px] items-center justify-center bg-gray-300/10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
                      >
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5] text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Divisions;
