import React from "react";
import { useI18n } from "../i18n";

function Future() {
  const { t } = useI18n();

  const projects = [
    {
      title: "Sonifya",
      description: "AI music creation for musicians, therapists and research collaborators.",
      status: "In development",
      href: "/sonifya",
    },
    {
      title: "Pulse Garden",
      description: "A generative sound ecosystem for emotional regulation and adaptive audio rituals.",
      status: "Research phase",
      href: "/research",
    },
    {
      title: "Audio Care Lab",
      description: "Prototypes for therapeutic listening experiences and intelligent audio systems.",
      status: "Coming soon",
      href: "/contact",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-purple-400 mb-4">Portfolio</p>
        <h1 className="text-5xl font-bold text-white mb-4">{t("projects")}</h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">An evolving portfolio of AI music products, research work, and early-stage experiments.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a key={project.title} href={project.href} className="group block rounded-3xl border border-gray-800 bg-gray-900 p-6 transition hover:border-purple-500/40 hover:bg-gray-900/95">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-purple-300">{project.status}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
            <span className="text-sm font-medium text-purple-300 group-hover:text-purple-200">View details →</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Future;
