import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { MonthlyRecord, Department } from '../../types';
import { FORMAT_IDR_SHORT, FORMAT_IDR } from '../../data/mockData';
import { Building2, Award } from 'lucide-react';

interface DepartmentPerformanceChartProps {
  currentMonthData: MonthlyRecord;
  selectedDepartment: Department;
  onSelectDepartment: (dept: Department) => void;
}

export const DepartmentPerformanceChart: React.FC<DepartmentPerformanceChartProps> = ({
  currentMonthData,
  selectedDepartment,
  onSelectDepartment,
}) => {
  const data = currentMonthData.departmentPerformance.map((dept) => ({
    ...dept,
    shortTarget: dept.target / 1000000,
    shortRealization: dept.realization / 1000000,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl text-xs z-50">
          <div className="font-bold text-white mb-2 flex items-center justify-between gap-4">
            <span className="text-sm">{item.department}</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                item.achievementRate >= 100
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-amber-500/10 text-amber-400'
              }`}
            >
              {item.achievementRate.toFixed(1)}% Tercapai
            </span>
          </div>
          <div className="space-y-1 text-slate-300">
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Target Anggaran:</span>
              <span className="font-semibold text-white">{FORMAT_IDR(item.target)}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Realisasi Aktual:</span>
              <span className="font-semibold text-emerald-400">
                {FORMAT_IDR(item.realization)}
              </span>
            </div>
            <div className="flex justify-between gap-4 pt-1.5 border-t border-slate-800 text-[11px]">
              <span className="text-slate-400">Varians:</span>
              <span
                className={`font-semibold ${
                  item.realization >= item.target ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {item.realization >= item.target ? '+' : ''}
                {FORMAT_IDR(item.realization - item.target)}
              </span>
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
            Pencapaian Target per Divisi
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Periode {currentMonthData.monthName}
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Komparasi target anggaran kinerja vs realisasi per departemen
        </p>
      </div>

      <div className="w-full h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 20 }}
            onClick={(state: any) => {
              if (state && state.activePayload && state.activePayload.length) {
                const clickedItem = state.activePayload[0].payload;
                onSelectDepartment(clickedItem.department);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="department"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              interval={0}
              angle={-15}
              textAnchor="end"
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
              tickFormatter={(val) => `Rp ${(val / 1000000).toFixed(0)}Jt`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
              formatter={(value) => <span className="text-slate-300 font-medium">{value}</span>}
            />
            <Bar
              dataKey="target"
              name="Target Anggaran"
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
              barSize={18}
            />
            <Bar
              dataKey="realization"
              name="Realisasi Aktual"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <Award className="w-3.5 h-3.5" />
          Top Output: Divisi Sales & Marketing
        </span>
        <button
          onClick={() => onSelectDepartment('All')}
          className="text-xs text-blue-400 font-medium hover:underline"
        >
          {selectedDepartment === 'All' ? 'Tampilkan Semua' : `Filter: ${selectedDepartment}`}
        </button>
      </div>
    </div>
  );
};
