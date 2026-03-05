'use client';

export default function AnalyticsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
        <p className="text-slate-500 mt-1">Track your practice performance and efficiency</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Cases This Month</div>
          <div className="text-3xl font-bold text-slate-900">24</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Hours Saved</div>
          <div className="text-3xl font-bold text-emerald-600">312</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Cost Savings</div>
          <div className="text-3xl font-bold text-slate-900">$9,360</div>
        </div>
        <div className="stat-card">
          <div className="text-sm font-medium text-slate-500 mb-1">Accuracy Rate</div>
          <div className="text-3xl font-bold text-slate-900">98.7%</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 text-center">
        <div className="text-4xl mb-4">📊</div>
        <h2 className="text-lg font-semibold text-slate-900 mb-2">Analytics Dashboard Coming Soon</h2>
        <p className="text-slate-500 max-w-md mx-auto">
          Detailed charts and insights for case volume, processing times, ROI tracking, and team productivity will be available here.
        </p>
      </div>
    </div>
  );
}
