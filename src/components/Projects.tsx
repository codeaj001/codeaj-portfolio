import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { enterTransition, MOTION } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────
 * PROJECTS STORYBOARD
 *
 *    0ms   section background and links remain available
 *   80ms   section heading settles in
 *  220ms   project cards cascade in (50ms each)
 *  320ms   all work is visible and idle
 * ───────────────────────────────────────────────────────── */
const TIMING = { heading: 80, projects: 220 } as const;
const HEADING = { transform: "translateY(14px)" } as const;
const CARDS = { stagger: MOTION.stagger, transform: "translateY(22px)" } as const;

const projects = [
  {
    title: "Campus Connect",
    description: "A focused digital hub that helps students discover communities, coordinate campus life and stay connected.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    liveUrl: "https://campusconnect-pearl-three.vercel.app/",
    githubUrl: "https://github.com/gmdeveloper",
    visual: "campus",
  },
  {
    title: "StellarSwap",
    description: "A clear, confidence-first exchange experience for converting Solana assets to Nigerian naira.",
    stack: ["Solana", "Web3", "TypeScript"],
    liveUrl: "https://github.com/gmdeveloper",
    githubUrl: "https://github.com/gmdeveloper",
    visual: "stellar",
  },
  {
    title: "NexaFlow",
    description: "A calm collaborative workspace for planning projects, shaping workflows and keeping teams in sync.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://github.com/gmdeveloper",
    githubUrl: "https://github.com/gmdeveloper",
    visual: "flow",
  },
];

const ProjectVisual = ({ type, title }: { type: string; title: string }) => {
  if (type === "stellar") return <img src="/uploads/22705fa1-5c8a-45df-a442-520baefecd2f.png" alt={`${title} interface preview`} className="h-full w-full object-cover" />;
  if (type === "campus") return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#dbeafe] via-white to-[#c7d2fe] p-10">
      <div className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-2xl shadow-blue-900/10">
        <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-[#0071e3]" /><div><div className="h-3 w-28 rounded bg-[#1d1d1f]"/><div className="mt-2 h-2 w-20 rounded bg-[#d2d2d7]"/></div></div>
        <div className="mt-8 grid grid-cols-2 gap-3"><div className="h-28 rounded-2xl bg-[#f5f5f7]"/><div className="h-28 rounded-2xl bg-[#e8f2ff]"/></div>
      </div>
    </div>
  );
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#17171b] to-[#3a3a48] p-10">
      <div className="grid w-full max-w-sm grid-cols-[90px_1fr] gap-3 rounded-[28px] bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
        <div className="h-56 rounded-2xl bg-white/10"/><div className="space-y-3"><div className="h-10 rounded-2xl bg-white/15"/><div className="grid grid-cols-2 gap-3"><div className="h-40 rounded-2xl bg-[#2997ff]/70"/><div className="h-40 rounded-2xl bg-white/10"/></div></div>
      </div>
    </div>
  );
};

const Projects = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [stage, setStage] = useState(reduceMotion ? 2 : 0);
  useEffect(() => {
    if (reduceMotion) { setStage(2); return; }
    if (!inView) return;
    const timers = [window.setTimeout(() => setStage(1), TIMING.heading), window.setTimeout(() => setStage(2), TIMING.projects)];
    return () => timers.forEach(window.clearTimeout);
  }, [inView, reduceMotion]);

  return <section ref={sectionRef} id="projects" className="section section-soft">
    <div className="content">
      <motion.div initial={reduceMotion ? false : { opacity: 0, transform: HEADING.transform }}
        animate={{ opacity: stage >= 1 ? 1 : 0, transform: stage >= 1 || reduceMotion ? "translateY(0px)" : HEADING.transform }}
        transition={reduceMotion ? { duration: 0 } : enterTransition}>
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title max-w-3xl">Built to solve something real.</h2>
      </motion.div>
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.title} className={`card card-lift ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}
            initial={reduceMotion ? false : { opacity: 0, transform: CARDS.transform }}
            animate={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 || reduceMotion ? "translateY(0px)" : CARDS.transform }}
            transition={reduceMotion ? { duration: 0 } : { ...enterTransition, delay: index * CARDS.stagger }}>
            <div className={`project-visual ${index === 0 ? "lg:order-2" : ""} aspect-[16/10] overflow-hidden`}><ProjectVisual type={project.visual} title={project.title} /></div>
            <div className="flex flex-col p-7 md:p-9">
              <p className="text-sm font-medium text-[#0071e3]">0{index + 1} · Product design & engineering</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-.045em] md:text-4xl">{project.title}</h3>
              <p className="muted mt-4 max-w-xl text-lg leading-7">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-medium">{item}</span>)}</div>
              <div className="mt-8 flex items-center gap-3">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-primary">View project <ArrowUpRight className="button-arrow" size={16}/></a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="icon-button" aria-label={`${project.title} on GitHub`}><Github size={18}/></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
};

export default Projects;
