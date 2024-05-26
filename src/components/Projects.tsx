/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ProjectsData } from "../data/Data";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    setProjects([...ProjectsData, ...ProjectsData, ...ProjectsData]);
  }, []);

  const projectsAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        // when: 'afterChildren'
      },
    },
    shown: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        delay: 0,
      },
    },
  };

  const projectAnimation = {
    hidden: {
      x: `var(--x-from, 0px)`,
      y: `var(--y-from, 0)`,
      opacity: 0,
    },
    shown: {
      x: `var(--x-to, 0px)`,
      y: `var(--y-to, 0)`,
      opacity: 1,
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen sm:min-h-[40rem] bg-gray-100 flex flex-col items-center px-8"
    >
      <div className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl pt-8">
        <h2 className="text-2xl font-semibold tracking-wide">Projects</h2>

        <motion.section
          variants={projectsAnimation}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true }}
          className="py-8 flex flex-wrap gap-4 justify-center md:justify-start
          max-md:[--x-from:-50px] md:[--y-from:50%]
          max-md:[--x-to: 0] md:[--y-to: 0]
          max-md:[--x-hover:1%] md:[--y-hover:-2%]"
        >
          {projects?.length > 0 &&
            projects.map((project, index) => (
              <motion.div
                variants={projectAnimation}
                whileHover={{
                  translateY: "var(--y-hover,0)",
                  x: "var(--x-hover,0)",
                  transition: { when: "afterChildren" },
                }}
                className="min-h-80 max-w-ful sm:max-w-80 bg-white flex-col relative border-gray-900 border-[1px] cursor-pointer"
                key={index}
              >
                <div className="w-full h-3/5 relative0 overflow-hidden">
                  <img
                    src={project.img}
                    alt=""
                    className="h-full w-full object-scale-down hover:scale-105 bg-white "
                  />
                </div>
                <div className="py-2 px-4">
                  <h3 className="text-md">{project.title}</h3>
                  <p className="line-clamp-4 text-sm leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae maxime ipsa aliquid, quas error quis qui libero
                    accusantium reprehenderit eaque culpa quod facilis assumenda
                    nesciunt ipsam et aut iure porro!
                  </p>
                </div>
              </motion.div>
            ))}
          {projects?.length === 0 && (
            <>
              {/* <h3 className="text-lg">Unfortunately, I have no works to show <span className="text-red-500 font-bold -tracking-wide">YET</span> due to the confidential nature of my previous projects...</h3> */}
              <h3 className="text-lg">Available soon...</h3>
            </>
          )}
        </motion.section>
      </div>
    </section>
  );
};

export default Projects;
