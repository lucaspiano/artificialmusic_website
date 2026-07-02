import React from "react";
import { useI18n } from "../i18n";

function Products() {
  const { t } = useI18n();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-purple-400 mb-4">AI music platform</p>
          <h1 className="text-5xl font-bold text-white mb-6">Sonifya</h1>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-8">
            Sonifya is an AI-driven music creation platform for musicians, therapists and creators. It blends adaptive composition, mood-aware audio design and safe interaction models to make expressive music tools more accessible.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:bg-purple-400 transition">
              Contact us
            </a>
            <a href="/research" className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-gray-900 px-6 py-3 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition">
              Research background
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-lg shadow-purple-950/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Sonifya General</h2>
            <p className="text-gray-300 mb-4">For musicians and music creators who need fast, expressive AI-assisted composition.</p>
            <ul className="space-y-2 text-gray-400 list-disc list-inside">
              <li>Compose with AI</li>
              <li>Export MIDI/WAV</li>
              <li>Creative DNA profiles</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-lg shadow-purple-950/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Sonifya Focus</h2>
            <p className="text-gray-300 mb-4">For neurodivergent users and clinicians seeking mood-based, safe audio experiences.</p>
            <ul className="space-y-2 text-gray-400 list-disc list-inside">
              <li>Mood-based music generation</li>
              <li>Clinical dashboard</li>
              <li>Safe audio design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-900 p-10 shadow-xl shadow-purple-950/20">
        <h2 className="text-3xl font-semibold text-purple-300 mb-6">Technology stack</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">Machine learning</p>
            <p className="text-gray-300">Python, PyTorch, transformers and generative audio models.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">Mobile & backend</p>
            <p className="text-gray-300">Kotlin, FastAPI, PostgreSQL, cloud deployment and audio pipelines.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">Creative workflow</p>
            <p className="text-gray-300">Symbolic music generation, MIDI export, and adaptive composition control.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">Experience</p>
            <p className="text-gray-300">Responsive UI, accessible controls, and session-based audio states.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
