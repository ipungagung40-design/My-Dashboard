import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  ArrowUpDown,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Clock,
  FileSpreadsheet,
} from 'lucide-react';
import { ReportItem, Department } from '../types';
import { FORMAT_IDR_SHORT } from '../data/mockData';

interface ReportDataTableProps {
  items: ReportItem[];
  selectedMonth: number;
  selectedYear: number;
  selectedDepartment: Department;
  onEditItem: (item: ReportItem) => void;
  onDeleteItem: (id: string) => void;
  onAddNew: () => void;
  searchTerm?: string;
}

type SortField = 'code' | 'metricName' | 'department' | 'target' | 'actual' | 'variance' | 'status';
type SortOrder = 'asc' | 'desc';

export const ReportDataTable: React.FC<ReportDataTableProps> = ({
  items,
  selectedMonth,
  selectedYear,
  selectedDepartment,
  onEditItem,
  onDeleteItem,
  onAddNew,
  searchTerm: externalSearch = '',
}) => {
  const [localSearch, setLocalSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [sortField, setSortField] = useState<SortField>('code');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const effectiveSearch = externalSearch || localSearch;

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Month & Year match
      const monthMatch = item.monthId === selectedMonth && item.year === selectedYear;
      if (!monthMatch) return false;

      // Department filter
      if (selectedDepartment !== 'All' && item.department !== selectedDepartment) {
        return false;
      }

      // Status filter
      if (statusFilter !== 'All' && item.status !== statusFilter) {
        return false;
      }

      // Search match
      if (effectiveSearch.trim()) {
        const query = effectiveSearch.toLowerCase();
        const matchesCode = item.code.toLowerCase().includes(query);
        const matchesName = item.metricName.toLowerCase().includes(query);
        const matchesOwner = item.owner.toLowerCase().includes(query);
        const matchesNotes = item.notes.toLowerCase().includes(query);
        return matchesCode || matchesName || matchesOwner || matchesNotes;
      }

      return true;
    });
  }, [items, selectedMonth, selectedYear, selectedDepartment, statusFilter, effectiveSearch]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      let valA: any = a[sortField as keyof ReportItem];
      let valB: any = b[sortField as keyof ReportItem];

      if (sortField === 'variance') {
        valA = ((a.actual - a.target) / a.target) * 100;
        valB = ((b.actual - b.target) / b.target) * 100;
      }

      if (typeof valA === 'string') {
        return sortOrder === 'asc'
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      return sortOrder === 'asc' ? valA - valB : valB - valA;
    });
  }, [filteredItems, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const getStatusBadge = (status: ReportItem['status']) => {
    switch (status) {
      case 'Exceeded':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Melampaui
          </span>
        );
      case 'On Track':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Clock className="w-3 h-3 mr-1" />
            Tercapai
          </span>
        );
      case 'At Risk':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Perlu Monitor
          </span>
        );
      case 'Needs Attention':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <AlertCircle className="w-3 h-3 mr-1" />
            Di Bawah Target
          </span>
        );
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white font-bold text-base sm:text-lg">
              Buku Audit & Indikator Kinerja (KPI Ledger)
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
              {filteredItems.length} Indikator
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Tabel komparasi metrik capaian, deviasi persentase terhadap target, dan catatan audit PIC
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Cari indikator / PIC..."
              className="bg-slate-950 border border-slate-800 rounded-full pl-9 pr-3.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-44 sm:w-52"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-full px-3 py-1.5 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent text-slate-300 font-medium focus:outline-none cursor-pointer"
            >
              <option value="All" className="bg-slate-900 text-slate-200">Semua Status</option>
              <option value="Exceeded" className="bg-slate-900 text-emerald-400">Melampaui</option>
              <option value="On Track" className="bg-slate-900 text-blue-400">Tercapai</option>
              <option value="At Risk" className="bg-slate-900 text-amber-400">Perlu Monitor</option>
              <option value="Needs Attention" className="bg-slate-900 text-rose-400">Di Bawah Target</option>
            </select>
          </div>

          {/* Add KPI button */}
          <button
            onClick={onAddNew}
            className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/20"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Indikator</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto mt-4 rounded-xl border border-slate-800">
        <table className="w-full text-left text-xs text-slate-300 border-collapse">
          <thead className="bg-slate-950/80 text-slate-500 font-bold uppercase tracking-widest text-[10px] border-b border-slate-800">
            <tr>
              <th
                onClick={() => handleSort('code')}
                className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  Kode
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('metricName')}
                className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  Nama Indikator
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('department')}
                className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  Divisi
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('target')}
                className="py-3.5 px-4 text-right cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center justify-end gap-1">
                  Target
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('actual')}
                className="py-3.5 px-4 text-right cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center justify-end gap-1">
                  Realisasi
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('variance')}
                className="py-3.5 px-4 text-right cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center justify-end gap-1">
                  Capaian (%)
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('status')}
                className="py-3.5 px-4 text-center cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center justify-center gap-1">
                  Status Validasi
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3.5 px-4">PIC Penanggung Jawab</th>
              <th className="py-3.5 px-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {sortedItems.length > 0 ? (
              sortedItems.map((item) => {
                const achievementRate = ((item.actual / item.target) * 100);
                const variance = item.actual - item.target;
                const isCurrency = item.unit === 'IDR';

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-800/50 transition-colors group"
                  >
                    <td className="py-3 px-4 font-mono font-semibold text-blue-400">
                      {item.code}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-white">
                        {item.metricName}
                      </div>
                      {item.notes && (
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                          {item.notes}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                        {item.department}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-slate-400">
                      {isCurrency
                        ? FORMAT_IDR_SHORT(item.target)
                        : `${item.target} ${item.unit}`}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-white">
                      {isCurrency
                        ? FORMAT_IDR_SHORT(item.actual)
                        : `${item.actual} ${item.unit}`}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div
                        className={`font-bold ${
                          achievementRate >= 100 ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {achievementRate.toFixed(1)}%
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {variance >= 0 ? '+' : ''}
                        {isCurrency ? FORMAT_IDR_SHORT(variance) : `${variance} ${item.unit}`}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-3 px-4 text-slate-300 font-medium">
                      {item.owner}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onEditItem(item)}
                          title="Ubah Indikator"
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-400 transition-colors"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteItem(item.id)}
                          title="Hapus Indikator"
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 hover:text-white text-slate-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={9} className="py-10 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FileSpreadsheet className="w-8 h-8 text-slate-600" />
                    <span>Tidak ada indikator laporan yang sesuai dengan filter.</span>
                    <button
                      onClick={onAddNew}
                      className="text-xs text-blue-400 hover:underline font-semibold"
                    >
                      + Tambah Indikator Baru
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
