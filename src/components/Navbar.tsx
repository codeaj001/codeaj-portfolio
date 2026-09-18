import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { EASE_OUT, MOTION } from "@/lib/motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/skills" },
  { name: "Work", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

/* ─────────────────────────────────────────────────────────
 * MOBILE MENU STORYBOARD
 *
 *    0ms   menu materializes from its navigation anchor
 *   30ms   links cascade in (40ms each)
 *  190ms   menu is fully open and idle
 *
 * Exit: container and links return along the same path.
 * ───────────────────────────────────────────────────────── */
const MENU = { duration: MOTION.small, stagger: MOTION.stagger, transform: "translateY(-8px) scale(0.97)" } as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", handleKey); };
  }, [isOpen]);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50 border-b border-black/[0.06]">
      <nav className="content flex h-12 items-center justify-between px-5" aria-label="Primary navigation">
        <Link to="/" className="text-[15px] font-semibold tracking-[-.02em]" aria-label="Code AJ, home">
          Code AJ
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.href || (item.href === "/" && location.pathname === "/home");
            return <Link key={item.href} to={item.href} data-active={active} className={`nav-link text-xs ${active ? "font-semibold text-black" : "text-[#424245]"}`}>{item.name}</Link>;
          })}
        </div>
        <Link to="/contact" className="button-primary hidden !min-h-8 !px-4 !py-1 text-xs md:inline-flex">Let's talk</Link>
        <button type="button" className="grid h-9 w-9 place-items-center rounded-full md:hidden" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
      {isOpen && (
        <motion.div className="glass-nav absolute inset-x-0 top-12 origin-top-right border-t border-black/[0.05] px-6 py-6 md:hidden"
          initial={reduceMotion ? false : { opacity: 0, transform: MENU.transform }}
          animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, transform: MENU.transform }}
          transition={reduceMotion ? { duration: 0 } : { duration: MENU.duration, ease: EASE_OUT }}>
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => <motion.div key={item.href}
              initial={reduceMotion ? false : { opacity: 0, transform: "translateY(8px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={reduceMotion ? { duration: 0 } : { duration: MENU.duration, ease: EASE_OUT, delay: index * MENU.stagger }}>
              <Link to={item.href} className="block rounded-xl px-3 py-3 text-2xl font-semibold tracking-[-.03em] hover:bg-black/[0.04]">{item.name}</Link>
            </motion.div>)}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
