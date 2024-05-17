import Headroom from "react-headroom"
import Header from "./Header"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {

  return (
    <div className="h-dvh min:h-dvh relative hero-background bg-gradient-to-t from-stone-200/50 to-orange-200/45 lg:bg-[url('./assets/hero-bg.jpg')]"  id="home">
      <Headroom>
        <Header />
      </Headroom>

      <div className="flex justify-center min-h-[calc(100dvh-20%)]">
        <div className="content-container flex flex-col justify-center lg:justify-start xl:justify-center lg:flex-row">
          <div className="hero-left flex flex-col w-screen lg:w-3/5 justify-center gap-8 px-8 text-gray-800">
              <h2 className="text-4xl xl:text-5xl w-full lg:w-4/5">I'm <span className="capitalize font-bold shadow-md px-4 py-2 ">Reymark Bacalso</span></h2>
              <h4 className="text-2xl xl:text-3xl w-4/5">Software Engineer | Frontend Developer | Backend Developer</h4>

              <div className="media-links">
                <ul className=" flex gap-8">

                  <li className="hover:scale-110 transition"><a href="#"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a></li>
                  <li className="hover:scale-110 transition"><a href="#"><FontAwesomeIcon icon={faGithub} size="2xl" /></a></li>
                  <li className="hover:scale-110 transition"><a href="#"><FontAwesomeIcon icon={faFacebook} size="2xl" /></a></li>
                </ul>
              </div>
          </div>
          <div className="hero-right w-2/5 flex items-center justify-center">
            <div className="image-container h-[25rem] w-[25rem] xl:h-[30rem] xl:w-[30rem] relative items-center justify-center shadow-xl rounded-full bg-gray-300/50 hover:scale-105 transition hidden lg:flex">
              <img src="" alt="Reymark" className="overflow-hidden h-full w-full rounded-full" />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero