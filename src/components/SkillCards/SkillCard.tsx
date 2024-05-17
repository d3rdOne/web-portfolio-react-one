interface SkillCardProps {
  name: string,
  imageUrl: string,
  link: string
}

const SkillCard = ({imageUrl ,name, link}: SkillCardProps) => {
    return (
    <a href={link} target="_self" className="skill card h-full w-96 xl:w-1/4 rounded-3xl p-10 shadow-md bg-stone-300/25 hover:scale-105 transition pb-12">
      <div className="image-container flex justify-center">
        <img src={imageUrl} alt={name} className="h-64 w-64"/>
      </div>
      <div className="name text-center">
        <p className="text-2xl tracking-widest font-semibold capitalize">{name}</p>
      </div>
    </a>);
  }

export default SkillCard