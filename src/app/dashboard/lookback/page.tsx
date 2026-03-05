'use client';

const lookbackCases = [
  { 
    id: 'LB-001', 
    client: 'Margaret Thompson', 
    statements: 58, 
    flagged: 7, 
    status: 'Complete',
    penalty: '$12,450',
    lastUpdate: '2 hours ago'
  },
  { 
    id: 'LB-002', 
    client: 'Dorothy & James Miller', 
    statements: 24, 
    flagged: 3, 
    status: 'Processing',
    penalty: 'Calculating...',
    lastUpdate: '3 hours ago'
  },
  { 
    id: 'LB-003', 
    client: 'Richard & Linda Brown', 
    statements: 60, 
    flagged: 12, 
    status: 'Review',
    penalty: '$28,750',
    lastUpdate: '4 hours ago'
  },
];

const statusColors: Record<string, string> = {
  'Complete': 'bg-emerald-50 text-emerald-700',
  'Processing': 'bg-blue-50 text-blue-700',
  'Review': 'bg-amber-50 text-amber-700',
};

export default function LookbackPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">5-Year Look-Back Analyzer</h1>
          <p className="text-slate-500 mt-1">AI-powered Medicaid look-back analysis for asset transfers</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition flex items-center gap-2">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
          </svg>
          Upload Statements
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Active Analyses</div>
          <div className="text-3xl font-bold text-slate-900">3</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Statements Processed</div>
          <div className="text-3xl font-bold text-slate-900">142</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Avg. Processing Time</div>
          <div className="text-3xl font-bold text-slate-900">12 min</div>
        </div>
      </div>

      {/* Active Cases */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm mb-8">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-900">Active Look-Back Cases</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {lookbackCases.map((case_) => (
            <div key={case_.id} className="p-5 hover:bg-slate-50/50 transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{case_.client}</div>
                    <div className="text-sm text-slate-500">{case_.id}</div>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[case_.status]}`}>
                  {case_.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Statements</div>
                  <div className="text-lg font-semibold text-slate-900">{case_.statements}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Flagged Items</div>
                  <div className="text-lg font-semibold text-amber-600">{case_.flagged}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Est. Penalty</div>
                  <div className="text-lg font-semibold text-slate-900">{case_.penalty}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Last Update</div>
                  <div className="text-lg font-semibold text-slate-900">{case_.lastUpdate}</div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition">
                  View Details
                </button>
                <button className="px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
                  Export Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-900">How It Works</h2>
        </div>
        <div className="p-5">
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Upload Statements', desc: 'Upload 60 months of bank statements (PDF/images)' },
              { step: '2', title: 'AI Analysis', desc: 'Our AI extracts and categorizes all transactions' },
              { step: '3', title: 'Review Flags', desc: 'Review flagged transfers: gifts, cash, suspicious items' },
              { step: '4', title: 'Export Report', desc: 'Generate compliance report for Medicaid caseworker' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <div className="font-medium text-slate-900 mb-1">{item.title}</div>
                <div className="text-sm text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
