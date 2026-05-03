import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, SunMedium } from "lucide-react";

const STORAGE_KEY = "jjh_theme";

type Theme = "dark" | "light";

function getSystemTheme(): Theme {
  if (typeof window === "undefined" || !window.matchMedia) {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <SunMedium className="h-3.5 w-3.5 text-[var(--foreground)] transition-all duration-300" />
        <Moon className="absolute h-3.5 w-3.5 text-[var(--foreground)] transition-all duration-300" />
      </span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
      <motion.span layout className="hidden sm:inline text-[9px] text-[var(--muted-foreground)]">
        Mode
      </motion.span>
    </button>
  );
}
