import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { MonthlyRecord } from '../../types';
import { FORMAT_IDR } from '../../data/mockData';
import { CheckCircle2 } from 'lucide-react';

interface OperationalWeeklyChartProps {
  currentMonthData: MonthlyRecord;
}

export const OperationalWeeklyChart: React.FC<OperationalWeeklyChartProps> = ({
  currentMonthData,
}) => {
  const weeklyData = currentMonthData.weeklyTrends;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl text-xs z-50 min-w-[200px]">
          <div className="font-bold text-white mb-2 pb-1.5 border-b border-slate-800 flex items-center justify-between">
            <span>{label} ({currentMonthData.monthName})</span>
            <span className="text-teal-400 font-bold">{item.sla}% SLA</span>
          </div>
          <div className="space-y-1 text-slate-300">
            <div className="flex justify-between">
              <span className="text-blue-400">Revenue Pekan:</span>
              <span className="font-semibold text-white">{FORMAT_IDR(item.revenue)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-amber-400">Expense Pekan:</span>
              <span className="font-semibold text-white">{FORMAT_IDR(item.expense)}</span>
            </div>
            <div className="flex justify-between pt-1.5 border-t border-slate-800">
              <span className="text-slate-400">Tiket Teratasi:</span>
              <span className="font-bold text-teal-400">{item.ticketsResolved} tiket</span>
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
            Dinamika Kinerja Mingguan (W1 - W4)
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Bulan {currentMonthData.monthName}
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Pergerakan SLA operasional & ritme pemasukan mingguan
        </p>
      </div>

      <div className="w-full h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={weeklyData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="week"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
            />
            <YAxis
              yAxisId="left"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
              tickFormatter={(val) => `Rp ${(val / 1000000).toFixed(0)}Jt`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[95, 100]}
              stroke="#2dd4bf"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
              formatter={(value) => <span className="text-slate-300 font-medium">{value}</span>}
            />
            <Bar
              yAxisId="left"
              dataKey="revenue"
              name="Pendapatan (Jt)"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              barSize={18}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="sla"
              name="SLA (%)"
              stroke="#2dd4bf"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#2dd4bf' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-teal-400 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Rata-rata SLA: {currentMonthData.slaPerformance}%
        </span>
        <span className="text-slate-500 text-[11px]">Audit Operasional Selesai</span>
      </div>
    </div>
  );
};
