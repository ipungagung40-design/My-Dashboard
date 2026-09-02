import React, { useState } from 'react';
import { TeleAccessRecord } from '../../types';
import { calculateAgentStats } from '../../data/teleDataStore';
import { Headphones, Trophy, Search } from 'lucide-react';

interface AgentPerformanceTableProps {
  records: TeleAccessRecord[];
  selectedAgent: string;
  onSelectAgent: (agent: string) => void;
}

export const AgentPerformanceTable: React.FC<AgentPerformanceTableProps> = ({
  records,
  selectedAgent,
  onSelectAgent,
}) => {
  const [search, setSearch] = useState('');
  const agentStats = calculateAgentStats(records);

  const filtered = agentStats.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Kinerja Petugas / Agen Tele-Followup
              </h3>
              <p className="text-xs text-slate-400">
                Produktivitas penanganan akses peserta oleh masing-masing agen
              </p>
            </div>
          </div>

          <div className="relative w-full sm:w-48">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari agen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Scrollable Agent List */}
        <div className="max-h-72 overflow-y-auto pr-1 space-y-2">
          {filtered.map((agent, idx) => {
            const successRate = agent.total > 0 ? ((agent.bersedia / agent.total) * 100).toFixed(0) : 0;
            const isSelected = selectedAgent === agent.name;

            return (
              <div
                key={agent.name}
                onClick={() => onSelectAgent(isSelected ? 'All' : agent.name)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-purple-950/40 border-purple-500/50 text-white shadow-xs'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    idx === 0 ? 'bg-amber-500 text-slate-950' : idx === 1 ? 'bg-slate-300 text-slate-950' : idx === 2 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {idx < 3 ? <Trophy className="w-3 h-3" /> : idx + 1}
                  </div>
                  <div className="truncate">
                    <div className="font-semibold text-xs text-white truncate">{agent.name}</div>
                    <div className="text-[11px] text-slate-400">
                      Bersedia: <span className="text-emerald-400 font-medium">{agent.bersedia}</span> • Diangkat: <span className="text-amber-400 font-medium">{agent.total - agent.tidakDiangkat}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-mono font-bold text-sm text-purple-400">{agent.total}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{successRate}% konversi</div>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-8 text-xs text-slate-500">
              Tidak ada data petugas yang cocok dengan pencarian.
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center">
        <span>Klik agen untuk memfilter data pada ledger tabel</span>
        {selectedAgent !== 'All' && (
          <button
            onClick={() => onSelectAgent('All')}
            className="text-xs text-purple-400 hover:underline font-semibold"
          >
            Reset Filter Agen
          </button>
        )}
      </div>
    </div>
  );
};
