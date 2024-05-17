import SkillCards from "./SkillCards/SkillCards"

const About = () => {
  return (
    <section className="min-h-screen bg-stone-200 flex flex-col items-center px-8" id="about">
      <div className='content-container py-16'>
        <h2 className="text-4xl font-semibold tracking-wide"> About me </h2>
        <h4 className="text-3xl py-8">Software Engineer with 6+ years of experience building and integrating user interfaces with well-designed REST APIs. Possesses a strong understanding of front-end development and back-end development principles.</h4>
      </div>

      <div className="content-container pt-8 pb-16">
        <h2 className="text-4xl font-semibold tracking-wide">Skills</h2>
        <SkillCards/>
      </div>
    </section>
  )
}

export default About