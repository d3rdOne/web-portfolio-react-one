import { ExperienceProps } from "../Experience"
import TimelineItem from "./TimelineItem"


const Timeline = ({experiences}: {experiences: ExperienceProps[]}) => {


  return (
    <div className="">

        {experiences.map((experience) => (
          <TimelineItem {...experience}/>
        ))}

    </div>
  )
}

export default Timeline