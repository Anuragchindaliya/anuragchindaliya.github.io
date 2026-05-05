import { motion } from "framer-motion";
import { Briefcase, Mail, MessageSquare, Send } from "lucide-react";

export const ContactSection = () => {
  const email = "anuragwebpoint@gmail.com";

  const options = [
    {
      title: "Project Inquiry",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Have a freelance project or contract work? Let's discuss requirements and timelines.",
      subject: "Project Inquiry: [Your Name/Company]",
      body: "Hi Anurag,%0D%0A%0D%0AI have a project I'd like to discuss with you. Here are the brief details:%0D%0A%0D%0A- Project scope:%0D%0A- Estimated timeline:%0D%0A- Budget range:%0D%0A%0D%0ALooking forward to connecting!%0D%0A%0D%0ABest,",
      color: "hover:bg-blue-500/10 hover:border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      title: "Full-time Opportunity",
      icon: <Send className="w-6 h-6" />,
      description: "Looking to add a senior frontend engineer to your team? I'm open to discussing full-time roles.",
      subject: "Full-time Role Opportunity at [Company Name]",
      body: "Hi Anurag,%0D%0A%0D%0AWe are looking for a skilled developer to join our team and your profile caught our eye. We are hiring for:%0D%0A%0D%0A- Role:%0D%0A- Location/Remote:%0D%0A- Link to JD:%0D%0A%0D%0AWhen would you be available for a quick chat?%0D%0A%0D%0AThanks,",
      color: "hover:bg-emerald-500/10 hover:border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      title: "General Inquiry",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Just want to say hi, ask a question, or connect? My inbox is always open.",
      subject: "Hello Anurag!",
      body: "Hi Anurag,%0D%0A%0D%0A",
      color: "hover:bg-purple-500/10 hover:border-purple-500/30",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 border-white/5 ">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            What's Next?
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <motion.a
              href={`mailto:${email}?subject=${option.subject}&body=${option.body}`}
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ${option.color} cursor-pointer`}
            >
              <div className={`p-4 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300 ${option.iconColor}`}>
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">
                {option.description}
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                Send Email
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
