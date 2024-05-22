import SkillCards from "./SkillCards/SkillCards"
import { AnimateChangeInHeight } from "./Utilities/AnimateChangeInHeight"

const About = () => {
  return (
    <section className="max-h-full bg-gray-50 flex flex-col items-center px-8 bg-white" id="about">
      <div className='w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-lg pt-8'>
        <h2 className="text-2xl font-semibold tracking-wide"> About me </h2>
        <AnimateChangeInHeight>
        <h4 className="text-lg py-8">Software Engineer with 6+ years of experience building and integrating user interfaces with well-designed REST APIs. Possesses a strong understanding of front-end development and back-end development principles.</h4>
        </AnimateChangeInHeight>

      </div>

      <div className="w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-lg pt-2 pb-4">
        <h2 className="text-2xl font-semibold tracking-wide">Skills</h2>
        <SkillCards/>
      </div>
    </section>
  )
}

export default About