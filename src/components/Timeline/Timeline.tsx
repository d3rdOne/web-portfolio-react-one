import { ExperienceProps } from "../Experience"
import TimelineItem from "./TimelineItem"


const Timeline = ({experiences}: {experiences: ExperienceProps[]}) => {


  return (
    <div className="">

        {experiences.map((experience, index) => (
          <TimelineItem {...experience} key={index}/>
        ))}

    </div>
  )
}

export default Timeline