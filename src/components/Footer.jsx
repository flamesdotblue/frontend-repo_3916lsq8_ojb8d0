import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} FinSuite. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
