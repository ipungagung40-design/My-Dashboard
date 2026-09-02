import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend,
} from 'recharts';
import { MonthlyRecord } from '../../types';
import { ShieldCheck } from 'lucide-react';

interface RadarCapabilityChartProps {
  currentMonthData: MonthlyRecord;
}

export const RadarCapabilityChart: React.FC<RadarCapabilityChartProps> = ({
  currentMonthData,
}) => {
  const radarData = currentMonthData.radarMetrics;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl text-xs z-50">
          <div className="font-bold text-white mb-2">{item.dimension}</div>
          <div className="space-y-1 text-slate-300">
            <div className="flex justify-between gap-4">
              <span className="text-indigo-400">Skor Capaian:</span>
              <span className="font-bold text-white">{item.score} / 100</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Target Standar:</span>
              <span className="text-slate-300">{item.target} / 100</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-white font-bold text-base sm:text-lg">
            Evaluasi Matriks Multi-Dimensi
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Bulan {currentMonthData.monthName}
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Kesehatan organisasi pada 6 pilar strategis korporat
        </p>
      </div>

      <div className="w-full h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis
              dataKey="dimension"
              stroke="#94a3b8"
              fontSize={10}
              tickLine={false}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              stroke="#475569"
              fontSize={9}
              tickCount={5}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: '11px', paddingTop: '5px' }}
              formatter={(value) => <span className="text-slate-300 font-medium">{value}</span>}
            />
            <Radar
              name="Target KPI"
              dataKey="target"
              stroke="#818cf8"
              fill="#818cf8"
              fillOpacity={0.2}
            />
            <Radar
              name="Realisasi Skor"
              dataKey="score"
              stroke="#a855f7"
              fill="#a855f7"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          Kepatuhan SOP & Regulasi: 100%
        </span>
        <span className="text-slate-500 text-[11px]">Audit Matriks Teruji</span>
      </div>
    </div>
  );
};
