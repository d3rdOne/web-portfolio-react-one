import { useState } from "react"
import { ExperienceProps } from "../Experience"
import { AnimateChangeInHeight } from "../Utilities/AnimateChangeInHeight"

const TimelineItem = ({company, time, role, description}: ExperienceProps) => {
  const [expand, setExpand] = useState(true)


  return (
    <div className="relative pl-8 sm:pl-32 py-6 group sm:w-5/6 bg-gray-200">
          {/* Dot - Label */}
          <div className="font-caveat font-medium text-xl text-gray-900 mb-1 sm:mb-0"> {company}</div>
          {/* Ver0tical Line (::before) */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-stone-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-stone-500 after:border-none after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-2">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-gray-600">{time}</time>
              <div className="text-xl text-slate-900 font-medium"> {role}</div>
          </div>

          <AnimateChangeInHeight className={`text-gray-900 mt-3  bg-white cursor-pointer text-md transition  tracking-normal px-4 py-1 pr-8 rounded-sm  border-2 border-transparent whitespace-pre-wrap font-mono ${expand ? 'line-clamp-none' : ' line-clamp-5'}`} handleClick={() => setExpand(!expand)} >
              <p>{description}</p>
          </AnimateChangeInHeight>

        </div>
  )
}

export default TimelineItem