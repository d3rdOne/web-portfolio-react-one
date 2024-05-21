
import { useContext } from "react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion"
import { SkillCardContext } from "./SkillCards";


interface SkillCardProps {
  name: string,
  imageUrl: string,
  link: string,
  level: number,
  maxLevel: number,
  index: number,

}


const SkillCard = ({imageUrl ,name, link, level, maxLevel}: SkillCardProps) => {

  const item = useContext(SkillCardContext);
  console.log(item)
  return (
    <motion.a
      href={link}
      variants={item}
      whileHover={{transform: "translateY(-5%)", transition: {delay: 0,when: 'afterChildren'}}}
      className="flex justify-start items-center flex-col p-1 mt-2 hover:scale-105 transition sm:border-[1px] sm:bg-white min-w-20  sm:min-w-32 h-24 sm:h-32 sm:shadow-md sm:p-2">
          <div className="max-h-20 h-full flex-shrink-1 flex justify-start items-center sm:p-2">
            <img src={imageUrl} alt={name} className="h-full w-10 sm:min-w-12 sm:max-w-12 object-scale-down"/>
          </div>
          <div className='flex-grow-1 w-full flex flex-col sm:flex-row justify-center sm:pl-0 h-2 sm:h-4' >
            <p className="text-md tracking-widest capitalize hidden ">{name}</p>
            <SkillBar maxLevel={maxLevel} level={level} hidden={true}/>
          </div>
          <div className="name text-center">
            <p className="tracking-wider text-md capitalize ">{name}</p>
          </div>

    </motion.a>
  );
  }

export default SkillCard