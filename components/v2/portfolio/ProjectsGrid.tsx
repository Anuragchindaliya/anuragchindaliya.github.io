import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { Eye, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gati Shakti Sanchar",
    type: "Current Professional Project",
    description: "A centralized Right of Way (RoW) portal to facilitate the roll-out of broadband services across the country. Architected critical frontend components to handle large-scale geographical data rendering efficiently.",
    tags: ["React", "TypeScript", "Maps Integration", "Enterprise Architecture"],
    status: "Live",
    isPrimary: true,
  },
  {
    id: 2,
    title: "Cue King",
    type: "Personal Project",
    description: "A high-performance, 60fps physics-based 8-ball pool game with a premium glassmorphic UI, real-time multiplayer capabilities, and integrated booking systems.",
    tags: ["Next.js", "Canvas 2D Physics", "Framer Motion", "Sockets"],
    status: "In Development",
    isPrimary: false,
  }
];

export const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A selection of enterprise-grade solutions and personal experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`group relative rounded-3xl overflow-hidden glass-etch border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all hover:bg-white/10 ${
                project.isPrimary ? 'md:col-span-2 md:p-12' : ''
              }`}
            >
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-primary via-accent to-transparent" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                      {project.type}
                    </span>
                    <h3 className={`font-bold text-white mb-4 ${project.isPrimary ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                      {project.title}
                    </h3>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className={`text-white/70 leading-relaxed mb-8 ${project.isPrimary ? 'text-lg max-w-3xl' : 'text-base'}`}>
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.status === 'Live' ? (
                      <button className="flex items-center gap-2 text-sm font-medium text-white bg-primary/20 hover:bg-primary/40 px-4 py-2 rounded-lg transition-colors border border-primary/30">
                        <Eye className="w-4 h-4" />
                        View Project
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors border border-white/10">
                        <Code2 className="w-4 h-4" />
                        In Development
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
