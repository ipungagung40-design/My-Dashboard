import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { KepwilStat } from '../../types';
import { BarChart3, TrendingUp } from 'lucide-react';

interface KepwilAccessChartProps {
  stats: KepwilStat[];
  selectedKepwil: string;
  onSelectKepwil: (kw: string) => void;
}

export const KepwilAccessChart: React.FC<KepwilAccessChartProps> = ({
  stats,
  selectedKepwil,
  onSelectKepwil,
}) => {
  const chartData = stats.map((s) => ({
    name: s.kepwil,
    total: s.totalAccess,
    bersedia: s.bersedia + s.bersediaCatatan,
    tidakDiangkat: s.tidakDiangkat,
    tidakBersedia: s.tidakBersedia,
    tidakTersambung: s.tidakTersambung,
    kcCount: s.kcCount,
    rate: s.successRate,
  }));

  const totalAccessAll = stats.reduce((acc, curr) => acc + curr.totalAccess, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Jumlah Pengakses Berdasarkan Kantor Wilayah (Kepwil)
            </h3>
            <p className="text-xs text-slate-400">
              Total {totalAccessAll.toLocaleString('id-ID')} interaksi akses terdistribusi di {stats.length} Kepwil
            </p>
          </div>
        </div>

        {/* Quick Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => onSelectKepwil('All')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedKepwil === 'All'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Semua Kepwil
          </button>
          {stats.slice(0, 6).map((s) => (
            <button
              key={s.kepwil}
              onClick={() => onSelectKepwil(s.kepwil)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedKepwil === s.kepwil
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {s.kepwil} ({s.totalAccess})
            </button>
          ))}
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-72 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -15, bottom: 20 }}
            onClick={(data: any) => {
              if (data && data.activeLabel) {
                onSelectKepwil(data.activeLabel);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
              interval={0}
              angle={-20}
              textAnchor="end"
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl shadow-xl text-xs">
                      <div className="font-bold text-white mb-1.5 flex items-center justify-between gap-4">
                        <span>{label}</span>
                        <span className="text-blue-400 font-mono">{data.total} Akses</span>
                      </div>
                      <div className="space-y-1 text-slate-300">
                        <div className="flex justify-between gap-4 text-emerald-400">
                          <span>Bersedia Mendaftar:</span>
                          <span className="font-bold font-mono">{data.bersedia} ({data.rate}%)</span>
                        </div>
                        <div className="flex justify-between gap-4 text-amber-400">
                          <span>Tidak Diangkat:</span>
                          <span className="font-mono">{data.tidakDiangkat}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-rose-400">
                          <span>Tidak Bersedia:</span>
                          <span className="font-mono">{data.tidakBersedia}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-slate-400 border-t border-slate-800 pt-1 mt-1">
                          <span>Jumlah Kantor Cabang:</span>
                          <span className="font-mono">{data.kcCount} KC</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              wrapperStyle={{ paddingBottom: '12px', fontSize: '11px' }}
            />
            <Bar dataKey="bersedia" name="Bersedia Mendaftar" fill="#10b981" stackId="a" radius={[0, 0, 0, 0]} />
            <Bar dataKey="tidakDiangkat" name="Tidak Diangkat" fill="#f59e0b" stackId="a" radius={[0, 0, 0, 0]} />
            <Bar dataKey="tidakBersedia" name="Tidak Bersedia" fill="#f43f5e" stackId="a" radius={[0, 0, 0, 0]} />
            <Bar dataKey="tidakTersambung" name="Tidak Tersambung" fill="#64748b" stackId="a" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>Klik bar grafik untuk memfilter rincian data per wilayah</span>
        </div>
        <span className="font-mono text-slate-500">Sumber: Data Rekapitulasi Resonansi Access</span>
      </div>
    </div>
  );
};
