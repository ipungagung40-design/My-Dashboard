import React from 'react';
import {
  DollarSign,
  CreditCard,
  PieChart as PieIcon,
  ShieldCheck,
  Users,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Target,
} from 'lucide-react';
import { MonthlyRecord, ComparisonMode } from '../types';
import { FORMAT_IDR, FORMAT_IDR_SHORT } from '../data/mockData';

interface KPICardGridProps {
  currentMonthData: MonthlyRecord;
  prevMonthData?: MonthlyRecord;
  comparisonMode: ComparisonMode;
}

export const KPICardGrid: React.FC<KPICardGridProps> = ({
  currentMonthData,
  prevMonthData,
  comparisonMode,
}) => {
  // Calculations
  const revenue = currentMonthData.revenue;
  const targetRevenue = currentMonthData.targetRevenue;
  const revenueAchievement = (revenue / targetRevenue) * 100;
  const revenueVariance = revenue - targetRevenue;
  const revenueMoM = prevMonthData
    ? ((revenue - prevMonthData.revenue) / prevMonthData.revenue) * 100
    : 0;

  const expense = currentMonthData.expense;
  const targetExpense = currentMonthData.targetExpense;
  const expenseBudgetUsage = (expense / targetExpense) * 100;
  const expenseSavings = targetExpense - expense;
  const expenseMoM = prevMonthData
    ? ((expense - prevMonthData.expense) / prevMonthData.expense) * 100
    : 0;

  const netProfit = currentMonthData.netProfit;
  const targetProfit = currentMonthData.targetNetProfit;
  const profitMargin = (netProfit / revenue) * 100;
  const profitMoM = prevMonthData
    ? ((netProfit - prevMonthData.netProfit) / prevMonthData.netProfit) * 100
    : 0;

  const sla = currentMonthData.slaPerformance;
  const slaTarget = 95.0;
  const slaDiff = sla - slaTarget;

  const customers = currentMonthData.customerGrowth;
  const customerMoM = prevMonthData
    ? ((customers - prevMonthData.customerGrowth) / prevMonthData.customerGrowth) * 100
    : 0;

  const completedTasks = currentMonthData.completedTasks;
  const activeProjects = currentMonthData.activeProjects;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {/* 1. Total Pendapatan / Revenue */}
      <div
        id="kpi-card-revenue"
        className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl transition-all shadow-xs flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              Total Pendapatan
            </p>
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <DollarSign className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {FORMAT_IDR_SHORT(revenue)}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Target: {FORMAT_IDR_SHORT(targetRevenue)}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-end justify-between text-xs">
          {comparisonMode === 'mom' ? (
            <span
              className={`font-bold text-xs px-2 py-0.5 rounded flex items-center gap-0.5 ${
                revenueMoM >= 0
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-rose-500/10 text-rose-400'
              }`}
            >
              {revenueMoM >= 0 ? '+' : ''}
              {revenueMoM.toFixed(1)}% MoM
            </span>
          ) : (
            <span
              className={`font-bold text-xs px-2 py-0.5 rounded flex items-center gap-0.5 ${
                revenueAchievement >= 100
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-amber-500/10 text-amber-400'
              }`}
            >
              {revenueAchievement.toFixed(1)}% Capaian
            </span>
          )}
          <span className="text-slate-400 text-[11px] font-medium">
            {revenueVariance >= 0
              ? `+${FORMAT_IDR_SHORT(revenueVariance)}`
              : FORMAT_IDR_SHORT(revenueVariance)}
          </span>
        </div>
      </div>

      {/* 2. Total Pengeluaran / OPEX */}
      <div
        id="kpi-card-expense"
        className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl transition-all shadow-xs flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              Total Beban OPEX
            </p>
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <CreditCard className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {FORMAT_IDR_SHORT(expense)}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Pagu: {FORMAT_IDR_SHORT(targetExpense)}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-end justify-between text-xs">
          <span
            className={`font-bold text-xs px-2 py-0.5 rounded flex items-center gap-0.5 ${
              expenseBudgetUsage <= 100
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-rose-500/10 text-rose-400'
            }`}
          >
            {expenseBudgetUsage.toFixed(1)}% Pagu
          </span>
          <span
            className={`text-[11px] font-medium ${
              expenseSavings >= 0 ? 'text-emerald-400' : 'text-rose-400'
            }`}
          >
            {expenseSavings >= 0
              ? `Hemat ${FORMAT_IDR_SHORT(expenseSavings)}`
              : `Over ${FORMAT_IDR_SHORT(Math.abs(expenseSavings))}`}
          </span>
        </div>
      </div>

      {/* 3. Laba Bersih / Net Profit */}
      <div
        id="kpi-card-netprofit"
        className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl transition-all shadow-xs flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              Laba Bersih
            </p>
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <PieIcon className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">
            {FORMAT_IDR_SHORT(netProfit)}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Margin: <span className="text-slate-200 font-semibold">{profitMargin.toFixed(1)}%</span>
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-end justify-between text-xs">
          <span
            className={`font-bold text-xs px-2 py-0.5 rounded flex items-center gap-0.5 ${
              profitMoM >= 0
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-rose-500/10 text-rose-400'
            }`}
          >
            {profitMoM >= 0 ? '+' : ''}
            {profitMoM.toFixed(1)}% MoM
          </span>
          <span className="text-slate-400 text-[11px]">
            Target: {FORMAT_IDR_SHORT(targetProfit)}
          </span>
        </div>
      </div>

      {/* 4. SLA Kinerja Layanan */}
      <div
        id="kpi-card-sla"
        className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl transition-all shadow-xs flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              SLA Operasional
            </p>
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {sla.toFixed(1)}%
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Standar Target: 95.0%
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-end justify-between text-xs">
          <span className="bg-emerald-500/10 text-emerald-400 font-bold text-xs px-2 py-0.5 rounded">
            +{slaDiff.toFixed(1)}% Target
          </span>
          <span className="text-slate-400 text-[11px]">SLA Prima</span>
        </div>
      </div>

      {/* 5. Akuisisi Klien Baru */}
      <div
        id="kpi-card-clients"
        className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl transition-all shadow-xs flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              Klien B2B Baru
            </p>
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
              <Users className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            +{customers}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Proyek Aktif: <span className="text-slate-200 font-semibold">{activeProjects}</span>
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-end justify-between text-xs">
          <span
            className={`font-bold text-xs px-2 py-0.5 rounded flex items-center gap-0.5 ${
              customerMoM >= 0
                ? 'bg-purple-500/10 text-purple-400'
                : 'bg-rose-500/10 text-rose-400'
            }`}
          >
            {customerMoM >= 0 ? '+' : ''}
            {customerMoM.toFixed(1)}% MoM
          </span>
          <span className="text-slate-400 text-[11px]">Ekspansi Pasar</span>
        </div>
      </div>

      {/* 6. Produktivitas & Tasks */}
      <div
        id="kpi-card-productivity"
        className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl transition-all shadow-xs flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              Milestone Selesai
            </p>
            <div className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center border border-teal-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {completedTasks}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Kepuasan Tim:{' '}
            <span className="text-slate-200 font-semibold">
              {currentMonthData.employeeSatisfaction}%
            </span>
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-end justify-between text-xs">
          <span className="bg-teal-500/10 text-teal-400 font-bold text-xs px-2 py-0.5 rounded">
            On Schedule
          </span>
          <span className="text-slate-400 text-[11px]">Sprint Delivery</span>
        </div>
      </div>
    </div>
  );
};
