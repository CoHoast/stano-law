'use client';

const screenings = [
  { 
    client: 'Robert Williams',
    veteran: 'Robert Williams',
    service: 'Korea (1950-1953)',
    status: 'Likely Eligible',
    benefit: '$2,295/mo',
    netWorth: '$42,500',
    date: '5 hours ago'
  },
  { 
    client: 'Patricia Davis',
    veteran: 'James Davis (deceased)',
    service: 'Vietnam (1965-1973)',
    status: 'Eligible',
    benefit: '$1,432/mo',
    netWorth: '$28,000',
    date: '3 days ago'
  },
];

const statusColors: Record<string, string> = {
  'Likely Eligible': 'bg-emerald-50 text-emerald-700',
  'Eligible': 'bg-emerald-50 text-emerald-700',
  'Not Eligible': 'bg-red-50 text-red-700',
  'Needs Review': 'bg-amber-50 text-amber-700',
};

export default function VAScreenerPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">VA Eligibility Screener</h1>
          <p className="text-slate-500 mt-1">Pre-qualify veterans for Aid & Attendance benefits</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition flex items-center gap-2">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4"/>
          </svg>
          New Screening
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Total Screenings</div>
          <div className="text-3xl font-bold text-slate-900">47</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Likely Eligible</div>
          <div className="text-3xl font-bold text-emerald-600">32</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Avg. Benefit</div>
          <div className="text-3xl font-bold text-slate-900">$1,847</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Success Rate</div>
          <div className="text-3xl font-bold text-slate-900">68%</div>
        </div>
      </div>

      {/* Recent Screenings */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm mb-8">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-900">Recent Screenings</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {screenings.map((s, i) => (
            <div key={i} className="p-5 hover:bg-slate-50/50 transition">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{s.client}</div>
                    <div className="text-sm text-slate-500">Veteran: {s.veteran}</div>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[s.status]}`}>
                  {s.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Service Period</div>
                  <div className="text-sm font-medium text-slate-900">{s.service}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Est. Benefit</div>
                  <div className="text-sm font-medium text-emerald-600">{s.benefit}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Net Worth</div>
                  <div className="text-sm font-medium text-slate-900">{s.netWorth}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Screened</div>
                  <div className="text-sm font-medium text-slate-900">{s.date}</div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition">
                  View Full Report
                </button>
                <button className="px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
                  Start Application
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility Requirements */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-900">VA Aid & Attendance Requirements</h2>
        </div>
        <div className="p-5">
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" className="text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900">Service Requirement</h3>
              </div>
              <p className="text-sm text-slate-500">90+ days active duty with 1+ day during wartime period</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" className="text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900">Net Worth Limit</h3>
              </div>
              <p className="text-sm text-slate-500">$150,538 (2024) including assets minus debts</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" className="text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900">Medical Need</h3>
              </div>
              <p className="text-sm text-slate-500">Need assistance with daily activities or care facility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
