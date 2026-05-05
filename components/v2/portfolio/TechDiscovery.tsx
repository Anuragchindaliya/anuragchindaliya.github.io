import { motion } from "framer-motion";
import { Terminal, Database, Code, Cpu } from "lucide-react";

const techList = [
  {
    name: "Java (Spring Boot)",
    status: "Learning",
    icon: <Code className="w-6 h-6" />,
    description: "Deep diving into object-oriented principles and enterprise backend architecture.",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    text: "text-orange-400"
  },
  {
    name: "System Design",
    status: "Experimenting",
    icon: <Cpu className="w-6 h-6" />,
    description: "Studying scalable architectures, load balancing, and microservices patterns.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400"
  },
  {
    name: "WebSockets & WebRTC",
    status: "Active Use",
    icon: <Terminal className="w-6 h-6" />,
    description: "Implementing real-time bi-directional communication for games and chat applications.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400"
  },
  {
    name: "Advanced SQL",
    status: "Practicing",
    icon: <Database className="w-6 h-6" />,
    description: "Optimizing queries, understanding indexing, and database normalization.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400"
  }
];

export const TechDiscovery = () => {
  return (
    <section id="lab" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 mb-4">
              Learning Lab
            </h2>
            <p className="text-lg text-white/60 max-w-xl">
              Technology evolves rapidly. Here is what I am currently exploring and experimenting with behind the scenes.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/40 font-mono bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Constantly Updating
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techList.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 bg-white/5 border ${tech.border} backdrop-blur-sm hover:bg-white/10 transition-all group overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tech.color} blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${tech.text}`}>
                    {tech.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 ${tech.text}`}>
                    {tech.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
