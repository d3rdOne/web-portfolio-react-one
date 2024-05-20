import { useEffect, useState } from "react";

const SkillBar = ({maxLevel, level, hidden = false}: {maxLevel: number, level: number, hidden?: boolean}) => {
  const [fill, setFill] = useState(0);
  let barColor = '';
  if (fill < 30) {
    barColor = 'bg-red-500'
  } else if (fill < 75) {
    barColor = 'bg-blue-500'
  } else if(fill < 100) {
    barColor = 'bg-green-500'
  }

  useEffect(() => {
      setFill(Math.ceil((level / maxLevel) * 100) );
  }, [])

  return (
    <div className={`h-2 sm:h-2 w-full sm:w-2/3 rounded-md bg-gray-200 flex overflow-hidden relative items-center border-[1px] border-black ${hidden && 'hidden'}`}>
      <div className={`h-full text-sm  rounded-r-sn ${barColor} bar-transition`} style={{width: `${fill}%`}}></div>
    </div>
  )
}

export default SkillBar