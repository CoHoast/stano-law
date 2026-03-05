'use client';

import Link from 'next/link';

const matters = [
  { id: 'M-2024-001', client: 'Margaret Thompson', type: 'Medicaid', status: 'In Progress', priority: 'High', updated: '2 hours ago', progress: 85 },
  { id: 'M-2024-002', client: 'Robert Williams', type: 'VA Benefits', status: 'Review', priority: 'Medium', updated: '5 hours ago', progress: 60 },
  { id: 'M-2024-003', client: 'Estate of Harold Chen', type: 'Probate', status: 'In Progress', priority: 'High', updated: '1 day ago', progress: 45 },
  { id: 'M-2024-004', client: 'Dorothy & James Miller', type: 'Medicaid', status: 'Pending Docs', priority: 'Medium', updated: '1 day ago', progress: 30 },
  { id: 'M-2024-005', client: 'William & Nancy Clark', type: 'Medicaid', status: 'Pending Docs', priority: 'Low', updated: '2 days ago', progress: 15 },
  { id: 'M-2024-006', client: 'Patricia Davis', type: 'VA Benefits', status: 'Complete', priority: 'Low', updated: '3 days ago', progress: 100 },
  { id: 'M-2024-007', client: 'Estate of Mary Johnson', type: 'Probate', status: 'In Progress', priority: 'Medium', updated: '3 days ago', progress: 70 },
  { id: 'M-2024-008', client: 'Richard & Linda Brown', type: 'Medicaid', status: 'Review', priority: 'High', updated: '4 days ago', progress: 90 },
];

const statusColors: Record<string, string> = {
  'In Progress': 'bg-blue-50 text-blue-700',
  'Review': 'bg-amber-50 text-amber-700',
  'Pending Docs': 'bg-orange-50 text-orange-700',
  'Complete': 'bg-emerald-50 text-emerald-700',
};

const priorityColors: Record<string, string> = {
  'High': 'bg-red-50 text-red-700',
  'Medium': 'bg-yellow-50 text-yellow-700',
  'Low': 'bg-slate-50 text-slate-600',
};

export default function MattersPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">All Matters</h1>
          <p className="text-slate-500 mt-1">Manage all your client matters in one place</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition flex items-center gap-2">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
            </svg>
            Filter
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition flex items-center gap-2">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4"/>
            </svg>
            New Matter
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search matters by client name, matter ID, or type..." 
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Matter ID</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Priority</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Progress</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Updated</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {matters.map((matter) => (
                <tr key={matter.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                  <td className="px-5 py-4 font-medium text-indigo-600">{matter.id}</td>
                  <td className="px-5 py-4">
                    <div className="font-medium text-slate-900">{matter.client}</div>
                  </td>
                  <td className="px-5 py-4 text-slate-600">{matter.type}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[matter.status]}`}>
                      {matter.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${priorityColors[matter.priority]}`}>
                      {matter.priority}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${matter.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                          style={{ width: `${matter.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500">{matter.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-400">{matter.updated}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-sm text-slate-500">Showing 1-8 of 24 matters</div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
