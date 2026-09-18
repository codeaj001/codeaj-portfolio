import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Blocks, Code2, Database, ShieldCheck } from "lucide-react";
import { enterTransition, MOTION } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────
 * EXPERTISE STORYBOARD
 *
 *    0ms   dark section surface is present
 *   80ms   section heading settles in
 *  210ms   expertise panels cascade in (50ms each)
 *  360ms   all panels are visible and idle
 * ───────────────────────────────────────────────────────── */
const TIMING = { heading: 80, groups: 210 } as const;
const HEADING = { transform: "translateY(14px)" } as const;
const PANELS = { stagger: MOTION.stagger, transform: "translateY(16px)" } as const;

const groups = [
  { icon: Code2, title: "Interfaces", summary: "Fast, accessible product experiences for every screen.", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML & CSS"] },
  { icon: Database, title: "Systems", summary: "Reliable foundations designed to grow with the product.", items: ["PostgreSQL", "APIs", "Docker", "Git", "Cloud workflows"] },
  { icon: Blocks, title: "Blockchain", summary: "Practical onchain products with careful transaction design.", items: ["Solana", "Rust", "Anchor", "Web3 integrations", "Smart contracts"] },
  { icon: ShieldCheck, title: "Security", summary: "Threat-aware engineering from the first architecture sketch.", items: ["Web3 security", "Penetration testing", "Code review", "Attack modeling", "Secure UX"] },
];

const TechStack = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [stage, setStage] = useState(reduceMotion ? 2 : 0);
  useEffect(() => {
    if (reduceMotion) { setStage(2); return; }
    if (!inView) return;
    const timers = [window.setTimeout(() => setStage(1), TIMING.heading), window.setTimeout(() => setStage(2), TIMING.groups)];
    return () => timers.forEach(window.clearTimeout);
  }, [inView, reduceMotion]);

  return <section ref={sectionRef} id="skills" className="section bg-[#101010] text-white">
    <div className="content">
      <motion.div initial={reduceMotion ? false : { opacity: 0, transform: HEADING.transform }}
        animate={{ opacity: stage >= 1 ? 1 : 0, transform: stage >= 1 || reduceMotion ? "translateY(0px)" : HEADING.transform }}
        transition={reduceMotion ? { duration: 0 } : enterTransition}>
        <p className="eyebrow !text-[#2997ff]">Expertise</p>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="section-title max-w-3xl">One craft, from first pixel to final deployment.</h2>
          <p className="max-w-sm text-lg leading-7 text-[#a1a1a6]">A focused toolkit for shipping thoughtful, production-ready products.</p>
        </div>
      </motion.div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] bg-white/10 md:grid-cols-2">
        {groups.map(({ icon: Icon, title, summary, items }, index) => (
          <motion.article key={title} className="expertise-panel bg-[#181818] p-7 md:p-10"
            initial={reduceMotion ? false : { opacity: 0, transform: PANELS.transform }}
            animate={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 || reduceMotion ? "translateY(0px)" : PANELS.transform }}
            transition={reduceMotion ? { duration: 0 } : { ...enterTransition, delay: index * PANELS.stagger }}>
            <Icon className="text-[#2997ff]" size={28} />
            <h3 className="mt-8 text-3xl font-semibold tracking-[-.04em]">{title}</h3>
            <p className="mt-3 max-w-md leading-7 text-[#a1a1a6]">{summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {items.map(item => <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-sm text-[#f5f5f7]">{item}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
};

export default TechStack;
