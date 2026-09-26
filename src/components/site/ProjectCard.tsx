import { ArrowRight, Construction } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/site";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen?: (project: Project) => void;
}) {
  const ref = useRef<HTMLElement>(null);

  const tilt = (event: MouseEvent<HTMLElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -14;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  };

  const reset = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <article
      ref={ref}
      onMouseMove={tilt}
      onMouseLeave={reset}
      className="project-card"
      onClick={() => {
        if (!project.isUnderConstruction) onOpen?.(project);
      }}
      style={{ transition: "transform 0.15s ease, border-color 0.25s" }}
    >
      {/* Visual Banner */}
      <div className={`project-visual ${project.visual}`}>
        <span className="tag absolute left-5 top-5">{project.category}</span>
        <span className="tag absolute right-5 top-5">{project.year}</span>
        <div className="project-mock">
          <span />
          <span />
          <span />
        </div>

        {/* Under construction overlay */}
        {project.isUnderConstruction && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm rounded-t-xl gap-3">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Construction className="w-10 h-10 text-yellow-400" />
            </motion.div>
            <span className="font-mono text-xs font-bold tracking-widest text-yellow-400 uppercase">
              Under Construction
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="card-title">{project.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          {project.isUnderConstruction ? (
            <span className="font-mono text-xs text-yellow-400 tracking-wider uppercase flex items-center gap-1.5">
              <Construction className="w-3.5 h-3.5" /> In Development
            </span>
          ) : (
            <span className="card-link cursor-pointer">
              View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          )}

          {project.url && !project.isUnderConstruction && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
              onClick={(e) => e.stopPropagation()}
            >
              Live Site ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}