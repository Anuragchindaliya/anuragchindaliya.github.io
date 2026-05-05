import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export const StickyNav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    // Hide nav on scroll down, show on scroll up
    if (latest > 150 && latest > previous!) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // offset for the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 backdrop-blur-md bg-neutral-950/80 border-b border-white/10 shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold text-white cursor-pointer hover:text-primary transition-colors">
            A<span className="text-primary">.</span>C
          </span>
        </Link>

        <nav className="hidden md:flex flex-row items-center gap-8">
          <button onClick={() => scrollTo('timeline')} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Experience
          </button>
          <button onClick={() => scrollTo('projects')} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Projects
          </button>
          <button onClick={() => scrollTo('lab')} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Learning Lab
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="text-sm font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Nav Button (Simplified) */}
        <div className="md:hidden">
          <button onClick={() => scrollTo('contact')} className="text-sm font-medium px-4 py-2 rounded-full bg-white text-black">
            Hire Me
          </button>
        </div>
      </div>
    </motion.header>
  );
};
