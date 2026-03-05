'use client';

import Link from 'next/link';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f3] via-white to-[#d8f3dc]/30">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/dokit-logo.png" alt="DOKit" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-gray-700">Elder Law</span>
          </div>
          <a 
            href="https://stano-law-production.up.railway.app" 
            target="_blank"
            className="text-sm text-[#2d6a4f] hover:text-[#1b4332] font-medium"
          >
            Visit Stano Law →
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#2d6a4f]/10 text-[#2d6a4f] text-sm font-medium rounded-full mb-4">
            Product Demo
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            AI-Powered Elder Law Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline Medicaid planning, VA benefits, and estate administration with intelligent document processing
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Marketing Website */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden bg-gray-50">
              <img 
                src="/demo-marketing.png" 
                alt="Stano Law Firm Website" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Law Firm Website</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional website showcasing elder law services, attorney credentials, and client resources.
              </p>
              <a 
                href="https://stano-law-production.up.railway.app" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2d6a4f] text-white rounded-lg font-medium hover:bg-[#1b4332] transition-colors"
              >
                Visit Website
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Product Suite */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden bg-gray-50">
              <img 
                src="/demo-products.png" 
                alt="DOKit Elder Law Products" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Product Suite</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete solution: Look-Back Analyzer, Document Portal, VA Screener, and Estate Inventory Builder.
              </p>
              <a 
                href="https://stano-law-production.up.railway.app/dokit-elder-law.html" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c9a227] text-white rounded-lg font-medium hover:bg-[#b8922a] transition-colors"
              >
                Learn More
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: Dashboard Preview */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden bg-gray-50">
              <img 
                src="/demo-dashboard.png" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dashboard Preview</h3>
              <p className="text-gray-600 text-sm mb-4">
                Interactive demo of the case management dashboard with real-time AI document processing.
              </p>
              <Link 
                href="/dashboard"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2d6a4f] text-white rounded-lg font-medium hover:bg-[#1b4332] transition-colors"
              >
                Open Dashboard
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Summary */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Included Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📊', title: 'Look-Back Analyzer', desc: '5-year Medicaid compliance analysis' },
              { icon: '📁', title: 'Document Portal', desc: 'Secure client document collection' },
              { icon: '🎖️', title: 'VA Screener', desc: 'Aid & Attendance eligibility check' },
              { icon: '📋', title: 'Estate Inventory', desc: 'Automated Form 6.0 generation' },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#2d6a4f] to-[#40916c] rounded-2xl p-10 text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Transform Your Practice?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Join leading elder law firms using DOKit to save 25+ hours per case and improve client outcomes.
          </p>
          <a 
            href="mailto:demo@dokit.ai?subject=Stano Law Demo Inquiry" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2d6a4f] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Demo
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Demo Environment • Powered by <span className="font-semibold text-gray-700">DOKit AI Platform</span>
          </p>
          <p className="text-sm text-gray-500">
            Questions? Contact your sales representative
          </p>
        </div>
      </footer>
    </div>
  );
}
