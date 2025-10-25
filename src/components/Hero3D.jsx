import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Light gradient overlays for depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Modern Fintech Suite
        </span>
        <h1 className="font-heading mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Manage financial data with clarity and control
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          A sleek, glass-morphic dashboard to create, review, update, and delete records with confidence.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#records"
            className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
