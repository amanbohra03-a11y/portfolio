import { Link } from "@tanstack/react-router";
import { Moon, Sun, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/20 transition-transform group-hover:rotate-90 duration-500">
            <Cog className="h-4 w-4" />
          </span>
          <span className="font-display font-bold tracking-tight text-foreground">
            Aman<span className="text-gold">.</span>Bohra
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-surface/50 p-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-1.5 text-sm font-medium text-muted-foreground rounded-full hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary-foreground bg-gold shadow-sm" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <nav className="flex md:hidden items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-2.5 py-1 text-xs font-medium text-muted-foreground rounded-full hover:text-foreground"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="relative h-9 w-9 flex items-center justify-center rounded-full border border-border bg-surface text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
