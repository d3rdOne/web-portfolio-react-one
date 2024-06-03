import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleNavClick = () => {
    setShowNav(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, translateY: -40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.8 }}
        className="min-w-screen items-center md:flex md:justify-center md:bg-gray-100 "
      >
        <div className="w-full md:max-w-screen-xl md:flex md:justify-between">
          <div
            className={`flex items-center justify-between relative z-20 bg-gray-100 px-2 ${
              !showNav && "max-md:shadow-md"
            }`}
          >
            <div id="logo" className="">
              <h1 className="text-xl sm:text-2xl md:text-3xl tracking-widest font-semibold text-gray-800 md:py-2 transition">
                MRCSBCLS
              </h1>
            </div>

            <button
              className="p-2 hover:scale-105  text-gray-800 md:hidden w-10 h-10 relative"
              onClick={handleToggleShowNav}
            >
              <div
                className={`inset-0 w-6 h-0.5 m-auto rounded-lg bg-gray-700 transition duration-75 ${
                  showNav && "absolute rotate-45"
                }`}
              ></div>
              <div
                className={`inset-0 w-6 h-0.5 mt-1.5 rounded-lg bg-gray-700 transition duration-75 ${
                  showNav && "absolute hidden"
                }`}
              ></div>
              <div
                className={`inset-0 w-6 h-0.5  rounded-lg bg-gray-700 transition duration-75 ${
                  showNav ? "m-auto absolute -rotate-45" : "mt-1.5"
                }`}
              ></div>
            </button>
          </div>

          <div
            id="nav-links"
            className={`${
              showNav ? "block" : "hidden"
            } tracking-wide px-2 pt-2 pb-2 sm:py-2 md:flex md-:gap-1 transition bg-gray-100 shadow-lg md:shadow-none`}
          >
            <a
              href="#home"
              className="block text-gray-900 font-semibold sm:font-semibold hover:bg-gray-50  md:hover:bg-transparent md:hover:text-green-800 px-2 sm:px-4 sm:py-1 transition leading-loose"
              onClick={handleNavClick}
            >
              Home
            </a>
            <a
              href="#about"
              className="block mt-1 sm:mt-0 text-gray-900 font-semibold sm:font-semibold hover:bg-gray-50 md:hover:bg-transparent md:hover:text-green-800  px-2 sm:px-4 sm:py-1 transition leading-loose"
              onClick={handleNavClick}
            >
              About Me
            </a>
            {/* <a
              href="#experience"
              className="block mt-1 sm:mt-0 text-gray-900 font-semibold sm:font-semibold hover:bg-gray-50 md:hover:bg-transparent md:hover:text-green-800 px-2 sm:px-4 sm:py-1 transition leading-loose"
              onClick={handleNavClick}
            >
              Experience
            </a> */}
            <a
              href="#projects"
              className="block mt-1 sm:mt-0 text-gray-900 font-semibold sm:font-semibold hover:bg-gray-50 md:hover:bg-transparent md:hover:text-green-800 px-2 sm:px-4 sm:py-1 transition leading-loose"
              onClick={handleNavClick}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block rounded-sm sm:rounded-sm mt-2 sm:mt-0 text-white bg-green-600 text-center md:text-left font-semibold sm:font-semibold hover:bg-green-500  p-2 sm:py-1 sm:px-4  sm:ml-2 transition leading-loose"
              onClick={handleNavClick}
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
