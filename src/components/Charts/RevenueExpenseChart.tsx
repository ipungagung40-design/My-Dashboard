import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { MonthlyRecord } from '../../types';
import { FORMAT_IDR, FORMAT_IDR_SHORT } from '../../data/mockData';
import { TrendingUp, Layers } from 'lucide-react';

interface RevenueExpenseChartProps {
  monthlyData: MonthlyRecord[];
  selectedMonth: number;
  onSelectMonth: (monthId: number) => void;
}

export const RevenueExpenseChart: React.FC<RevenueExpenseChartProps> = ({
  monthlyData,
  selectedMonth,
  onSelectMonth,
}) => {
  const [showRevenue, setShowRevenue] = useState(true);
  const [showExpense, setShowExpense] = useState(true);
  const [showNetProfit, setShowNetProfit] = useState(true);
  const [showTarget, setShowTarget] = useState(true);

  const chartData = monthlyData.map((d) => ({
    ...d,
    name: d.monthName.substring(0, 3),
    shortRevenue: d.revenue / 1000000,
    shortExpense: d.expense / 1000000,
    shortProfit: d.netProfit / 1000000,
    isSelected: d.monthId === selectedMonth,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const dataItem = payload[0].payload as MonthlyRecord;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl text-xs z-50 min-w-[240px]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <span className="font-bold text-white text-sm">
              Laporan {dataItem.monthName} {dataItem.year}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
              Bulan #{dataItem.monthId}
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Pendapatan (Revenue):
              </span>
              <span className="font-semibold text-white">
                {FORMAT_IDR(dataItem.revenue)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Pengeluaran (OPEX):
              </span>
              <span className="font-semibold text-white">
                {FORMAT_IDR(dataItem.expense)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Laba Bersih (Net Profit):
              </span>
              <span className="font-bold text-emerald-400">
                {FORMAT_IDR(dataItem.netProfit)}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1.5 border-t border-slate-800 text-[11px] text-slate-400">
              <span>Target Pendapatan:</span>
              <span className="text-slate-300">{FORMAT_IDR(dataItem.targetRevenue)}</span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Margin Keuntungan:</span>
              <span className="text-emerald-300 font-medium">
                {((dataItem.netProfit / dataItem.revenue) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs">
      {/* Header & Series Toggles */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white font-bold text-base sm:text-lg">
              Statistik Pertumbuhan Finansial Tahunan
            </h3>
            <span className="text-xs text-slate-500 font-medium">(Januari - Desember)</span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Perbandingan dinamis arus pendapatan, beban operasional, dan margin laba bersih
          </p>
        </div>

        {/* Legend / Series Visibility Switches */}
        <div className="flex items-center flex-wrap gap-1.5 bg-slate-950/80 p-1 rounded-full border border-slate-800 text-xs">
          <button
            onClick={() => setShowRevenue(!showRevenue)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              showRevenue
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Pendapatan
          </button>

          <button
            onClick={() => setShowExpense(!showExpense)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              showExpense
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Pengeluaran
          </button>

          <button
            onClick={() => setShowNetProfit(!showNetProfit)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              showNetProfit
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Laba Bersih
          </button>

          <button
            onClick={() => setShowTarget(!showTarget)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              showTarget
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Garis Target
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            onClick={(state: any) => {
              if (state && state.activePayload && state.activePayload.length) {
                const clickedItem = state.activePayload[0].payload as MonthlyRecord;
                onSelectMonth(clickedItem.monthId);
              }
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />

            <XAxis
              dataKey="name"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
            />

            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
              tickFormatter={(val) => `Rp ${(val / 1000000000).toFixed(1)}M`}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Target Line */}
            {showTarget && (
              <Line
                type="monotone"
                dataKey="targetRevenue"
                name="Target Pendapatan"
                stroke="#818cf8"
                strokeDasharray="4 4"
                strokeWidth={2}
                dot={false}
              />
            )}

            {/* Revenue Area */}
            {showRevenue && (
              <Area
                type="monotone"
                dataKey="revenue"
                name="Pendapatan"
                stroke="#3b82f6"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            )}

            {/* Expense Bar */}
            {showExpense && (
              <Bar
                dataKey="expense"
                name="Pengeluaran"
                fill="#f59e0b"
                radius={[6, 6, 0, 0]}
                barSize={22}
              />
            )}

            {/* Net Profit Line */}
            {showNetProfit && (
              <Line
                type="monotone"
                dataKey="netProfit"
                name="Laba Bersih"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#0f172a' }}
                activeDot={{ r: 6, fill: '#34d399', stroke: '#ffffff', strokeWidth: 2 }}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Selected Month Indicator Ribbon */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          Bulan aktif terpilih:{' '}
          <strong className="text-white font-semibold">
            {monthlyData.find((m) => m.monthId === selectedMonth)?.monthName}
          </strong>
        </span>
        <span className="hidden sm:inline text-slate-500">
          Klik diagram untuk mengganti bulan fokus laporan
        </span>
      </div>
    </div>
  );
};
