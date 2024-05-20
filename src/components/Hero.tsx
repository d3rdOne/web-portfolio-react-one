
import Typewriter from 'typewriter-effect';
import profilePic from '../assets/pp-alt2.jpg'
import linkedInImg from '../assets/skill-icons/linkedin.svg'

const Hero = () => {
// lg:bg-[url('./assets/hero-bg.jpg')]
  const roles = ['Software Engineer', 'Frontend Developer'];
  return (
    <>
     <div  className='h-svh  bg-gray-200 text-gray-500 sm:flex sm:justify-center p-4'>
        <div className='h-svh sm:h-[calc(100vh-20%)] w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-lg flex flex-col sm:flex-row-reverse gap-4 justify-center sm:justify-center items-center'>
          <div className="h-52  w-52 sm:h-60 sm:w-60 md:h-80 md:w-80 bg-gradient-to-b from-slate-200 to-slate-500 rounded-full border-4 overflow-hidden text-center flex-shrink-0 transition hover:scale-105 shadow-xl">
            <img src={profilePic} alt="test" className='h-full w-full bg-transparent object-contain' />
          </div>
          <div className='w-full flex-grow-0 text-center sm:text-left text-gray-800 p-4'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl">I'm <span className='font-bold tracking-wide'>Reymark Bacalso</span></h1>
            <h3 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-1 sm:mt-4'>
              <Typewriter
                options={{
                  strings: roles,
                  autoStart:  true,
                  loop:true,
                  deleteSpeed: 10
                }}
              />
              {/* Software Engineer | Frontend Developer */}
            </h3>
            <div className='min-h-36 sm:min-h-0 p-4 sm:px-0'>
              <ul className="h-full sm:w-full flex justify-center items-center sm:justify-start gap-4">
                <li className="hover:scale-110 transition">
                  <a href="https://linkedin.com/in/reymark-bacalso" target="_blank">
                    <img src={linkedInImg} alt="linkedin" className='h-8 w-8'/>
                  </a>
                </li>
                {/* <li className="hover:scale-110 transition"><a href="#"><FontAwesomeIcon icon={faGithub} size="xl" /></a></li>
                <li className="hover:scale-110 transition"><a href="#"><FontAwesomeIcon icon={faFacebook} size="xl" /></a></li> */}
              </ul>
            </div>
          </div>
        </div>

     </div>
    </>
  )
}

export default Hero