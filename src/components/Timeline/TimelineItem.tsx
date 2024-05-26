import { ExperienceProps } from "../Experience";
import { AnimateChangeInHeight } from "../Utilities/AnimateChangeInHeight";
import { motion } from "framer-motion";

const TimelineItem = ({
  company,
  time,
  role,
  description,
}: ExperienceProps) => {
  return (
    <div className="relative pl-8 sm:pl-32 pt-6 last:pb-6 group md:w-full bg-gray-100">
      {/* Dot - Label */}
      <div className="font-caveat font-medium text-xl text-gray-900 mb-1 sm:mb-0">
        {" "}
        {company}
      </div>
      {/* Ver0tical Line (::before) */}
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-400 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-gray-700 after:border-none after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-2">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-gray-600">
          {time}
        </time>
        <div className="text-xl text-slate-900 font-medium"> {role}</div>
      </div>

      <motion.div
        initial={{ opacity: 0, translateX: "-2%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        viewport={{ once: true }}
        // whileHover={{}}
        className="pt-2 pb-1 bg-gray-100 text-gray-900 border-l-8 transition border-[1px]  hover:tracking-normal px-4 pr-8 rounded-sm  border-transparent whitespace-pre-wrap font-mono font-normal text-md leading-loose relative"
      >
        <AnimateChangeInHeight>{description}</AnimateChangeInHeight>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
