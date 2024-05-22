/* eslint-disable @typescript-eslint/no-explicit-any */
import Timeline from "./Timeline/Timeline"
import { ExperienceData } from "../data/Data"
import { useEffect, useState } from "react"

export interface ExperienceProps {
  company?: string,
  role: string,
  time: string,
  description: string
}

const Experience = () => {
  const [experiences, setExperiences]  = useState<any[]>([])

  useEffect(() => {
    setExperiences(ExperienceData)
  }, [])

  return (
    <section id="experience" className="min-h-screen sm:min-h-[40rem] bg-white flex flex-col items-center px-8" >
      <div className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl pt-8">
        <h2 className="text-2xl font-semibold tracking-wide">Professional Experience</h2>
        <div>
          <Timeline experiences={experiences}/>
        </div>
      </div>


    </section>
  )
}

export default Experience