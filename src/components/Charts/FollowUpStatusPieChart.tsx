import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { TeleAccessRecord } from '../../types';
import { PieChart as PieIcon, CheckCircle2 } from 'lucide-react';

interface FollowUpStatusPieChartProps {
  records: TeleAccessRecord[];
  selectedKepwil: string;
}

export const FollowUpStatusPieChart: React.FC<FollowUpStatusPieChartProps> = ({
  records,
  selectedKepwil,
}) => {
  const filtered = selectedKepwil === 'All'
    ? records
    : records.filter((r) => r.kepwil === selectedKepwil);

  let bersedia = 0;
  let bersediaCatatan = 0;
  let tidakDiangkat = 0;
  let tidakBersedia = 0;
  let tidakTersambung = 0;
  let lainnya = 0;

  filtered.forEach((r) => {
    const st = (r.hasilTindakLanjut || '').toLowerCase();
    if (st.includes('dengan catatan')) {
      bersediaCatatan++;
    } else if (st.includes('bersedia mendaftar')) {
      bersedia++;
    } else if (st.includes('tidak diangkat')) {
      tidakDiangkat++;
    } else if (st.includes('tidak bersedia')) {
      tidakBersedia++;
    } else if (st.includes('tidak tersambung')) {
      tidakTersambung++;
    } else {
      lainnya++;
    }
  });

  const total = filtered.length || 1;

  const data = [
    { name: 'Bersedia Mendaftar', value: bersedia, color: '#10b981' },
    { name: 'Bersedia (Dgn Catatan)', value: bersediaCatatan, color: '#06b6d4' },
    { name: 'Tidak Diangkat', value: tidakDiangkat, color: '#f59e0b' },
    { name: 'Tidak Bersedia', value: tidakBersedia, color: '#f43f5e' },
    { name: 'Tidak Tersambung', value: tidakTersambung, color: '#64748b' },
  ].filter(d => d.value > 0);

  const totalPositive = bersedia + bersediaCatatan;
  const positiveRate = ((totalPositive / total) * 100).toFixed(1);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <PieIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Distribusi Hasil Tindak Lanjut
              </h3>
              <p className="text-xs text-slate-400">
                Komposisi respon peserta ({selectedKepwil === 'All' ? 'Semua Wilayah' : selectedKepwil})
              </p>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{positiveRate}% Respon Positif</span>
          </div>
        </div>

        <div className="h-64 sm:h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const d = payload[0];
                    const val = Number(d.value);
                    const pct = ((val / total) * 100).toFixed(1);
                    return (
                      <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl shadow-xl text-xs">
                        <div className="font-bold text-white mb-1">{d.name}</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-blue-400 font-bold">{val} Orang</span>
                          <span className="text-slate-400">({pct}%)</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-[11px]">
        <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
          <span className="text-slate-400 block">Total Dihubungi</span>
          <span className="text-white font-bold font-mono text-xs">{filtered.length}</span>
        </div>
        <div className="bg-emerald-950/20 p-2 rounded-xl border border-emerald-900/30">
          <span className="text-emerald-400 block">Bersedia</span>
          <span className="text-emerald-300 font-bold font-mono text-xs">{totalPositive}</span>
        </div>
        <div className="bg-amber-950/20 p-2 rounded-xl border border-amber-900/30">
          <span className="text-amber-400 block">Tidak Diangkat</span>
          <span className="text-amber-300 font-bold font-mono text-xs">{tidakDiangkat}</span>
        </div>
      </div>
    </div>
  );
};
