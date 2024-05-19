import SkillBar from "./SkillBar";

interface SkillCardProps {
  name: string,
  imageUrl: string,
  link: string,
  level: number,
  maxLevel: number
}

const SkillCard = ({imageUrl ,name, link, level, maxLevel}: SkillCardProps) => {
    return (
  <a href={link} target="_self" className="flex justify-start items-center sm:flex-col gap-4 mt-4 py-2 px-4 s sm:mt-2 hover:scale-105 transition sm:border-2 sm:rounded-md sm:py-6 sm:min-w-56 sm:shadow-lg">
        <div className="max-h-40 min-h-20 flex-shrink-1 flex justify-start items-center sm:p-2">
          <img src={imageUrl} alt={name} className="h-full min-w-12 max-w-12"/>
        </div>
        <div className="flex-grow-1 w-full sm:flex sm:justify-center h-4">
          <SkillBar maxLevel={maxLevel} level={level}/>
        </div>
        <div className="name text-center">
          <p className="text-md tracking-widest capitalize hidden sm:block">{name}</p>
        </div>

    </a>);
  }

export default SkillCard