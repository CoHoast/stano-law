'use client';

export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Firm Info */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Firm Information</h2>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Firm Name</label>
              <input type="text" value="Stano Law Firm" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Primary Contact</label>
              <input type="text" value="Attorney Stano" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" value="stano@stanolaw.com" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" readOnly />
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Subscription</h2>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
              <div>
                <div className="font-semibold text-indigo-900">Professional Plan</div>
                <div className="text-sm text-indigo-700">25 cases/month • All modules included</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-indigo-900">$2,500</div>
                <div className="text-sm text-indigo-700">/month</div>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                Upgrade Plan
              </button>
              <button className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
                View Invoices
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Notifications</h2>
          </div>
          <div className="p-5 space-y-4">
            {[
              { label: 'Document upload complete', desc: 'Get notified when AI processing finishes' },
              { label: 'Client portal activity', desc: 'When clients upload documents' },
              { label: 'Weekly summary', desc: 'Receive a weekly activity summary' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">{item.label}</div>
                  <div className="text-sm text-slate-500">{item.desc}</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
