import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-600" />
          <span className="font-heading text-lg font-semibold">FinSuite</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#records" className="hover:text-white">Records</a>
          <a href="#" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10">
            Sign in
          </button>
          <button className="rounded-full bg-cyan-500 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow shadow-cyan-500/30 hover:bg-cyan-400">
            Create account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
