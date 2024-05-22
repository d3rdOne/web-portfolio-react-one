import SkillCards from "./SkillCards/SkillCards"
import { AnimateChangeInHeight } from "./Utilities/AnimateChangeInHeight"

const About = () => {

  return (
    <section className="max-h-full flex flex-col items-center px-8 bg-white text-gray-900" id="about">
      <div className='w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-xl pt-8'>
        <h2 className="text-2xl font-semibold tracking-wide"> About Me </h2>
        <AnimateChangeInHeight className="text-lg">
          <p className="py-8">I am a Software Developer specializing in frontend development with 6 years of experience. I'm passionate about crafting user-friendly and performant web applications. I started my tech career role as a back-end developer,where I honed my problem-solving skills, which I now leverage to continuously improve the user experience through front-end development.</p>

        </AnimateChangeInHeight>

      </div>

      <div className="w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-xl pt-2 pb-4">
        <h2 className="text-2xl font-semibold tracking-wide">Tools</h2>
        <SkillCards/>
      </div>
    </section>
  )
}

export default About