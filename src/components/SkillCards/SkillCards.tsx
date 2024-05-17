import SkillCard from "./SkillCard";
import angularImg from '../../assets/skill-icons/angular.svg';
import reactImg from '../../assets/skill-icons/react.svg';


const SkillCards = () => {
  const skills = [
    { name: 'Angular', imageUrl: angularImg, link:'#' },
    { name: 'React', imageUrl:reactImg, link: '#'},
    { name: 'JavaScript', imageUrl:'', link: '#'},
    { name: 'HTML', imageUrl: '', link: '#'},
    { name: 'Scss', imageUrl: '', link: '#'},
    { name: 'tailwind', imageUrl: '', link: '#'},
    { name: 'ngxs', imageUrl: '', link: '#'}];

  return (
    <div className="content-container flex  xl:flex-wrap  xl:justify-left xl gap-12 mt-8 overflow-x-auto overflow-y-hidden max-h-96 xl:max-h-full">
      {skills.map((skill) => (
       <SkillCard {...skill}/>
      ))}
    </div>
  )
}

export default SkillCards