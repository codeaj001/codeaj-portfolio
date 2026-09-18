import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Code2, ShieldCheck, Sparkles } from "lucide-react";
import { enterTransition, MOTION } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────
 * ABOUT STORYBOARD
 *
 *    0ms   section background and structure are present
 *   80ms   heading and introduction settle in
 *  220ms   principle cards cascade in (50ms each)
 *  320ms   section is fully visible and idle
 * ───────────────────────────────────────────────────────── */
const TIMING = { introduction: 80, principles: 220 } as const;
const INTRO = { transform: "translateY(14px)" } as const;
const CARDS = { stagger: MOTION.stagger, transform: "translateY(18px)" } as const;

const principles = [
  { icon: Code2, title: "Build with clarity", copy: "From interface to infrastructure, every decision should make the product easier to understand and maintain." },
  { icon: ShieldCheck, title: "Secure by design", copy: "Security is part of the architecture—not a checklist added after launch." },
  { icon: Sparkles, title: "Sweat the details", copy: "Typography, motion, performance and edge cases are where a good product becomes a trusted one." },
];

const About = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [stage, setStage] = useState(reduceMotion ? 2 : 0);
  useEffect(() => {
    if (reduceMotion) { setStage(2); return; }
    if (!inView) return;
    const timers = [window.setTimeout(() => setStage(1), TIMING.introduction), window.setTimeout(() => setStage(2), TIMING.principles)];
    return () => timers.forEach(window.clearTimeout);
  }, [inView, reduceMotion]);

  return <section ref={sectionRef} id="about" className="section section-soft">
    <div className="content">
      <motion.div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"
        initial={reduceMotion ? false : { opacity: 0, transform: INTRO.transform }}
        animate={{ opacity: stage >= 1 ? 1 : 0, transform: stage >= 1 || reduceMotion ? "translateY(0px)" : INTRO.transform }}
        transition={reduceMotion ? { duration: 0 } : enterTransition}>
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="section-title">Curious by nature. Precise by practice.</h2>
        </div>
        <div>
          <p className="lede mt-0">I'm Code AJ, a full-stack developer focused on modern web experiences, blockchain products and Web3 security. I enjoy simplifying difficult technical problems without flattening what makes them interesting.</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e6e73]">My work crosses product design and engineering: shaping an idea, building the interface, connecting the system and making sure the result holds up in the real world.</p>
        </div>
      </motion.div>
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {principles.map(({ icon: Icon, title, copy }, index) => (
          <motion.article key={title} className="card p-7 md:p-8"
            initial={reduceMotion ? false : { opacity: 0, transform: CARDS.transform }}
            animate={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 || reduceMotion ? "translateY(0px)" : CARDS.transform }}
            transition={reduceMotion ? { duration: 0 } : { ...enterTransition, delay: index * CARDS.stagger }}>
            <div className="mb-8 grid h-11 w-11 place-items-center rounded-full bg-[#e8f2ff] text-[#0071e3]"><Icon size={21} /></div>
            <h3 className="text-xl font-semibold tracking-[-.03em]">{title}</h3>
            <p className="muted mt-3 leading-7">{copy}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
};

export default About;
