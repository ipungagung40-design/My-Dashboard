import React from 'react';
import {
  LayoutDashboard,
  BarChart3,
  FileSpreadsheet,
  MapPin,
  Headphones,
  Building2,
  Users,
  Layers,
} from 'lucide-react';
import { KepwilStat } from '../types';

interface SidebarProps {
  activeTab: 'overview' | 'charts' | 'breakdown' | 'agents' | 'ledger';
  setActiveTab: (tab: 'overview' | 'charts' | 'breakdown' | 'agents' | 'ledger') => void;
  selectedKepwil: string;
  setSelectedKepwil: (kw: string) => void;
  kepwilStats: KepwilStat[];
  totalRecordsCount: number;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  selectedKepwil,
  setSelectedKepwil,
  kepwilStats,
  totalRecordsCount,
  isOpenMobile,
  onCloseMobile,
}) => {
  const navItems = [
    {
      id: 'overview' as const,
      label: 'Overview & Ringkasan',
      icon: LayoutDashboard,
      badge: 'Utama',
    },
    {
      id: 'charts' as const,
      label: 'Grafik Interaktif Akses',
      icon: BarChart3,
      badge: 'Visualisasi',
    },
    {
      id: 'breakdown' as const,
      label: 'Rincian Kantor Cabang',
      icon: Building2,
      badge: 'Wilayah',
    },
    {
      id: 'agents' as const,
      label: 'Kinerja Agen / Petugas',
      icon: Headphones,
      badge: 'Follow-up',
    },
    {
      id: 'ledger' as const,
      label: 'Ledger Data Peserta',
      icon: FileSpreadsheet,
      badge: 'Data Raw',
    },
  ];

  const totalBersedia = kepwilStats.reduce((acc, curr) => acc + curr.bersedia + curr.bersediaCatatan, 0);
  const conversionRate = totalRecordsCount > 0 ? ((totalBersedia / totalRecordsCount) * 100).toFixed(1) : '0';

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-300 ease-in-out shrink-0 select-none ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Logo Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white block">
                TELE-ACCESS
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block -mt-0.5">
                Monitoring Kepwil & KC
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 scrollbar-none">
          {/* Main Navigation Menu */}
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 mb-2">
              Menu Navigasi
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      onCloseMobile();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Kepwil Quick Selector in Sidebar */}
          <div>
            <div className="flex items-center justify-between px-3 mb-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Pilih Kantor Wilayah
              </p>
              <Layers className="w-3.5 h-3.5 text-slate-500" />
            </div>
            
            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
              <button
                onClick={() => setSelectedKepwil('All')}
                className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors text-left ${
                  selectedKepwil === 'All'
                    ? 'bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>Seluruh Wilayah</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                  {totalRecordsCount}
                </span>
              </button>

              {kepwilStats.map((s) => {
                const isSelected = selectedKepwil === s.kepwil;
                return (
                  <button
                    key={s.kepwil}
                    onClick={() => setSelectedKepwil(s.kepwil)}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors text-left ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="truncate">{s.kepwil}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                      {s.totalAccess}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Quota & Status Widget */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-900/80 mt-auto">
          <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                Tingkat Konversi Positif
              </p>
              <span className="text-xs font-bold text-emerald-400">
                {conversionRate}%
              </span>
            </div>
            
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(5, Number(conversionRate)))}%` }}
              ></div>
            </div>
            
            <p className="text-[10px] text-slate-400 flex items-center justify-between">
              <span>{totalBersedia} Bersedia</span>
              <span>/ {totalRecordsCount} Total Akses</span>
            </p>
          </div>

          {/* System user badge */}
          <div className="mt-2.5 flex items-center gap-2 px-1">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-[10px] font-bold text-blue-400">
              <Users className="w-3 h-3" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-200 truncate">Petugas Wilayah</p>
              <p className="text-[10px] text-slate-400 truncate">Layanan Kepesertaan</p>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500" title="Online Sync"></span>
          </div>
        </div>
      </aside>
    </>
  );
};
