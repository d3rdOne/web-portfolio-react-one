import { useState } from "react"


const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleShowNav =  () => {
    setShowNav(!showNav)
  }

  const handleNavClick = () => {
    setShowNav(false)
  }

  return (
    <>
      <header className="min-w-screen items-center sm:flex sm:justify-center sm:bg-white">
        <div className="w-full sm:max-w-screen-xl sm:flex sm:justify-between">
          <div className="flex items-center justify-between relative z-20 bg-white px-2">
            <div id="logo" className="">
              <h1 className="text-xl sm:text-2xl md:text-3xl tracking-widest font-semibold text-gray-800 md:py-2 transition">MRCSBCLS</h1>
            </div>

            <button className="p-2 hover:scale-105  text-gray-800 sm:hidden w-10 h-10 relative" onClick={handleToggleShowNav}>
               <div className={`inset-0 w-6 h-0.5 m-auto rounded-lg bg-gray-700 transition ${showNav && 'absolute rotate-45'}` }></div>
               <div className={`inset-0 w-6 h-0.5 mt-1.5 rounded-lg bg-gray-700 transition ${showNav && 'absolute hidden'}`}></div>
               <div className={`inset-0 w-6 h-0.5  rounded-lg bg-gray-700 transition ${showNav ? 'm-auto absolute -rotate-45': 'mt-1.5'}`}></div>
            </button>
          </div>

          <div id="nav-links" className={`${showNav ? 'block': 'hidden'} tracking-wide px-2 pt-2 pb-2 sm:py-2 sm:flex sm:gap-1 transition bg-white shadow-lg sm:shadow-none`}>
            <a href="#home" className="block text-gray-800 font-semibold sm:font-semibold hover:bg-gray-50  sm:hover:bg-transparent sm:hover:scale-105 px-2 sm:px-4 sm:py-1 transition leading-loose" onClick={handleNavClick}>Home</a>
            <a href="#about"  className="block mt-1 sm:mt-0 text-gray-800 font-semibold sm:font-semibold hover:bg-gray-50 sm:hover:bg-transparent sm:hover:scale-105  px-2 sm:px-4 sm:py-1 transition leading-loose" onClick={handleNavClick}>About Me</a>
            <a href="#experience"  className="block mt-1 sm:mt-0 text-gray-800 font-semibold sm:font-semibold hover:bg-gray-50 sm:hover:bg-transparent sm:hover:scale-105  px-2 sm:px-4 sm:py-1 transition leading-loose" onClick={handleNavClick}>Experience</a>
            <a href="#projects"  className="block mt-1 sm:mt-0 text-gray-800 font-semibold sm:font-semibold hover:bg-gray-50 sm:hover:bg-transparent sm:hover:scale-105  px-2 sm:px-4 sm:py-1 transition leading-loose" onClick={handleNavClick}>Projects</a>
            <a href="#contact" className="block rounded-sm sm:rounded-md mt-2 sm:mt-0 text-white bg-stone-400 text-center sm:text-left font-semibold sm:font-semibold hover:bg-gray-5 sm:hover:scale-105  p-2 sm:py-1 sm:px-4  sm:ml-2 transition leading-loose" onClick={handleNavClick}>Contact</a>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header