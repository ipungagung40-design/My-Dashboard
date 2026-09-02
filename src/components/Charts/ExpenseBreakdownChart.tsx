import React, { useState } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import { MonthlyRecord } from '../../types';
import { FORMAT_IDR, FORMAT_IDR_SHORT } from '../../data/mockData';
import { ArrowDown } from 'lucide-react';

interface ExpenseBreakdownChartProps {
  currentMonthData: MonthlyRecord;
}

export const ExpenseBreakdownChart: React.FC<ExpenseBreakdownChartProps> = ({
  currentMonthData,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalExpense = currentMonthData.expense;
  const breakdown = currentMonthData.expenseBreakdown;

  const data = breakdown.map((item) => ({
    name: item.category,
    value: item.amount,
    budget: item.budget,
    color: item.color,
    percentage: ((item.amount / totalExpense) * 100).toFixed(1),
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl text-xs z-50">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="font-bold text-white text-sm">{item.name}</span>
          </div>
          <div className="space-y-1 text-slate-300">
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Pengeluaran:</span>
              <span className="font-bold text-white">{FORMAT_IDR(item.value)}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Pagu Anggaran:</span>
              <span className="text-slate-300">{FORMAT_IDR(item.budget)}</span>
            </div>
            <div className="flex justify-between gap-4 pt-1.5 border-t border-slate-800 text-[11px]">
              <span className="text-slate-400">Porsi Pengeluaran:</span>
              <span className="font-bold text-amber-400">{item.percentage}%</span>
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
            Kategori & Struktur Biaya OPEX
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Total: {FORMAT_IDR_SHORT(totalExpense)}
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Distribusi pos pengeluaran operasional bulan {currentMonthData.monthName}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Donut Chart */}
        <div className="md:col-span-5 h-52 sm:h-56 relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={52}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="#0f172a"
                    strokeWidth={activeIndex === index ? 3 : 1}
                    className="cursor-pointer transition-all duration-200"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Centered Donut Summary */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">TOTAL</span>
            <span className="text-sm font-bold text-white tracking-tight">
              {FORMAT_IDR_SHORT(totalExpense)}
            </span>
          </div>
        </div>

        {/* Breakdown List */}
        <div className="md:col-span-7 space-y-2 text-xs">
          {data.map((item, idx) => (
            <div
              key={item.name}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                activeIndex === idx
                  ? 'bg-slate-800 border-slate-600'
                  : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                ></span>
                <div>
                  <div className="font-semibold text-white truncate max-w-[140px]">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Budget: {FORMAT_IDR_SHORT(item.budget)}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-slate-200">
                  {FORMAT_IDR_SHORT(item.value)}
                </div>
                <div className="text-[10px] font-bold text-amber-400">
                  {item.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="text-emerald-400 font-semibold flex items-center gap-1">
          <ArrowDown className="w-3.5 h-3.5" />
          Efisiensi: Hemat Rp {(currentMonthData.targetExpense - currentMonthData.expense) / 1000000} Juta
        </span>
        <span className="text-slate-500 text-[11px]">Audit Budget: Terverifikasi</span>
      </div>
    </div>
  );
};
