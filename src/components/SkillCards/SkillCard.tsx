// import { useState } from "react";
import SkillBar from "./SkillBar";

interface SkillCardProps {
  name: string,
  imageUrl: string,
  link: string,
  level: number,
  maxLevel: number
}

const SkillCard = ({imageUrl ,name, link, level, maxLevel}: SkillCardProps) => {
    // const [showSkillBar, setShowSkillBar] = useState(false)

    return (
  <a href={link} target="_self" className="flex justify-start items-center flex-row sm:flex-col  py-0 pr-8 sm:px-4 s mt-2 hover:scale-105 transition sm:border-2 sm:rounded-lg sm:py-6 sm:border-gray-500 min-w-full sm:min-w-56 sm:shadow-lg">
        <div className="max-h-40 min-h-20 flex-shrink-1 flex justify-start items-center sm:p-2">
          <img src={imageUrl} alt={name} className="h-full min-w-12 max-w-12"/>
        </div>
        <div className='flex-grow-1 w-full flex flex-col sm:flex-row justify-center pl-4 sm:pl-0 h-full sm:h-4' >
          <p className="text-md tracking-widest capitalize sm:hidden ">{name}</p>
          <SkillBar maxLevel={maxLevel} level={level} hidden={true}/>
        </div>
        <div className="name text-center hidden sm:block">
          <p className="tracking-widest capitalize ">{name}</p>
        </div>

    </a>);
  }

export default SkillCard