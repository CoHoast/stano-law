'use client';

const portalClients = [
  { 
    client: 'Dorothy & James Miller',
    email: 'dorothy.miller@email.com',
    requested: 24,
    received: 10,
    status: 'Waiting',
    lastActivity: '3 hours ago'
  },
  { 
    client: 'William & Nancy Clark',
    email: 'wclark@email.com',
    requested: 30,
    received: 16,
    status: 'Waiting',
    lastActivity: '2 days ago'
  },
  { 
    client: 'Margaret Thompson',
    email: 'm.thompson@email.com',
    requested: 60,
    received: 58,
    status: 'Complete',
    lastActivity: '1 day ago'
  },
  { 
    client: 'Richard & Linda Brown',
    email: 'rbrown@email.com',
    requested: 60,
    received: 60,
    status: 'Complete',
    lastActivity: '4 days ago'
  },
];

const statusColors: Record<string, string> = {
  'Waiting': 'bg-amber-50 text-amber-700',
  'Complete': 'bg-emerald-50 text-emerald-700',
};

export default function PortalPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Document Portal</h1>
          <p className="text-slate-500 mt-1">Automated client document collection and tracking</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition flex items-center gap-2">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Send Request
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Active Portals</div>
          <div className="text-3xl font-bold text-slate-900">8</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Docs Requested</div>
          <div className="text-3xl font-bold text-slate-900">174</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Docs Received</div>
          <div className="text-3xl font-bold text-emerald-600">144</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Completion Rate</div>
          <div className="text-3xl font-bold text-slate-900">83%</div>
        </div>
      </div>

      {/* Client Portals */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Client Document Portals</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Progress</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Activity</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {portalClients.map((client, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50">
                  <td className="px-5 py-4">
                    <div className="font-medium text-slate-900">{client.client}</div>
                    <div className="text-slate-500 text-xs">{client.email}</div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${client.received === client.requested ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                          style={{ width: `${(client.received / client.requested) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-slate-600">
                        {client.received}/{client.requested}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[client.status]}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-400">{client.lastActivity}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-100 transition">
                        View Portal
                      </button>
                      <button className="px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition">
                        Send Reminder
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-xl">📧</span>
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Auto Reminders</h3>
          <p className="text-sm text-slate-500">Automatic email reminders for missing documents</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
          <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-xl">🤖</span>
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">AI Classification</h3>
          <p className="text-sm text-slate-500">Documents automatically classified by type</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-xl">✅</span>
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Smart Checklists</h3>
          <p className="text-sm text-slate-500">Dynamic checklists based on case type</p>
        </div>
      </div>
    </div>
  );
}
