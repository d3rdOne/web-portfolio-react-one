/* eslint-disable @typescript-eslint/no-explicit-any */
import SkillCard from "./SkillCard";
import { SkillsData } from '../../data/Data'
import { createContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';


export const SkillCardContext = createContext({});
const SkillCards = () => {

  const [skillList, setSkillList] = useState<any[]>([{name:'',imageUrl: '', link: '', level: 0, maxLevel: 100  }])

  useEffect(() => {
    setSkillList(SkillsData);
  }, [])

  const   skillCards = {
    notShown: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    },
    shown: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
        delay:0
      }
    }
  }

  const skillCard = {
    notShown : {
      translateY: 5,
      opacity: 0
    },
    shown: {
      translateY: 0,
      opacity: 1
    }
  }

  return (
    <SkillCardContext.Provider value={skillCard}>
       <motion.div
        variants={skillCards}
        whileInView='shown'
        initial='notShown'
        viewport={{once: true}}
        className="px-4 content-container flex flex-wrap justify-center gap-2 sm:gap-4 py-8 overflow-x-auto overflow-y-auto sm:overflow-hidden max-h-full relative ">
          {(skillList?.length > 0) && skillList.map((skill, index) => (
            <SkillCard {...skill} key={index} index={index} />
          ))}
        </motion.div>
    </SkillCardContext.Provider>

  )
}

export default SkillCards