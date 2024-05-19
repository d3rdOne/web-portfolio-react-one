import Timeline from "./Timeline/Timeline"

export interface ExperienceProps {
  company?: string,
  role: string,
  time: string,
  description: string
}

const Experience = () => {

  const experiences = [
    {
      company: 'Accenture Inc',
      time: '2021 - 2024',
      role: 'Software Engineering Consultant',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nostrum obcaecati perspiciatis, est recusandae quaerat? Repellendus eius sit quo! Corporis omnis accusamus maiores minus, beatae, dolores magni voluptas numquam dicta harum officiis facere molestias incidunt voluptate quos sit dolorem itaque quas voluptates ex voluptatem! Quis voluptatum non, accusantium dolores beatae, ipsum mollitia distinctio possimus nobis repudiandae ducimus, atque deserunt eum. Necessitatibus voluptate voluptatem obcaecati vero architecto illum veniam, aliquid numquam non! Natus libero architecto fuga explicabo ad, dolorem voluptatem ducimus ipsum animi quo corporis blanditiis molestiae pariatur. Dicta tempora, molestiae laboriosam sequi aliquid earum laborum dolor ad commodi numquam, unde libero pariatur fuga eveniet officia quibusdam animi magni aut, natus exercitationem est nostrum? Voluptatem reprehenderit ullam nemo voluptas tempora obcaecati, voluptates, aliquid quae, mollitia velit officiis accusamus laborum! Neque veniam placeat laboriosam praesentium nisi voluptatem aperiam quae laborum, fuga quam repellat totam perferendis. Quos repellendus error in provident mollitia consequatur adipisci ut facilis facere minus molestias totam porro odit, ipsum exercitationem quibusdam earum ab excepturi nam sint assumenda."
    },
    {
      company: '',
      time: '2019 - 2021',
      role: 'Senior Software Engineer',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora, eaque at perspiciatis non quae quos repellat molestias magnam? Modi omnis amet dolore error. Autem fugiat beatae ex aliquid doloremque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat et amet, tempora, doloribus minus molestiae facilis tempore cum laudantium voluptate quisquam neque pariatur sit rem aliquid ex est rerum."
    },
    {
      company: '',
      time: '2016 - 2019',
      role: 'Software Engineer',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora, eaque at perspiciatis non quae quos repellat molestias magnam? Modi omnis amet dolore error. Autem fugiat beatae ex aliquid doloremque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat et amet, tempora, doloribus minus molestiae facilis tempore cum laudantium voluptate quisquam neque pariatur sit rem aliquid ex est rerum."
    }
  ]

  return (
    <section id="experience" className="min-h-screen sm:min-h-[40rem] bg-stone-200 flex flex-col items-center px-8" >
      <div className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg pt-8">
        <h2 className="text-2xl font-semibold tracking-wide">Experience</h2>
        <div>
          <Timeline experiences={experiences}/>
        </div>
      </div>


    </section>
  )
}

export default Experience