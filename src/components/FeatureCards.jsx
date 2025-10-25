import React from 'react';
import { CreditCard, Shield, BarChart3, Users } from 'lucide-react';

const features = [
  {
    title: 'Secure by Design',
    desc: 'Built with best-in-class security to keep your financial data safe.',
    icon: Shield,
  },
  {
    title: 'Accounts & Ledgers',
    desc: 'Create and manage accounts, balances, and categories effortlessly.',
    icon: CreditCard,
  },
  {
    title: 'Actionable Insights',
    desc: 'Visual summaries and analytics that guide better decisions.',
    icon: BarChart3,
  },
  {
    title: 'Team Collaboration',
    desc: 'Granular roles to collaborate across finance, ops, and leadership.',
    icon: Users,
  },
];

const FeatureCards = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Why organizations choose this suite</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Streamlined workflows, intuitive controls, and a modern glass aesthetic.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
