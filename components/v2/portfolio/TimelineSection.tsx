import { motion } from "framer-motion";

const milestones = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Amantya Technologies / C-DOT",
    date: "2024 - Present",
    project: "Gati Shakti Sanchar",
    achievement: "Architected and led the development of critical frontend modules for large-scale enterprise mapping systems. Solved complex performance bottlenecks in processing large geographical datasets on the client-side.",
    isAcademic: false,
  },
  {
    id: 2,
    title: "Software Developer",
    company: "NielsenIQ",
    date: "2023 - 2024",
    project: "Legacy System Migration",
    achievement: "Successfully migrated monolithic legacy systems to modern React architectures, improving system maintainability and reducing load times by over 40%.",
    isAcademic: false,
  },
  {
    id: 3,
    title: "Bachelor of Computer Applications (BCA)",
    company: "University",
    date: "Graduated",
    project: "Academic Foundation",
    achievement: "Built a strong foundation in computer science principles, data structures, and software engineering methodologies.",
    isAcademic: true,
  },
];

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
        >
          Experience & Education
        </motion.h2>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={milestone.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] md:-left-[57px] top-2 border-4 border-neutral-950 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
              
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-white/70 font-medium">{milestone.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 w-fit h-fit whitespace-nowrap">
                    {milestone.date}
                  </span>
                </div>

                <div className="bg-black/30 p-4 rounded-xl border border-white/5 mt-6">
                  <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">
                    {milestone.isAcademic ? 'Focus Area' : 'Key Project'}
                  </h4>
                  <p className="text-white font-medium mb-4">{milestone.project}</p>
                  
                  <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">
                    {milestone.isAcademic ? 'Key Learning' : 'Key Achievement / Problem Solved'}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {milestone.achievement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
