import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GitCommitHorizontal, Github } from "lucide-react";
import { enterTransition, MOTION } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────
 * PROJECTS STORYBOARD
 *
 *    0ms   section background and links remain available
 *   80ms   section heading settles in
 *  220ms   project cards cascade in (50ms each)
 *  470ms   all work is visible and idle
 * ───────────────────────────────────────────────────────── */
const TIMING = { heading: 80, projects: 220 } as const;
const HEADING = { transform: "translateY(14px)" } as const;
const CARDS = { stagger: MOTION.stagger, transform: "translateY(22px)" } as const;

const projects = [
  {
    title: "QubicPerp",
    eyebrow: "DeFi · AI · Smart contracts",
    description: "A zero-gas DeFi super app on Qubic that brings swaps, perpetual futures, AI-powered prediction markets, lending and staking into one product.",
    stack: ["React", "TypeScript", "C++", "Gemini AI", "Qubic"],
    commits: 187,
    githubUrl: "https://github.com/codeaj001/QubicPerp",
    liveUrl: "https://qubicperp.vercel.app",
    image: "/projects/qubicperp.webp",
  },
  {
    title: "StellarSwap",
    eyebrow: "Solana · Fiat exchange",
    description: "A confidence-first crypto exchange experience for converting Solana assets to Nigerian naira instantly, securely and seamlessly.",
    stack: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Solana"],
    commits: null,
    githubUrl: "https://github.com/codeaj001",
    liveUrl: "https://stellarswap.vercel.app",
    image: "/projects/stellarswap.png",
  },
  {
    title: "UniVend",
    eyebrow: "Full-stack product",
    description: "A multi-page campus marketplace with authentication, KYC, product listings, discovery, profiles and direct buyer–seller conversations.",
    stack: ["JavaScript", "HTML", "CSS", "Auth", "Realtime chat"],
    commits: 45,
    githubUrl: "https://github.com/codeaj001/univend",
    liveUrl: "https://univend.vercel.app",
    image: "/projects/univend.webp",
  },
  {
    title: "VEIL",
    eyebrow: "Privacy · Product design",
    description: "A privacy-first prediction market prototype with more than 18 product routes, portfolio analytics, private positions and zero-knowledge proof flows.",
    stack: ["React 19", "Vite", "Tailwind", "Recharts", "Midnight"],
    commits: 10,
    githubUrl: "https://github.com/codeaj001/veil",
    liveUrl: null,
    image: "/projects/veil.webp",
  },
  {
    title: "PolyPaid",
    eyebrow: "Cross-chain payments",
    description: "Shareable payment links that accept tokens from multiple chains and settle merchants in USDC on Polygon through intent-based payments.",
    stack: ["React", "Vite", "Polygon", "USDC", "Trails intents"],
    commits: 9,
    githubUrl: "https://github.com/codeaj001/polypaid",
    liveUrl: null,
    image: "/projects/polypaid.webp",
  },
  {
    title: "SourceGrab",
    eyebrow: "Rust · Async systems",
    description: "A privacy-conscious Telegram media bot with concurrent processing, format selection and automatic temporary-file cleanup.",
    stack: ["Rust", "Tokio", "Teloxide", "yt-dlp", "Docker"],
    commits: 7,
    githubUrl: "https://github.com/codeaj001/sourcegrab",
    liveUrl: null,
    image: "/projects/sourcegrab.webp",
  },
  {
    title: "NACOS CTF",
    eyebrow: "Cybersecurity experience",
    description: "An immersive competition site with a cyber-themed hero, challenge phases, event details, animated FAQ and Matrix-inspired visual effects.",
    stack: ["JavaScript", "HTML", "Tailwind", "CSS animation"],
    commits: 4,
    githubUrl: "https://github.com/codeaj001/nacosctf",
    liveUrl: "https://nacosctf.vercel.app",
    image: "/projects/nacosctf.webp",
  },
];

const Projects = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [stage, setStage] = useState(reduceMotion ? 2 : 0);

  useEffect(() => {
    if (reduceMotion) { setStage(2); return; }
    if (!inView) return;
    const timers = [
      window.setTimeout(() => setStage(1), TIMING.heading),
      window.setTimeout(() => setStage(2), TIMING.projects),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [inView, reduceMotion]);

  return (
    <section ref={sectionRef} id="projects" className="section section-soft">
      <div className="content">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, transform: HEADING.transform }}
          animate={{ opacity: stage >= 1 ? 1 : 0, transform: stage >= 1 || reduceMotion ? "translateY(0px)" : HEADING.transform }}
          transition={reduceMotion ? { duration: 0 } : enterTransition}
        >
          <p className="eyebrow">Selected work</p>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <h2 className="section-title min-w-0 max-w-3xl">The work behind the commits.</h2>
            <p className="max-w-sm text-lg leading-7 text-[#6e6e73]">Original projects selected for technical depth, product thinking and relevance to where I’m going next.</p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`card card-lift ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}
              initial={reduceMotion ? false : { opacity: 0, transform: CARDS.transform }}
              animate={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 || reduceMotion ? "translateY(0px)" : CARDS.transform }}
              transition={reduceMotion ? { duration: 0 } : { ...enterTransition, delay: index * CARDS.stagger }}
            >
              <div className={`project-visual ${index === 0 ? "lg:order-2" : ""} aspect-[16/10] overflow-hidden bg-[#e8e8ed]`}>
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              <div className="flex flex-col p-7 md:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-medium text-[#0071e3]">0{index + 1} · {project.eyebrow}</p>
                  {project.commits !== null && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#6e6e73]">
                      <GitCommitHorizontal size={13} /> {project.commits} commits
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-.045em] md:text-4xl">{project.title}</h3>
                <p className="muted mt-4 max-w-xl text-lg leading-7">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map(item => <span key={item} className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-medium">{item}</span>)}
                </div>
                <div className="mt-8 flex items-center gap-3">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-primary">Live project <ArrowUpRight className="button-arrow" size={16}/></a>
                  ) : (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-primary"><Github size={16}/> View repository</a>
                  )}
                  {project.liveUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="icon-button" aria-label={`${project.title} on GitHub`}><Github size={18}/></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/codeaj001?tab=repositories" target="_blank" rel="noreferrer" className="button-secondary">Explore all repositories <ArrowUpRight className="button-arrow" size={16}/></a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
