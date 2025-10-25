import React, { useMemo, useState } from 'react';

const initialForm = {
  name: '',
  type: 'Account',
  currency: 'USD',
  amount: '',
};

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  INR: '₹',
};

const RecordRow = ({ record, onEdit, onDelete }) => {
  const symbol = currencySymbols[record.currency] || '';
  return (
    <tr className="border-b border-white/10 hover:bg-white/5">
      <td className="px-3 py-2 text-sm text-slate-200">{record.name}</td>
      <td className="px-3 py-2 text-xs text-slate-300">{record.type}</td>
      <td className="px-3 py-2 text-xs text-slate-300">{record.currency}</td>
      <td className="px-3 py-2 text-sm text-slate-200">{symbol}{Number(record.amount).toLocaleString()}</td>
      <td className="px-3 py-2 text-right text-sm">
        <button
          onClick={() => onEdit(record)}
          className="mr-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white hover:bg-white/10"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(record.id)}
          className="rounded-full bg-rose-500/90 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

const RecordsPanel = () => {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return records.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.type.toLowerCase().includes(q) ||
      r.currency.toLowerCase().includes(q)
    );
  }, [records, query]);

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount) return;

    if (editingId) {
      setRecords(prev => prev.map(r => r.id === editingId ? { ...r, ...form, amount: Number(form.amount) } : r));
    } else {
      const newRecord = {
        id: crypto.randomUUID(),
        name: form.name,
        type: form.type,
        currency: form.currency,
        amount: Number(form.amount),
        createdAt: new Date().toISOString(),
      };
      setRecords(prev => [newRecord, ...prev]);
    }
    resetForm();
  };

  const onEdit = (record) => {
    setForm({ name: record.name, type: record.type, currency: record.currency, amount: String(record.amount) });
    setEditingId(record.id);
  };

  const onDelete = (id) => {
    setRecords(prev => prev.filter(r => r.id !== id));
    if (editingId === id) resetForm();
  };

  const totalByCurrency = useMemo(() => {
    const agg = {};
    for (const r of records) {
      agg[r.currency] = (agg[r.currency] || 0) + Number(r.amount || 0);
    }
    return agg;
  }, [records]);

  return (
    <section id="records" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Financial Records</h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              Create, review, update, and delete entries such as accounts, incomes, and expenses.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search records..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-slate-400 outline-none backdrop-blur focus:ring-2 focus:ring-cyan-500 sm:w-64"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur lg:col-span-1">
            <h3 className="text-lg font-semibold">{editingId ? 'Edit Record' : 'Add Record'}</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="mb-1 block text-xs text-slate-300">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="e.g., Corporate Card, Payroll"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs text-slate-300">Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-cyan-500"
                  >
                    <option>Account</option>
                    <option>Income</option>
                    <option>Expense</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-slate-300">Currency</label>
                  <select
                    value={form.currency}
                    onChange={(e) => setForm({ ...form, currency: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-cyan-500"
                  >
                    {Object.keys(currencySymbols).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-slate-300">Amount</label>
                <input
                  type="number"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400"
                >
                  {editingId ? 'Update' : 'Add'}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            {Object.keys(totalByCurrency).length > 0 && (
              <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <h4 className="mb-2 text-sm font-semibold text-slate-200">Totals</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                  {Object.entries(totalByCurrency).map(([c, v]) => (
                    <div key={c} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                      <span className="font-medium">{c}</span>
                      <span>
                        {(currencySymbols[c] || '')}
                        {Number(v).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-sm text-slate-300">{filtered.length} result(s)</span>
              </div>
              <div className="overflow-auto">
                <table className="min-w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-400">
                      <th className="px-3 py-2">Name</th>
                      <th className="px-3 py-2">Type</th>
                      <th className="px-3 py-2">Currency</th>
                      <th className="px-3 py-2">Amount</th>
                      <th className="px-3 py-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-3 py-8 text-center text-sm text-slate-400">
                          No records yet. Add your first entry on the left.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((r) => (
                        <RecordRow key={r.id} record={r} onEdit={onEdit} onDelete={onDelete} />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordsPanel;
