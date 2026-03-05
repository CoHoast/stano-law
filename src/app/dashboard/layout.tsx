'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Navigation structure for DOKit Elder Law Dashboard
const navigationGroups = [
  {
    name: 'Overview',
    items: [
      { 
        name: 'Dashboard', 
        href: '/dashboard', 
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' 
      },
      { 
        name: 'All Matters', 
        href: '/dashboard/matters', 
        icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
        badge: '24'
      },
    ]
  },
  {
    name: 'Products',
    items: [
      { 
        name: 'Look-Back Analyzer', 
        href: '/dashboard/lookback', 
        icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        badge: '3'
      },
      { 
        name: 'Document Portal', 
        href: '/dashboard/portal', 
        icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
        badge: '8'
      },
      { 
        name: 'VA Screener', 
        href: '/dashboard/va-screener', 
        icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
      },
      { 
        name: 'Estate Inventory', 
        href: '/dashboard/estate', 
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
      },
    ]
  },
  {
    name: 'Reports',
    items: [
      { 
        name: 'Analytics', 
        href: '/dashboard/analytics', 
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' 
      },
      { 
        name: 'Audit Log', 
        href: '/dashboard/audit', 
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' 
      },
    ]
  },
  {
    name: 'Settings',
    items: [
      { 
        name: 'Team', 
        href: '/dashboard/team', 
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' 
      },
      { 
        name: 'Settings', 
        href: '/dashboard/settings', 
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' 
      },
    ]
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Gradient Orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/dokit-logo.png" alt="DOKit" className="h-7 w-auto" />
        </div>
        <button 
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-slate-600 hover:text-slate-900"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-slate-100 
        transform transition-transform duration-200 ease-in-out
        lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img src="/dokit-logo.png" alt="DOKit" className="h-9 w-auto" />
              <div className="text-xs text-slate-400 border-l border-slate-200 pl-3">Stano Law</div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-slate-600"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            {navigationGroups.map((group) => (
              <div key={group.name} className="mb-6">
                <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {group.name}
                </div>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href || 
                      (item.href !== '/dashboard' && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`sidebar-link ${isActive ? 'active' : ''}`}
                      >
                        <svg 
                          width="20" 
                          height="20" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          viewBox="0 0 24 24"
                        >
                          <path d={item.icon} />
                        </svg>
                        {item.name}
                        {item.badge && (
                          <span className="ml-auto bg-indigo-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                JW
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-900 truncate">Jan Wey</div>
                <div className="text-xs text-slate-500 truncate">jan@stanolaw.com</div>
              </div>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-14 lg:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}
