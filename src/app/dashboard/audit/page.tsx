'use client';

const auditLogs = [
  { action: 'Document Uploaded', user: 'Jan Wey', target: 'Margaret Thompson - Bank Statement', time: '2 hours ago' },
  { action: 'Look-Back Complete', user: 'System', target: 'Margaret Thompson', time: '2 hours ago' },
  { action: 'VA Screening Run', user: 'Jan Wey', target: 'Robert Williams', time: '5 hours ago' },
  { action: 'Document Request Sent', user: 'Jan Wey', target: 'Dorothy & James Miller', time: '1 day ago' },
  { action: 'Estate Created', user: 'Jan Wey', target: 'Estate of Harold Chen', time: '1 day ago' },
  { action: 'Report Exported', user: 'Jan Wey', target: 'Richard & Linda Brown - Look-Back', time: '2 days ago' },
];

export default function AuditPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Audit Log</h1>
        <p className="text-slate-500 mt-1">Track all system activity and changes</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Recent Activity</h2>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Export Log</button>
        </div>
        <div className="divide-y divide-slate-100">
          {auditLogs.map((log, i) => (
            <div key={i} className="px-5 py-4 flex items-center justify-between hover:bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" className="text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-slate-900">{log.action}</div>
                  <div className="text-sm text-slate-500">{log.target}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-slate-700">{log.user}</div>
                <div className="text-xs text-slate-400">{log.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
