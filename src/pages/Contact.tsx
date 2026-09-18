import { ArrowUpRight, LoaderCircle, Mail, MapPin, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { enterTransition, MOTION } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────
 * CONTACT STORYBOARD
 *
 *    0ms   message form and submit action are interactive
 *   60ms   page heading settles in
 *  180ms   direct contact methods cascade in (70ms each)
 *  250ms   page is fully visible and idle
 * ───────────────────────────────────────────────────────── */
const TIMING = { heading: 60, methods: 180 } as const;
const HEADING = { transform: "translateY(14px)" } as const;
const METHODS = { stagger: MOTION.stagger, transform: "translateY(10px)" } as const;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState(reduceMotion ? 2 : 0);
  const { toast } = useToast();
  useEffect(() => {
    if (reduceMotion) { setStage(2); return; }
    const timers = [window.setTimeout(() => setStage(1), TIMING.heading), window.setTimeout(() => setStage(2), TIMING.methods)];
    return () => timers.forEach(window.clearTimeout);
  }, [reduceMotion]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData(current => ({ ...current, [event.target.name]: event.target.value }));
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); setIsLoading(true);
    try {
      await emailjs.send("default_service", "template_lx1rvjn", { from_name: formData.name, from_email: formData.email, to_email: "codeaj001@gmail.com", message: formData.message }, "RreUhqIChv1-YAfh3");
      toast({ title: "Message sent", description: "Thanks for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Message not sent", description: "Please email me directly and I'll get back to you.", variant: "destructive" });
    } finally { setIsLoading(false); }
  };

  return (
    <main className="section section-soft min-h-screen !pt-32">
      <div className="content">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <motion.div initial={reduceMotion ? false : { opacity: 0, transform: HEADING.transform }}
              animate={{ opacity: stage >= 1 ? 1 : 0, transform: stage >= 1 || reduceMotion ? "translateY(0px)" : HEADING.transform }}
              transition={reduceMotion ? { duration: 0 } : enterTransition}>
              <p className="eyebrow">Contact</p>
              <h1 className="section-title">Let's make something matter.</h1>
              <p className="lede mt-6">Have a product idea, a security challenge, or a project that needs fresh thinking? Tell me about it.</p>
            </motion.div>
            <div className="mt-10 space-y-4">
              {[
                <a key="email" href="mailto:codeaj001@gmail.com" className="contact-method flex items-center gap-4 rounded-2xl bg-white p-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#e8f2ff] text-[#0071e3]"><Mail size={19}/></span><span><span className="block text-xs text-[#6e6e73]">Email</span><span className="font-medium">codeaj001@gmail.com</span></span><ArrowUpRight className="button-arrow ml-auto text-[#86868b]" size={18}/></a>,
                <div key="location" className="flex items-center gap-4 rounded-2xl bg-white p-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#e8f2ff] text-[#0071e3]"><MapPin size={19}/></span><span><span className="block text-xs text-[#6e6e73]">Based in</span><span className="font-medium">Lagos, Nigeria · Remote worldwide</span></span></div>,
              ].map((method, index) => <motion.div key={method.key}
                initial={reduceMotion ? false : { opacity: 0, transform: METHODS.transform }}
                animate={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 || reduceMotion ? "translateY(0px)" : METHODS.transform }}
                transition={reduceMotion ? { duration: 0 } : { ...enterTransition, delay: index * METHODS.stagger }}>{method}</motion.div>)}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="card p-7 md:p-10">
            <h2 className="text-2xl font-semibold tracking-[-.035em]">Tell me about your project</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">Name<input className="field mt-2" name="name" value={formData.name} onChange={handleChange} autoComplete="name" placeholder="Your name" required /></label>
              <label className="text-sm font-medium">Email<input className="field mt-2" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="you@example.com" required /></label>
            </div>
            <label className="mt-5 block text-sm font-medium">Message<textarea className="field mt-2 min-h-40 resize-y" name="message" value={formData.message} onChange={handleChange} placeholder="What are you building?" required /></label>
            <button className="button-primary mt-6" type="submit" disabled={isLoading}>{isLoading ? "Sending…" : "Send message"}{isLoading ? <LoaderCircle className="submit-spinner" size={16}/> : <Send className="button-arrow" size={16}/>}</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
