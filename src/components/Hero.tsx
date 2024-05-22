
import Typewriter from 'typewriter-effect';
import profilePic from '../assets/pp-alt2.jpg';
import linkedInImg from '../assets/skill-icons/linkedin.svg';
// import heroBg from '../assets/hero-bg.jpg'

import {motion } from 'framer-motion';

const Hero = () => {
  const roles = ['Software Developer', 'Frontend Developer'];
  return (
    <>
     <div  className="md:py-44 bg-white text-gray-500 sm:flex sm:justify-center p-4 bg-[url('../assets/hero-bg.jpg')]">
        <motion.div
          initial={{opacity:0}}
          animate={{opacity: 1, transition: {when: 'beforeChildren', staggerChildren: 0.1}}}
          className='h-svh sm:h-full w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-lg flex flex-col sm:flex-row-reverse gap-4 justify-center sm:justify-center items-center'>
          {/* Display Image */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 0.4}}}
            className="h-52  w-52 sm:h-60 sm:w-60 md:h-80 md:w-80 bg-gradient-to-tr from-slate-400 to-slate-500 rounded-full border-[1px] overflow-hidden text-center flex-shrink-0 transition hover:scale-105 shadow-xl">
            <motion.img src={profilePic} alt="" className='h-full w-full bg-transparent object-contain' initial={{opacity: 0}} animate={{opacity: 1}} />
          </motion.div>
          {/* Name & Title */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { duration: 1, when: 'beforeChildren', staggerChildren: 1}}}
            className='w-full flex-grow-0 text-center sm:text-left text-gray-900 p-4'>
            <motion.h1
              initial={{opacity: 0}}
              animate={{opacity: 1, transition: {delay: 0.2, duration: 1}}}
              className="text-3xl sm:text-4xl xl:text-6xl">I'm <span className='font-bold tracking-wide'>Reymark Bacalso</span>
            </motion.h1>
            <h3 className='text-2xl sm:text-3xl xl:text-4xl mt-1 sm:mt-4'>
              <Typewriter
                options={{
                  strings: roles,
                  autoStart:  true,
                  loop:true,
                  deleteSpeed: 10,
                  delay: 80
                }}
              />
              {/* Software Engineer | Frontend Developer */}
            </h3>
            <div className='min-h-36 sm:min-h-0 p-4 sm:px-0'>
              <motion.ul
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {when: 'beforeChildren', delay: 0.6}}}
                className="h-full sm:w-full flex justify-center items-center sm:justify-start gap-4">
                <li className="hover:scale-110 transition">
                  <a href="https://linkedin.com/in/reymark-bacalso" target="_blank">
                    <img src={linkedInImg} alt="linkedin" className='h-8 w-8'/>
                  </a>
                </li>
                {/* <li className="hover:scale-110 transition"><a href="#"><FontAwesomeIcon icon={faGithub} size="xl" /></a></li>
                <li className="hover:scale-110 transition"><a href="#"><FontAwesomeIcon icon={faFacebook} size="xl" /></a></li> */}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>

     </div>
    </>
  )
}

export default Hero