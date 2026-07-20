import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, ArrowRight, GraduationCap, Briefcase, Download, School } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Bohra | Mechanical Design Engineer" },
      { name: "description", content: "Mechanical Design Engineer with 1+ years of experience in CATIA, SolidWorks, and AutoCAD. Aerospace & automotive precision engineering." },
    ],
  }),
  component: HomePage,
});

const cadSkills = [
  { name: "CATIA V5", level: "Proficient" },
  { name: "SolidWorks", level: "Proficient" },
  { name: "AutoCAD", level: "Expert" },
];

const otherSkills = [
  "FEA / Structural Analysis",
  "GD&T (ASME Y14.5)",
  "DFM / DFA",
  "Tolerance Stack-Up",
  "CNC Manufacturing",
  "3D Printing (FDM / SLA)",
];

const education = [
  {
    school: "Uttarakhand Technical University",
    degree: "B.Tech Mechanical Engineering",
    period: "2020 — 2024",
    detail: "Solid Mechanics & Computational Design. GPA 6.8/10",
  },
  {
    school: "Public School - CBSE",
    degree: "12ᵗʰ Grade",
    period: "2019 — 2020",
    detail: "Major subjects - Mathematics, Physics & Chemistry",
  },
];

// const experience = [
//   {
//     company: "Aeronova Systems",
//     role: "Senior Mechanical Design Engineer",
//     period: "2022 — Present",
//     detail: "Lead designer for satellite deployment mechanisms. Owned CAD → FEA → DFM pipeline for 3 flight programs.",
//   },
//   {
//     company: "Volt Motors",
//     role: "Mechanical Design Engineer",
//     period: "2019 — 2022",
//     detail: "Designed EV battery enclosures and structural brackets. Reduced part count 28% via consolidation.",
//   },
//   {
//     company: "Boeing (Intern)",
//     role: "Structural Design Intern",
//     period: "Summer 2018",
//     detail: "Composite wing rib layup study. Contributed CAD updates to 787 aft fuselage.",
//   },
// ];

const experience = [
  {
    company: "Ashok Leyland",
    role: "Graduate Apprentice Trainee (Engine Shop)",
    period: "Mar 2025 — Mar 2026",
    detail:
      "Supported diesel engine assembly, inspection, and quality assurance. Gained hands-on experience in manufacturing processes, lean practices, preventive maintenance, and production documentation.",
  },
  {
    company: "Internshala e-Education",
    role: "SolidWorks Design Training",
    period: "Mar 2023 — Aug 2023",
    detail:
      "Designed 3D mechanical parts, assemblies, and engineering drawings using SolidWorks. Performed assembly validation, interference checks, and design improvements with a focus on manufacturability.",
  },
  {
    company: "Skill-Lync",
    role: "CATIA V5 CAD Training",
    period: "Sep 2024 — Feb 2025",
    detail:
      "Created 3D CAD models, assemblies, and manufacturing drawings in CATIA V5. Supported component fitment, design reviews, and prototype development for production-ready designs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function HomePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 sm:px-10 py-16 lg:py-24">
      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/20 px-3 py-1.5 text-xs font-medium text-gold"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance"
          >
            Designing the <span className="text-gold">mechanics</span> behind tomorrow's machines.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Hi, I'm <span className="text-foreground font-medium">Aman Bohra</span> — a
            Mechanical Engineering graduate with hands-on experience in CATIA V5, SolidWorks, and engine manufacturing. 
            Passionate about designing practical, manufacturable, and efficient mechanical solutions.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:border-gold/40 hover:text-gold transition-colors"
            >
              Get in touch
            </Link>
            <a
              href="/AmanBohra_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-gold transition-all duration-300 hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Skills card */}
        <motion.aside
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <h2 className="text-xs font-display font-bold uppercase tracking-widest text-gold-muted">
            Core CAD Tools
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {cadSkills.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-background/50 px-3 py-1.5 text-xs font-medium text-gold-light"
              >
                {s.name}
                <span className="text-gold-muted">·</span>
                <span className="text-muted-foreground">{s.level}</span>
              </span>
            ))}
          </div>
          <h2 className="mt-8 text-xs font-display font-bold uppercase tracking-widest text-gold-muted">
            Technical Skills
          </h2>
          <ul className="mt-3 grid grid-cols-1 gap-1.5">
            {otherSkills.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold-muted" /> Hyderabad, India
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/aman-bohra-a5b703247" aria-label="LinkedIn" className="hover:text-gold transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com/amanbohra03-a11y" aria-label="GitHub" className="hover:text-gold transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="mailto:amanbohra03@email.com" aria-label="Email" className="hover:text-gold transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.aside>
      </section>

      {/* EXPERIENCE + EDUCATION */}
      <section className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <TimelineBlock icon={<Briefcase className="h-4 w-4" />} title="Experience / Training" items={experience} />
        <TimelineBlock icon={<GraduationCap className="h-4 w-4" />} title="Education" items={education} kind="edu" />
      </section>
    </div>
  );
}

type TimelineItem = {
  company?: string;
  school?: string;
  role?: string;
  degree?: string;
  period: string;
  detail: string;
};

function TimelineBlock({
  icon,
  title,
  items,
  kind = "exp",
}: {
  icon: React.ReactNode;
  title: string;
  items: TimelineItem[];
  kind?: "exp" | "edu";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 border border-gold/20 text-gold">
          {icon}
        </span>
        <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      </div>

      <ol className="mt-8 relative border-l border-border pl-6 space-y-8">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display font-semibold text-foreground">
                {kind === "exp" ? item.role : item.degree}
              </h3>
              <span className="text-xs text-gold-muted font-medium">{item.period}</span>
            </div>
            <p className="text-sm text-gold mt-0.5">
              {kind === "exp" ? item.company : item.school}
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
