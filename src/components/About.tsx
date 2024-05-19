import SkillCards from "./SkillCards/SkillCards"

const About = () => {
  return (
    <section className="min-h-screen bg-stone-100 flex flex-col items-center px-8" id="about">
      <div className='w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-lg pt-8'>
        <h2 className="text-2xl font-semibold tracking-wide"> About me </h2>
        <h4 className="text-xl py-8">Software Engineer with 6+ years of experience building and integrating user interfaces with well-designed REST APIs. Possesses a strong understanding of front-end development and back-end development principles.</h4>
      </div>

      <div className="w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-lg pt-2 pb-16">
        <h2 className="text-2xl font-semibold tracking-wide">Skills</h2>
        <SkillCards/>
      </div>
    </section>
  )
}

export default About