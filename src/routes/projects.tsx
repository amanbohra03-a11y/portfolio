import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Film } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aman Bohra" },
      { name: "description", content: "Mechanical design projects with demo videos — brackets, gearboxes, and suspension systems." },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  sheet?: string;
  tools: string[];
  tags: string[];
  stats: { label: string; value: string }[];
};

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const projects: Project[] = [
  {
    id: 1,
    title: "Engine Mounting Bracket",
    description:
      "High-strength aluminum engine mounting bracket for an EV powertrain. Vibration analysis and topology optimization reduced weight 34% while maintaining structural integrity under 8G load cases.",
    image: assetPath("images/project-engine-bracket.jpg"),
    video: assetPath("videos/project-engine-bracket.mp4"),
    sheet: assetPath("images/crankshaft.pdf"),
    tools: ["SolidWorks", "ANSYS", "GD&T"],
    tags: ["Automotive", "FEA", "Topology"],
    stats: [
      { label: "Weight reduction", value: "34%" },
      { label: "Load case", value: "8G" },
      { label: "Safety factor", value: "2.1" },
    ],
  },
  {
    id: 2,
    title: "Precision Planetary Gearbox",
    description:
      "Compact 14:1 planetary gearbox for a robotic joint actuator. Full 3D modeling, tolerance stack-up, and manufacturing drawings. Backlash under 3 arc-minutes at 500 Nm peak torque.",
    image: assetPath("images/project-gearbox.jpg"),
    video: assetPath("videos/project-gearbox.mp4"),
    sheet: assetPath("images/Drawing1 bushholder_Sheet_1.pdf"),
    tools: ["CATIA", "KISSsoft", "AutoCAD"],
    tags: ["Robotics", "Gear Design", "Tolerance"],
    stats: [
      { label: "Ratio", value: "14:1" },
      { label: "Peak torque", value: "500 Nm" },
      { label: "Backlash", value: "< 3′" },
    ],
  },
  {
    id: 3,
    title: "Forged Aluminum Suspension Arm",
    description:
      "Redesigned front lower control arm using generative design. Nonlinear FEA with contact analysis achieved 22% weight reduction and 1.82 safety factor under max cornering loads.",
    image: assetPath("images/project-suspension.jpg"),
    video: assetPath("videos/project-suspension.mp4"),
    tools: ["SolidWorks", "ABAQUS", "AutoCAD"],
    tags: ["Automotive", "Generative", "Structural"],
    stats: [
      { label: "Weight reduction", value: "22%" },
      { label: "Safety factor", value: "1.82" },
      { label: "Cycles", value: "1M+" },
    ],
  },
];

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 sm:px-10 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/20 px-3 py-1.5 text-xs font-medium text-gold">
          <Film className="h-3.5 w-3.5" /> Project Gallery
        </div>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
          Selected work with <span className="text-gold">demo videos</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A curated set of mechanical design projects spanning aerospace and
          automotive — each with CAD, analysis, and a short motion demo.
        </p>
      </motion.div>

      <div className="mt-16 space-y-16">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [playing, setPlaying] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl border border-border bg-surface p-6 sm:p-8 hover:border-gold/30 transition-colors"
    >
      {/* Media */}
      <div className={`relative aspect-video overflow-hidden rounded-xl bg-background border border-border ${isEven ? "" : "lg:order-2"}`}>
        {project.sheet ? (
          <>
            <iframe
              src={project.sheet}
              title={`${project.title} engineering sheet`}
              className="h-full w-full bg-white"
              loading="lazy"
            />
            <a
              href={project.sheet}
              target="_blank"
              rel="noreferrer"
              className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] font-medium text-gold border border-gold/20 shadow-sm"
            >
              Open PDF
            </a>
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] font-medium text-gold border border-gold/20">
              <Film className="h-3 w-3" /> Design sheet
            </div>
          </>
        ) : playing ? (
          <video
            src={project.video}
            controls
            autoPlay
            playsInline
            poster={project.image}
            className="h-full w-full object-cover"
            onError={(e) => {
              const t = e.currentTarget;
              t.controls = false;
              t.poster = project.image;
            }}
          />
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Play demo of ${project.title}`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-lg shadow-gold/30 transition-transform hover:scale-110">
                <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
              </span>
            </button>
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] font-medium text-gold border border-gold/20">
              <Film className="h-3 w-3" /> Demo video
            </div>
          </>
        )}
      </div>

      {/* Body */}
      <div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground group-hover:text-gold transition-colors">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {project.stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-background/50 p-3">
              <div className="font-display text-lg font-bold text-gold">{s.value}</div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center rounded-md bg-background px-2.5 py-1 text-xs font-medium text-gold border border-gold/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
