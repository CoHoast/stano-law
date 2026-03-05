'use client';

const estates = [
  { 
    id: 'EST-001',
    decedent: 'Harold Chen',
    executor: 'Michael Chen',
    assets: 42,
    totalValue: '$847,250',
    liabilities: '$12,400',
    netEstate: '$834,850',
    status: 'In Progress',
    updated: '1 day ago'
  },
  { 
    id: 'EST-002',
    decedent: 'Mary Johnson',
    executor: 'Sarah Johnson',
    assets: 28,
    totalValue: '$425,000',
    liabilities: '$45,000',
    netEstate: '$380,000',
    status: 'Review',
    updated: '3 days ago'
  },
];

const statusColors: Record<string, string> = {
  'In Progress': 'bg-blue-50 text-blue-700',
  'Review': 'bg-amber-50 text-amber-700',
  'Complete': 'bg-emerald-50 text-emerald-700',
};

export default function EstatePage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Estate Inventory Builder</h1>
          <p className="text-slate-500 mt-1">AI-powered probate asset extraction and Form 6.0 generation</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition flex items-center gap-2">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4"/>
          </svg>
          New Estate
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Active Estates</div>
          <div className="text-3xl font-bold text-slate-900">4</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Assets Identified</div>
          <div className="text-3xl font-bold text-slate-900">156</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Total Value</div>
          <div className="text-3xl font-bold text-emerald-600">$2.4M</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Avg. Processing</div>
          <div className="text-3xl font-bold text-slate-900">2.5 hrs</div>
        </div>
      </div>

      {/* Active Estates */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm mb-8">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-900">Active Estates</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {estates.map((estate) => (
            <div key={estate.id} className="p-5 hover:bg-slate-50/50 transition">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center text-white text-lg">
                    📋
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Estate of {estate.decedent}</div>
                    <div className="text-sm text-slate-500">Executor: {estate.executor} • {estate.id}</div>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[estate.status]}`}>
                  {estate.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Assets</div>
                  <div className="text-lg font-semibold text-slate-900">{estate.assets}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Total Value</div>
                  <div className="text-lg font-semibold text-emerald-600">{estate.totalValue}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Liabilities</div>
                  <div className="text-lg font-semibold text-red-600">{estate.liabilities}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Net Estate</div>
                  <div className="text-lg font-semibold text-slate-900">{estate.netEstate}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Updated</div>
                  <div className="text-lg font-semibold text-slate-900">{estate.updated}</div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition">
                  View Inventory
                </button>
                <button className="px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
                  Generate Form 6.0
                </button>
                <button className="px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
                  Export PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Asset Categories */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-900">Asset Categories (Ohio Form 6.0)</h2>
        </div>
        <div className="p-5">
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { schedule: 'A', name: 'Real Estate', desc: 'Land, homes, commercial property', icon: '🏠' },
              { schedule: 'B', name: 'Stocks & Bonds', desc: 'Securities, investments', icon: '📈' },
              { schedule: 'C', name: 'Bank Accounts', desc: 'Checking, savings, CDs', icon: '🏦' },
              { schedule: 'D', name: 'Other Personal', desc: 'Vehicles, jewelry, etc.', icon: '💎' },
            ].map((cat) => (
              <div key={cat.schedule} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Schedule {cat.schedule}</span>
                </div>
                <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                <p className="text-sm text-slate-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
