import React, { useState } from 'react';
import { KepwilStat } from '../types';
import { MapPin, Building, ChevronRight, CheckCircle, PhoneCall, Filter } from 'lucide-react';

interface KepwilBreakdownGridProps {
  stats: KepwilStat[];
  selectedKepwil: string;
  selectedKC: string;
  onSelectKepwil: (kw: string) => void;
  onSelectKC: (kc: string) => void;
}

export const KepwilBreakdownGrid: React.FC<KepwilBreakdownGridProps> = ({
  stats,
  selectedKepwil,
  selectedKC,
  onSelectKepwil,
  onSelectKC,
}) => {
  const [expandedKw, setExpandedKw] = useState<string | null>(null);

  const toggleExpand = (kw: string) => {
    setExpandedKw(prev => prev === kw ? null : kw);
  };

  const filteredStats = selectedKepwil === 'All' 
    ? stats 
    : stats.filter(s => s.kepwil === selectedKepwil);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Rincian Akses per Kantor Wilayah & Kantor Cabang
            </h3>
            <p className="text-xs text-slate-400">
              Struktur pembagian jumlah pengakses dan hasil respon di setiap titik cabang
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {selectedKepwil !== 'All' && (
            <button
              onClick={() => onSelectKepwil('All')}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 transition-colors flex items-center gap-1.5"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Tampilkan Semua Kepwil</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid of Kepwil Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStats.map((item) => {
          const isSelected = selectedKepwil === item.kepwil;
          const isExpanded = expandedKw === item.kepwil || isSelected;
          const totalPositive = item.bersedia + item.bersediaCatatan;

          return (
            <div
              key={item.kepwil}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isSelected
                  ? 'bg-slate-950 border-blue-500/60 ring-1 ring-blue-500/30 shadow-lg'
                  : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Card Header */}
              <div 
                className="p-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                onClick={() => {
                  onSelectKepwil(isSelected ? 'All' : item.kepwil);
                  toggleExpand(item.kepwil);
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"></span>
                    <h4 className="font-bold text-sm text-white truncate">{item.kepwil}</h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono font-bold text-xs">
                    {item.totalAccess} Akses
                  </span>
                </div>

                {/* Progress bar of success */}
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Respon Bersedia Mendaftar</span>
                    <span className="text-emerald-400 font-semibold font-mono">{totalPositive} ({item.successRate}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-emerald-500 h-full" 
                      style={{ width: `${(totalPositive / (item.totalAccess || 1)) * 100}%` }}
                    />
                    <div 
                      className="bg-amber-500 h-full" 
                      style={{ width: `${(item.tidakDiangkat / (item.totalAccess || 1)) * 100}%` }}
                    />
                    <div 
                      className="bg-rose-500 h-full" 
                      style={{ width: `${(item.tidakBersedia / (item.totalAccess || 1)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Metrics pill strip */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800/80 text-center text-[10px]">
                  <div className="text-slate-400">
                    <span className="block text-slate-500">Cabang</span>
                    <span className="font-bold text-slate-200">{item.kcCount} KC</span>
                  </div>
                  <div className="text-amber-400">
                    <span className="block text-slate-500">Tdk Diangkat</span>
                    <span className="font-bold">{item.tidakDiangkat}</span>
                  </div>
                  <div className="text-slate-400">
                    <span className="block text-slate-500">Tersambung</span>
                    <span className="font-bold text-slate-200">{item.totalAccess - item.tidakTersambung}</span>
                  </div>
                </div>
              </div>

              {/* Kantor Cabang Dropdown List */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 bg-slate-900/40">
                  <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center justify-between">
                    <span>Daftar Kantor Cabang ({item.kantorCabangList.length}):</span>
                    <span className="text-[10px] text-slate-500">Klik untuk filter</span>
                  </div>

                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {item.kantorCabangList.map((kc) => {
                      const isKcActive = selectedKC === kc.name;
                      return (
                        <button
                          key={kc.name}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectKC(isKcActive ? 'All' : kc.name);
                          }}
                          className={`w-full p-2 rounded-xl text-left text-xs transition-all flex items-center justify-between gap-2 ${
                            isKcActive
                              ? 'bg-blue-600 text-white font-semibold shadow-xs'
                              : 'bg-slate-950/80 hover:bg-slate-800 text-slate-300 border border-slate-800/60'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <Building className="w-3.5 h-3.5 opacity-70 shrink-0" />
                            <span className="truncate">{kc.name}</span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 font-mono text-[11px]">
                            <span className={isKcActive ? 'text-blue-100' : 'text-emerald-400'}>
                              ✓{kc.bersedia}
                            </span>
                            <span className={`px-1.5 py-0.5 rounded font-bold ${
                              isKcActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-200'
                            }`}>
                              {kc.total}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
