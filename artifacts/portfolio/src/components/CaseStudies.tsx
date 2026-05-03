import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, X, Eye, EyeOff, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const STORAGE_KEY = "jjh_cs_unlocked";
const PASSWORD = "bauhaus1919";

const caseStudies = [
  {
    id: 1,
    label: "Project A",
    category: "Brand Identity System",
    description:
      "A comprehensive visual identity built for a global media company — from brand strategy through to full design system deployment across digital and print.",
    year: "2023",
    href: "/case-study/project-a",
  },
  {
    id: 2,
    label: "Project B",
    category: "Campaign Direction",
    description:
      "Integrated campaign spanning OOH, digital, and motion — directed from concept through delivery for a category-defining consumer brand launch.",
    year: "2022",
    href: "/case-study/project-b",
  },
];

export default function CaseStudies() {
  const [unlocked, setUnlocked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setPassword("");
      setError("");
      setShowPassword(false);
    }
  }, [modalOpen]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setModalOpen(false);
    } else {
      setError("Incorrect password.");
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setPassword("");
    }
  }

  return (
    <>
      <section className="py-24 md:py-32 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-playfair text-3xl md:text-5xl font-bold tracking-tight mb-4 text-left">
                II. Confidential Work
              </h2>
              <p className="text-white/50 max-w-xl text-lg text-left">
                Deep dives into brand strategy, campaign direction, and unreleased visual systems.
              </p>
            </motion.div>

            {!unlocked && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all text-xs uppercase tracking-[0.15em] font-medium self-start"
              >
                Unlock Access
              </motion.button>
            )}

            {unlocked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/40 self-start"
              >
                <Unlock className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Access granted</span>
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[16/9] bg-[#111] overflow-hidden flex items-center justify-center border border-white/5 cursor-pointer"
                onClick={() => { if (!unlocked) setModalOpen(true); }}
                style={{ cursor: unlocked ? "default" : "pointer" }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

                <AnimatePresence mode="wait">
                  {!unlocked ? (
                    <motion.div
                      key="locked"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10 flex flex-col items-center text-center p-8 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 transform group-hover:scale-105 transition-transform duration-700"
                    >
                      <Lock className="w-5 h-5 text-white/40 mb-5" strokeWidth={1.5} />
                      <h3 className="font-playfair text-2xl font-bold mb-2">{cs.label}</h3>
                      <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-5">{cs.category}</p>
                      <span className="text-[10px] uppercase tracking-[0.3em] border-b border-white/20 pb-1 text-white/30">
                        Password protected
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unlocked"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 w-full h-full"
                    >
                      <Link
                        href={cs.href}
                        className="w-full h-full flex flex-col justify-end p-8 block group/link"
                      >
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-2">
                              {cs.category} · {cs.year}
                            </p>
                            <h3 className="font-playfair text-2xl font-bold mb-3 group-hover/link:text-white/80 transition-colors">{cs.label}</h3>
                            <p className="text-sm text-white/60 leading-relaxed max-w-sm">{cs.description}</p>
                          </div>
                          <div className="shrink-0 mb-1 w-8 h-8 border border-white/20 flex items-center justify-center group-hover/link:border-white/60 group-hover/link:bg-white/5 transition-all">
                            <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/link:text-white transition-colors" strokeWidth={1.5} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed z-[90] inset-0 flex items-center justify-center px-6 pointer-events-none"
            >
              <motion.div
                animate={shaking ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
                transition={{ duration: 0.45 }}
                className="pointer-events-auto w-full max-w-md bg-[#111] border border-white/10 p-10 relative"
              >
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors focus:outline-none"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                <Lock className="w-5 h-5 text-white/30 mb-6" strokeWidth={1.5} />
                <h2 className="font-playfair text-2xl font-bold mb-2">Confidential Access</h2>
                <p className="text-white/50 text-sm mb-8 leading-relaxed">
                  Enter the password to unlock all confidential case studies.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setError(""); }}
                      placeholder="Password"
                      className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none transition-colors pr-11"
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors focus:outline-none"
                      tabIndex={-1}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-[12px] text-red-400/80 tracking-wide"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    className="w-full bg-white text-black text-xs uppercase tracking-[0.15em] font-medium py-4 hover:bg-white/90 transition-colors"
                  >
                    Unlock
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
