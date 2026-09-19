import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { enterTransition, MOTION } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────
 * HERO STORYBOARD
 *
 *    0ms   primary actions are visible and interactive
 *   60ms   eyebrow + headline settle in from below
 *  180ms   supporting copy and portrait settle in together
 *  300ms   social links cascade in (45ms each)
 *  390ms   hero is fully visible and idle
 * ───────────────────────────────────────────────────────── */
const TIMING = { headline: 60, support: 180, socials: 300 } as const;
const SOCIALS = { stagger: MOTION.stagger, transform: "translateY(8px)" } as const;

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState(reduceMotion ? 3 : 0);

  useEffect(() => {
    if (reduceMotion) { setStage(3); return; }
    const timers = [
      window.setTimeout(() => setStage(1), TIMING.headline),
      window.setTimeout(() => setStage(2), TIMING.support),
      window.setTimeout(() => setStage(3), TIMING.socials),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [reduceMotion]);

  const reveal = (visible: boolean, offsetY = 16) => ({
    initial: reduceMotion ? false : { opacity: 0, transform: `translateY(${offsetY}px)` },
    animate: { opacity: visible ? 1 : 0, transform: visible || reduceMotion ? "translateY(0px)" : `translateY(${offsetY}px)` },
    transition: reduceMotion ? { duration: 0 } : enterTransition,
  });

  return <section id="home" className="relative flex min-h-[94vh] items-center overflow-hidden pt-12">
    <div className="hero-orb hero-orb-blue" />
    <div className="hero-orb hero-orb-violet" />
    <div className="content relative grid items-center gap-12 px-6 py-24 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
      <div>
        <motion.div {...reveal(stage >= 1)}>
          <p className="eyebrow">Full-stack developer · Web3 security</p>
          <h1 className="display">I build digital products that feel inevitable.</h1>
        </motion.div>
        <motion.p {...reveal(stage >= 2, 12)} className="lede mt-7 max-w-2xl">Clean interfaces. Resilient systems. Thoughtful security. I turn ambitious ideas into products people understand the first time they use them.</motion.p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="button-primary">See my work <ArrowUpRight className="button-arrow" size={17} /></Link>
          <Link to="/contact" className="button-secondary">Start a conversation</Link>
        </div>
        <div className="mt-10 flex gap-2" aria-label="Social links">
          {[
            { href: "https://github.com/gmdeveloper", label: "GitHub", icon: Github },
            { href: "https://twitter.com", label: "X / Twitter", icon: Twitter },
            { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
          ].map(({ href, label, icon: Icon }, index) => (
            <motion.a key={label} href={href} target="_blank" rel="noreferrer" className="icon-button" aria-label={label}
              initial={reduceMotion ? false : { opacity: 0, transform: SOCIALS.transform }}
              animate={{ opacity: stage >= 3 ? 1 : 0, transform: stage >= 3 || reduceMotion ? "translateY(0px)" : SOCIALS.transform }}
              transition={reduceMotion ? { duration: 0 } : { ...enterTransition, delay: index * SOCIALS.stagger }}>
              <Icon size={19} />
            </motion.a>
          ))}
        </div>
      </div>
      <motion.div {...reveal(stage >= 2, 18)} className="mx-auto w-full max-w-[430px]">
        <div className="material relative overflow-hidden rounded-[42px] p-3">
          <div className="image-wash aspect-[4/5] overflow-hidden rounded-[32px]">
            <img src="/uploads/hero-avatar.webp" alt="Colorful illustrated avatar of Code AJ" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/80 px-5 py-4 backdrop-blur-xl">
            <p className="text-sm font-semibold">Available for select projects</p>
            <p className="mt-1 text-xs text-[#6e6e73]">Building from Lagos, working worldwide.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
};

export default Hero;
