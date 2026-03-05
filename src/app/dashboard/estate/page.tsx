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
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    </svg>
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
            <div className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" className="text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Schedule A</span>
              </div>
              <h3 className="font-semibold text-slate-900">Real Estate</h3>
              <p className="text-sm text-slate-500">Land, homes, commercial property</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" className="text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Schedule B</span>
              </div>
              <h3 className="font-semibold text-slate-900">Stocks & Bonds</h3>
              <p className="text-sm text-slate-500">Securities, investments</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" className="text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Schedule C</span>
              </div>
              <h3 className="font-semibold text-slate-900">Bank Accounts</h3>
              <p className="text-sm text-slate-500">Checking, savings, CDs</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" className="text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Schedule D</span>
              </div>
              <h3 className="font-semibold text-slate-900">Other Personal</h3>
              <p className="text-sm text-slate-500">Vehicles, jewelry, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
