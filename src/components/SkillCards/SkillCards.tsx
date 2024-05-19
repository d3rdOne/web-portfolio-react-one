import SkillCard from "./SkillCard";
import angularImg from '../../assets/skill-icons/angular.svg';
import reactImg from '../../assets/skill-icons/react.svg';
import javascriptImg from '../../assets/skill-icons/javascript.svg';
import htmlImg from '../../assets/skill-icons/html.svg';
import scssImage from '../../assets/skill-icons/sass.svg';
import tailwindImage from '../../assets/skill-icons/tailwindcss.svg';
import npmImage from '../../assets/skill-icons/npm.svg'


const SkillCards = () => {
  const skills = [
    { name: 'Angular', imageUrl: angularImg, link:'#', level: 80 , maxLevel: 100},
    { name: 'React', imageUrl:reactImg, link: '#' , level: 50 , maxLevel: 100},
    { name: 'JavaScript', imageUrl: javascriptImg, link: '#', level: 80 , maxLevel: 100},
    { name: 'HTML', imageUrl: htmlImg, link: '#', level: 80 , maxLevel: 100},
    { name: 'Scss', imageUrl: scssImage, link: '#', level: 80 , maxLevel: 100},
    { name: 'tailwind', imageUrl: tailwindImage, link: '#', level: 69 , maxLevel: 100},
    { name: 'ngxs', imageUrl: '', link: '#', level: 80 , maxLevel: 100},
    { name: 'npm', imageUrl: npmImage, link: '#', level: 80 , maxLevel: 100}
  ];

  return (
    <div className="px-4 content-container sm:flex sm:flex-wrap gap-12 sm:gap-4 mt-4 pb-8 overflow-x-auto overflow-y-auto sm:overflow-hidden max-h-96 sm:max-h-full relative ">
      {skills.sort((a, b) => b.level - a.level).map((skill) => (
       <SkillCard {...skill}/>
      ))}
    </div>
  )
}

export default SkillCards