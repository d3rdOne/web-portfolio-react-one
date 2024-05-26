import { useContext } from "react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";
import { SkillCardContext } from "./SkillCards";

interface SkillCardProps {
  name: string;
  imageUrl: string;
  link: string;
  level: number;
  maxLevel: number;
  index: number;
}

const SkillCard = ({
  imageUrl,
  name,
  link,
  level,
  maxLevel,
}: SkillCardProps) => {
  const skillCard = useContext(SkillCardContext);

  return (
    <motion.a
      href={link}
      variants={skillCard}
      whileHover={{
        transform: "translateY(-5%)",
        transition: { delay: 0, when: "afterChildren" },
      }}
      className="flex justify-start items-center flex-col p-1 mt-2 hover:scale-105 transition sm:border-2
      sm:border-gray-700 sm:bg-white min-w-20  sm:min-w-32 sm:max-w-32 h-24 sm:h-32 sm:shadow-xs sm:p-2 rounded-lg"
    >
      <div className="max-h-20 h-full flex-shrink-1 flex justify-start items-center sm:p-2">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-10 sm:min-w-12 sm:max-w-12 object-scale-down"
        />
      </div>
      <div className="flex-grow-1 w-full flex flex-col sm:flex-row justify-center sm:pl-0 h-2 sm:h-4">
        <p className="text-md tracking-widest capitalize hidden ">{name}</p>
        <SkillBar maxLevel={maxLevel} level={level} hidden={true} />
      </div>
      <div className="name text-center">
        <p className="tracking-wider text-md capitalize ">{name}</p>
      </div>
    </motion.a>
  );
};

export default SkillCard;
