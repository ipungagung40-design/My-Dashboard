import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';
import { TeleAccessRecord } from '../../types';
import { calculateKcStats } from '../../data/teleDataStore';
import { Building, Award } from 'lucide-react';

interface KantorCabangRankingChartProps {
  records: TeleAccessRecord[];
  selectedKepwil: string;
  selectedKC: string;
  onSelectKC: (kc: string) => void;
}

export const KantorCabangRankingChart: React.FC<KantorCabangRankingChartProps> = ({
  records,
  selectedKepwil,
  selectedKC,
  onSelectKC,
}) => {
  const [limit, setLimit] = useState<number>(10);
  const kcStats = calculateKcStats(records, selectedKepwil);
  const displayData = kcStats.slice(0, limit);

  const colors = [
    '#3b82f6', '#06b6d4', '#6366f1', '#8b5cf6', '#ec4899', 
    '#10b981', '#14b8a6', '#f59e0b', '#f97316', '#64748b'
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Peringkat Kantor Cabang (Top KC)
              </h3>
              <p className="text-xs text-slate-400">
                {selectedKepwil === 'All' ? 'Seluruh Kantor Cabang' : `Kantor Cabang di ${selectedKepwil}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLimit(10)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                limit === 10 ? 'bg-cyan-600 text-white' : 'bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              Top 10
            </button>
            <button
              onClick={() => setLimit(20)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                limit === 20 ? 'bg-cyan-600 text-white' : 'bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              Top 20
            </button>
            {selectedKC !== 'All' && (
              <button
                onClick={() => onSelectKC('All')}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30"
              >
                Reset Filter KC
              </button>
            )}
          </div>
        </div>

        {/* Horizontal Bar Chart */}
        <div className="h-72 sm:h-80 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={displayData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              onClick={(data: any) => {
                if (data && data.activePayload && data.activePayload.length) {
                  const clickedKc = data.activePayload[0].payload.kc;
                  onSelectKC(clickedKc === selectedKC ? 'All' : clickedKc);
                } else if (data && data.activeLabel) {
                  onSelectKC(data.activeLabel === selectedKC ? 'All' : data.activeLabel);
                }
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis type="number" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis
                type="category"
                dataKey="kc"
                stroke="#94a3b8"
                fontSize={11}
                tickLine={false}
                width={120}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl shadow-xl text-xs">
                        <div className="font-bold text-white mb-1 flex items-center gap-2">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>{data.kc}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mb-2">{data.kepwil}</div>
                        <div className="space-y-1">
                          <div className="flex justify-between gap-4 text-blue-400 font-bold">
                            <span>Total Pengakses:</span>
                            <span className="font-mono">{data.total}</span>
                          </div>
                          <div className="flex justify-between gap-4 text-emerald-400">
                            <span>Bersedia Mendaftar:</span>
                            <span className="font-mono">{data.bersedia + data.bersediaCatatan}</span>
                          </div>
                          <div className="flex justify-between gap-4 text-amber-400">
                            <span>Tidak Diangkat:</span>
                            <span className="font-mono">{data.tidakDiangkat}</span>
                          </div>
                          <div className="flex justify-between gap-4 text-rose-400">
                            <span>Tidak Bersedia:</span>
                            <span className="font-mono">{data.tidakBersedia}</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="total" name="Jumlah Akses" radius={[0, 6, 6, 0]}>
                {displayData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={selectedKC === entry.kc ? '#38bdf8' : colors[index % colors.length]}
                    stroke={selectedKC === entry.kc ? '#ffffff' : 'transparent'}
                    strokeWidth={selectedKC === entry.kc ? 2 : 0}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
        <span>Klik pada bar kantor cabang untuk memfilter tabel data</span>
        <span className="text-cyan-400 font-mono">Total {kcStats.length} KC Terdata</span>
      </div>
    </div>
  );
};
