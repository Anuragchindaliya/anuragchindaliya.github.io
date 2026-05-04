import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";

// @ts-ignore
import nielsenIqLogo from "../assets/logos/NielsenIQ-wordmark-NIQ-Blue-rgb-2048x371-1a9806f.jpg";
// @ts-ignore
import curebayLogo from "../assets/logos/curebay-logo.png";
// @ts-ignore
import ellacorLogo from "../assets/logos/ellacor_by_Cytrellis_logo_full-color_CMYK.png";
// @ts-ignore
import niqLogo from "../assets/logos/niq.webp";
// @ts-ignore
import web2riseLogo from "../assets/logos/web2rise-logo.png";

const clients = [
  { name: "NielsenIQ", logo: nielsenIqLogo, color: "from-blue-500 to-cyan-400", description: "Global measurement and data analytics." },
  { name: "Curebay", logo: curebayLogo, color: "from-emerald-500 to-teal-400", description: "Innovative healthcare solutions for the underserved." },
  { name: "Ellacor", logo: ellacorLogo, color: "from-purple-500 to-pink-400", description: "Advanced aesthetic treatments and medical devices." },
  { name: "NIQ (Alt)", logo: niqLogo, color: "from-blue-600 to-indigo-500", description: "Delivering the Full View™ of consumer behavior." },
  { name: "Web2Rise", logo: web2riseLogo, color: "from-orange-500 to-amber-400", description: "Digital transformation and growth engineering." },
];

export default function ClientsPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <Head>
        <title>Our Clients | Animations Showcase</title>
        <meta name="description" content="Animated clients showcase" />
      </Head>

      <main className="relative min-h-screen bg-neutral-950 text-white selection:bg-pink-500/30">
        {/* Intro Section */}
        <section className="h-screen w-full flex flex-col items-center justify-center relative">
          <BackgroundBeams />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-10 text-center px-4"
          >
            <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
              Companies I've <br /> Worked With
            </h1>
            {/* <p className="text-neutral-400 text-lg md:text-2xl max-w-2xl mx-auto">
              Scroll down to explore some of our amazing clients and partners through an interactive journey.
            </p> */}
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-neutral-500 mb-2 uppercase tracking-widest text-xs font-semibold">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
          </motion.div>
        </section>

        {/* Horizontal Scroll Section */}
        <section ref={targetRef} className="relative h-[500vh] bg-neutral-950 z-20">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8 px-4 md:px-20">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] flex flex-col justify-center relative shrink-0 group"
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    className="w-full h-full relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-md p-10 flex flex-col items-center justify-center transition-all duration-700"
                    whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02, z: 50 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    {/* Gradient Glow Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${client.color} blur-3xl`} />
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${client.color}`} />

                    {/* Logo Image */}
                    <div className="relative w-full max-w-sm h-48 mb-8 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 drop-shadow-2xl z-10">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        layout="fill"
                        objectFit="contain"
                        className="p-4 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="text-center relative z-10 mt-auto">
                      <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        {client.name}
                      </h3>
                      <p className="text-neutral-400 text-base md:text-lg max-w-md mx-auto group-hover:text-neutral-300 transition-colors duration-700">
                        {client.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Outro Section */}
        <section className="h-screen w-full flex items-center justify-center relative z-20 bg-neutral-950">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-center z-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500">
              Ready to be next?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </section>
      </main>
    </>
  );
}
